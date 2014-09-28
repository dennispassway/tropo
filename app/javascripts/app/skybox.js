define(function() {

  var skybox = {

    object: {},

    init: function () {
      skyboxLoader = new THREE.JSONLoader();

      skyboxModel = 'objects/model/boundingBox/boundingBox.js';
      // if (worldNumber == 1) skyboxModel = 'model/boundingBox/boundingBox.js';
      // if (worldNumber == 2) skyboxModel = 'model/nijntje/boundingBox/boundingBox.js';

      skyboxLoader.load(skyboxModel, function (geometry,materials) {
          skybox.object = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          skybox.object.scale.set(7,7,7);
          skybox.object.name = 'skybox';
          scene.add(skybox.object);
      });
    }
  };
  return skybox;

});
