import numpy as np


def find_transformation(reference_block, target_block, scaling=True, reflection="best"):
    """ Find the transformation matrix using a Generalised Procrustes Analysis (GPA) approach.
    """

    x = reference_block
    y = target_block

    n, m = x.shape
    ny, my = y.shape

    mu_x = x.mean(0)
    mu_y = y.mean(0)

    x0 = x - mu_x
    y0 = y - mu_y

    ss_x = (x0 ** 2.).sum()
    ss_y = (y0 ** 2.).sum()

    # centred Frobenius norm
    norm_x = np.sqrt(ss_x)
    norm_y = np.sqrt(ss_y)

    # scale to equal (unit) norm
    x0 /= norm_x
    y0 /= norm_y

    if my < m:
        y0 = np.concatenate((y0, np.zeros(n, m - my)), 0)

    # optimum rotation matrix of y
    A = np.dot(x0.T, y0)
    U, s, Vt = np.linalg.svd(A, full_matrices=False)
    V = Vt.T
    T = V @ U.T

    if reflection != "best":
        # if the current solution use a reflection
        have_reflection = np.linalg.det(T) < 0
        # if that's not what was specified, force another reflection
        if reflection != have_reflection:
            V[:, -1] *= -1
            s[-1] *= -1
            T = V @ U.T

    trace_TA = s.sum()

    if scaling:
        # optimum scaling of y
        b = trace_TA * norm_x / norm_y

        # standardized distance between x and b*y*T + c
        d = 1 - trace_TA ** 2

        # transformed coordinates
        Z = norm_x * trace_TA * y0 @ T + mu_x

    else:
        b = 1
        d = 1 + ss_y / ss_x - 2 * trace_TA * norm_y / norm_x
        Z = norm_y * y0 @ T + mu_x

    # translation matrix
    if my < m:
        T = T[:my, :]
    c = mu_x - b * mu_y @ T

    # transformation
    tform = dict(rotation=T,
                 scale=b,
                 translation=c)

    return d, Z, tform
