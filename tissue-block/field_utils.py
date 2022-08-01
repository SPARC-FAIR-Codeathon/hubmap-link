from opencmiss.zinc.fieldmodule import Fieldmodule
from opencmiss.zinc.field import Field
from opencmiss.utils.zinc.general import ChangeManager


def create_field_euler_angles_rotation_matrix(fieldmodule: Fieldmodule, euler_angles: Field) -> Field:
    """
    From OpenCMISS-Zinc graphics_library.cpp, matrix transposed to row major.
    Matrix is product RzRyRx, giving rotation about x, then y, then z with
    positive angles rotating by right hand rule about axis.
    :param fieldmodule: The fieldmodule to create the field in.
    :param euler_angles: 3-component field of angles in radians, components:
    0 = azimuth (about z)
    1 = elevation (about y)
    2 = roll (about x)
    :return: 3x3 rotation matrix field suitable for pre-multiplying vector v
    i.e. v' = Mv
    """
    assert euler_angles.getNumberOfComponents() == 3
    with ChangeManager(fieldmodule):
        azimuth = fieldmodule.createFieldComponent(euler_angles, 1)
        cos_azimuth = fieldmodule.createFieldCos(azimuth)
        sin_azimuth = fieldmodule.createFieldSin(azimuth)
        elevation = fieldmodule.createFieldComponent(euler_angles, 2)
        cos_elevation = fieldmodule.createFieldCos(elevation)
        sin_elevation = fieldmodule.createFieldSin(elevation)
        roll = fieldmodule.createFieldComponent(euler_angles, 3)
        cos_roll = fieldmodule.createFieldCos(roll)
        sin_roll = fieldmodule.createFieldSin(roll)
        minus_one = fieldmodule.createFieldConstant([-1.0])
        cos_azimuth_sin_elevation = cos_azimuth * sin_elevation
        sin_azimuth_sin_elevation = sin_azimuth * sin_elevation
        matrix_components = [
            cos_azimuth * cos_elevation,
            cos_azimuth_sin_elevation * sin_roll - sin_azimuth * cos_roll,
            cos_azimuth_sin_elevation * cos_roll + sin_azimuth * sin_roll,
            sin_azimuth * cos_elevation,
            sin_azimuth_sin_elevation * sin_roll + cos_azimuth * cos_roll,
            sin_azimuth_sin_elevation * cos_roll - cos_azimuth * sin_roll,
            minus_one * sin_elevation,
            cos_elevation * sin_roll,
            cos_elevation * cos_roll]
        rotation_matrix = fieldmodule.createFieldConcatenate(matrix_components)
    return rotation_matrix


def create_fields_transformations(coordinates: Field, rotation_angles=None, scale_value=1.0,
                                  translation_offsets=None, translation_scale_factor=1.0):
    """
    From ScaffoldFitter library (https://github.com/ABI-Software/scaffoldfitter) fitterstepalign.py
    Create constant fields for rotation, scale and translation containing the supplied
    values, plus the transformed coordinates applying them in the supplied order.
    :param coordinates: The coordinate field to scale, 3 components.
    :param rotation_angles: List of euler angles, length = number of components.
     See create_field_euler_angles_rotation_matrix.
    :param scale_value: Scalar to multiply all components of coordinates.
    :param translation_offsets: List of offsets, length = number of components.
    :param translation_scale_factor: Scaling to multiply translation by so it's magnitude can remain
    close to other parameters for rotation (radians) and scale (assumed close to unit).
    :return: 4 fields: transformedCoordinates, rotation, scale, translation
    """
    if rotation_angles is None:
        rotation_angles = [0.0, 0.0, 0.0]
    if translation_offsets is None:
        translation_offsets = [0.0, 0.0, 0.0]
    components_count = coordinates.getNumberOfComponents()
    assert (components_count == 3) and (len(rotation_angles) == components_count) \
           and (len(translation_offsets) == components_count), "createFieldsTransformations.  Invalid arguments"
    fieldmodule = coordinates.getFieldmodule()
    with ChangeManager(fieldmodule):
        # Rotate, scale, and translate model, in that order
        rotation = fieldmodule.createFieldConstant(rotation_angles)
        scale = fieldmodule.createFieldConstant(scale_value)
        translation = fieldmodule.createFieldConstant(translation_offsets)
        rotation_matrix = create_field_euler_angles_rotation_matrix(fieldmodule, rotation)
        rotated_coordinates = fieldmodule.createFieldMatrixMultiply(components_count, rotation_matrix, coordinates)
        transformed_coordinates = rotated_coordinates * scale + (
            translation if (translation_scale_factor == 1.0) else
            translation * fieldmodule.createFieldConstant([translation_scale_factor] * components_count))
        assert transformed_coordinates.isValid()
    return transformed_coordinates, rotation, scale, translation


def evaluate_field_mesh_integral(field: Field, coordinates: Field, mesh, number_of_points=4):
    """
    Integrate value of a field over mesh using Gaussian Quadrature.
    :param field: Field to integrate over mesh.
    :param coordinates: Field giving spatial coordinates to integrate over.
    :param mesh: The mesh or mesh group to integrate over.
    :param number_of_points: Number of integration points in each dimension.
    :return: Integral value.
    """
    fieldmodule = mesh.getFieldmodule()
    components_count = field.getNumberOfComponents()
    with ChangeManager(fieldmodule):
        integral = fieldmodule.createFieldMeshIntegral(field, coordinates, mesh)
        integral.setNumbersOfPoints(number_of_points)
        fieldcache = fieldmodule.createFieldcache()
        result, value = integral.evaluateReal(fieldcache, components_count)
        del integral
        del fieldcache
    return value
