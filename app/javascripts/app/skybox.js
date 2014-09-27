define(function() {

  var skybox = {
    init: function () {
      skyboxLoader = new THREE.JSONLoader();

      skyboxModel = 'objects/model/boundingBox/boundingBox.js';
      // if (worldNumber == 1) skyboxModel = 'model/boundingBox/boundingBox.js';
      // if (worldNumber == 2) skyboxModel = 'model/nijntje/boundingBox/boundingBox.js';

      skyboxLoader.load(skyboxModel, function (geometry,materials) {
          skybox = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          skybox.scale.set(7,7,7);
          skybox.name = 'skybox';
          scene.add(skybox);
      });
    }
  };
  return skybox;

});
