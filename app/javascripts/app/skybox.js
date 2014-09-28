define(function() {

  var skybox = {

    object: {},

    init: function () {
      skyboxLoader = new THREE.JSONLoader();

      skyboxModel = 'objects/model/boundingBox/boundingBox.js';
      if (worldNumber == 1) skyboxModel = 'objects/model/boundingBox/boundingBox.js';
      if (worldNumber == 2) skyboxModel = 'objects/model/nijntje/boundingBox/boundingBox.js';

      skyboxLoader.load(skyboxModel, function (geometry,materials) {
          skybox.object = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          skybox.object.scale.set(7,7,7);
          skybox.object.name = 'skybox';
          scene.add(skybox.object);
      });
    },

    moveWithCamera: function() {
      skybox.object.position.set(camera.position.x,camera.position.y,camera.position.z);
    }
  };
  return skybox;

});
