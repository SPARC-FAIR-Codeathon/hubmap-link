<template>
  <div id="app">
    <div class="left-top">
      <div class="title">SPARC heart + HuBMAP CCF Male Heart registrations</div>
      <ScaffoldVuer
        ref="scaffold1"
        :displayMarkers="displayMarkers"
        :display-u-i="displayUI"
        :url="viewer_1.url"
        :format="viewer_1.format"
      />
    </div>
    <div class="right-top">
      <div class="title">HuBMAP CCF Male Heart Reference Organ + registrations</div>
      <ScaffoldVuer
        ref="scaffold2"
        :displayMarkers="displayMarkers"
        :display-u-i="displayUI"
        :url="viewer_2.url"
        :format="viewer_2.format"
        @on-ready="onReady"
      />
    </div>
    <div class="left-bottom">
      <div class="title">SPARC heart + HuBMAP CCF Female Heart registrations</div>
      <ScaffoldVuer
        ref="scaffold3"
        :displayMarkers="displayMarkers"
        :display-u-i="displayUI"
        :url="viewer_3.url"
        :format="viewer_3.format"
      />
    </div>
    <div class="right-bottom">
      <div class="title">HuBMAP CCF Female Heart Reference Organ + registrations</div>
      <ScaffoldVuer
        ref="scaffold4"
        :displayMarkers="displayMarkers"
        :display-u-i="displayUI"
        :url="viewer_4.url"
        :format="viewer_4.format"
        @on-ready="onReady2"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert, no-console */
import { ScaffoldVuer } from '@abi-software/scaffoldvuer';
import '@abi-software/scaffoldvuer/dist/scaffoldvuer.css';

export default {
  name: "App",
  components: {
    ScaffoldVuer
  },
  data: function() {
    return {
      displayUI: true,
      displayMarkers: false,
      viewer_1 : {
        url: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/heart_m_metadata.json",
        format: "metadata",
      },
      viewer_2 : {
        url: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/donor_with_view.json",
        format: "metadata",
      },
      gltfLink1: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/VH_M_Heart_only.glb",
      viewer_3 : {
        url: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/female/heart_f_metadata.json",
        format: "metadata",
      },
      viewer_4 : {
        url: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/female/donor_with_view.json",
        format: "metadata",
      },
      gltfLink2: "https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/female/VH_F_Heart_only.glb",
    };
  },
  methods: {
    /**
     * This method set the transformation and alpha / opacity of the mesh in the glb/gltf format.
     */
    setGLTFTransformation: function() {
      return() => {
        //Get the group containing all the meshes, VH_M_heart is the one used in the original source
        const childRegion = this.$refs.scaffold2.$module.scene.getRootRegion().getChildWithName("VH_M_heart");
        const group = childRegion.getGroup();
        //Setting the position of the group containning the meshes. Group is the THREE.Group/Object3D object.
        group.position.set(0.04344825, -0.423371166, 0.0150267193);
        group.matrixAutoUpdate = true;
        //const childArray = childRegion.getAll("SPARCM_heart");
        childRegion.forEachGeometry(object => {
            object.morph.matrixAutoUpdate = true;
            //Set the transparency for all the meshes in the group
            object.setAlpha(0.5);
          },
          true
        )
        //Load the view file containing the same viewing settings as the one on the left panel
        //This shoudl change if the mesh on the left (metadata) has changed.
        this.$refs.scaffold2.$module.scene.loadViewURL("https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/heart_m_view.json");
        this.$refs.scaffold2.$module.unsetFinishDownloadCallback();
      }
    },
    /**
     * This method set the transformation and alpha / opacity of the mesh in the glb/gltf format.
     */
    setGLTFTransformation2: function() {
      return() => {

        //Get the group containing all the meshes, VH_M_heart is the one used in the original source
        const childRegion = this.$refs.scaffold4.$module.scene.getRootRegion().getChildWithName("VH_F_heart");
        const group = childRegion.getGroup();
        //Setting the position of the group containning the meshes. Group is the THREE.Group/Object3D object.
        group.position.set(0.0349527262, -0.389061868, 0.106605567);
        group.matrixAutoUpdate = true;
        //const childArray = childRegion.getAll("SPARCM_heart");
        childRegion.forEachGeometry(object => {
            object.morph.matrixAutoUpdate = true;
            //Set the transparency for all the meshes in the group
            object.setAlpha(0.5);
          },
          true
        )

        //Load the view file containing the same viewing settings as the one on the left panel
        //This shoudl change if the mesh on the left (metadata) has changed.
        this.$refs.scaffold4.$module.scene.loadViewURL("https://mapcore-bucket1.s3.us-west-2.amazonaws.com/hubmaps_heart/female/heart_f_view.json");
        this.$refs.scaffold4.$module.unsetFinishDownloadCallback();
      }
    },
    onReady: function() {
      this.$refs.scaffold2.$module.setFinishDownloadCallback(
        this.setGLTFTransformation()
      );
      this.$refs.scaffold2.$module.loadGLTFFromURL(this.gltfLink1, "scene", false);
      this.gltfLoaded = true;
    },
    onReady2: function() {
      this.$refs.scaffold4.$module.setFinishDownloadCallback(
        this.setGLTFTransformation2()
      );
      this.$refs.scaffold4.$module.loadGLTFFromURL(this.gltfLink2, "scene", false);
      this.gltfLoaded = true;
    },
  },
};
</script>

<style>


#app {
  font-family: "Asap", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
}

.title {
  position: absolute;
  top: 17px;
  left: 110px;
  z-index: 1000;
  font-size: 16px;
  font-weight: 500;
}

.left-top {
  height: 50%;
  width: 50%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  position: absolute;
  z-index:2;
}

.right-top {
  height: 50%;
  width: 50%;
  left:50%;
  position: absolute;
}

.left-bottom {
  top:50%;
  height: 50%;
  width: 50%;
  border-right: 1px solid black;
  border-top: 1px solid black;
  position: absolute;
  z-index:2;
}

.right-bottom {
  top:50%;
  height: 50%;
  width: 50%;
  left:50%;
  border-top: 1px solid black;
  position: absolute;
}

body {
  margin: 0px;
}

</style>
