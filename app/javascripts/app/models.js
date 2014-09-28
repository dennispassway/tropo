define(['convert', 'sounds'], function(convert, sounds) {

  var models = {

    data: [],

    objects: [],

    init: function() {
      models.get();
    },

    get: function () {

      // var databaseNumber = worldNumber;
      var databaseSheet = 'https://spreadsheets.google.com/feeds/list/0AtGWqQf8eM2OdHVsS2w2QWI5NFhJN2tJUXlLTkhFRUE/1/public/values?alt=json';

      databaseSheet = 'https://spreadsheets.google.com/feeds/list/0AtGWqQf8eM2OdHVsS2w2QWI5NFhJN2tJUXlLTkhFRUE/1/public/values?alt=json'; // if (databaseNumber == 1)
      // if (databaseNumber == 2) databaseSheet = 'https://spreadsheets.google.com/feeds/list/0AtGWqQf8eM2OdHVsS2w2QWI5NFhJN2tJUXlLTkhFRUE/2/public/values?alt=json';

      $.getJSON(databaseSheet, function(data){

        for (var i = 0; i < data.feed.entry.length; i++) {
          name = data.feed.entry[i].gsx$name.$t;
          model = data.feed.entry[i].gsx$model.$t;
          x = data.feed.entry[i].gsx$x.$t;
          y = data.feed.entry[i].gsx$y.$t;
          z = data.feed.entry[i].gsx$z.$t;
          scale = data.feed.entry[i].gsx$scale.$t;
          rotationX = data.feed.entry[i].gsx$rotationx.$t;
          rotationY = data.feed.entry[i].gsx$rotationy.$t;
          rotationZ = data.feed.entry[i].gsx$rotationz.$t;
          beweegSnelheid = data.feed.entry[i].gsx$beweegsnelheid.$t;

          object = {'name': name, 'model': model, 'x': parseFloat(x), 'y': parseFloat(y), 'z': parseFloat(z), 'scale': parseFloat(scale), 'rotationX': parseFloat(rotationX), 'rotationY': parseFloat(rotationY), 'rotationZ': parseFloat(rotationZ), 'beweegSnelheid': parseFloat(beweegSnelheid)};
          models.data.push(object);

          if (i == data.feed.entry.length-1) {
            models.load();
          }
        }

      });

    },

    load: function() {

      new THREE.JSONLoader().load('objects/model/wolk-1.js', function (geometry,materials) {
          models.wolk1 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      new THREE.JSONLoader().load('objects/model/wolk-2.js', function (geometry,materials) {
          models.wolk2 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      new THREE.JSONLoader().load('objects/model/wolk-3.js', function (geometry,materials) {
          models.wolk3 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      new THREE.JSONLoader().load('objects/model/pinguin-1-jetpack.js', function (geometry,materials) {
          models.pinguin1 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.pinguin1.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      new THREE.JSONLoader().load('objects/model/pinguin-2-scooter.js', function (geometry,materials) {
          models.pinguin2 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.pinguin2.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      new THREE.JSONLoader().load('objects/model/pinguin-3-rocket.js', function (geometry,materials) {
          models.pinguin3 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.pinguin3.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      new THREE.JSONLoader().load('objects/model/ijsbeer.js', function (geometry,materials) {
          models.ijsbeer = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.ijsbeer.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      new THREE.JSONLoader().load('objects/model/narwal.js', function (geometry,materials) {
          models.narwal = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.narwal.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      new THREE.JSONLoader().load('objects/model/meeuw.js', function (geometry,materials) {
          models.meeuw = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = models.meeuw.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
      });

      setTimeout(function() {
        models.place(); // TODO: has to be a better way
      }, 1500);

    },

    place: function() {

      for (var m = 0; m < models.data.length; m++){
        switch(models.data[m].model){
          case 'wolk1':
          models.objects[m] = models.wolk1.clone();
          break;
          case 'wolk2':
          models.objects[m] = models.wolk2.clone();
          break;
          case 'wolk3':
          models.objects[m] = models.wolk3.clone();
          break;
          case 'pinguin-jetpack':
          models.objects[m] = models.pinguin1.clone();
          break;
          case 'pinguin-scooter':
          models.objects[m] = models.pinguin2.clone();
          break;
          case 'pinguin-rocket':
          models.objects[m] = models.pinguin3.clone();
          break;
          case 'ijsbeer':
          models.objects[m] = models.ijsbeer.clone();
          break;
          case 'narwal':
          models.objects[m] = models.narwal.clone();
          break;
          case 'meeuw':
          models.objects[m] = models.meeuw.clone();
          break;
        }

        models.objects[m].name = models.data[m].name;
        models.objects[m].type = models.data[m].model;
        models.objects[m].position.set(models.data[m].x, models.data[m].y, models.data[m].z);
        models.objects[m].scale.set(models.data[m].scale, models.data[m].scale, models.data[m].scale);
        models.objects[m].rotation.set(convert.toRadian(models.data[m].rotationX),convert.toRadian(models.data[m].rotationY),convert.toRadian(models.data[m].rotationZ));
        models.objects[m].sound = new sounds.addSound(models.objects[m]);
        scene.add(models.objects[m]);
      }

    },

    verschilX: [],
    verschilY: [],
    verschilZ: [],
    moveWithCamera: function() {
      for (i=0; i < models.objects.length; i++){
        if(models.objects[i].position.distanceTo(camera.position) > activeArea) {
          models.verschilX[i] = models.objects[i].position.x - camera.position.x;
          models.verschilY[i] = models.objects[i].position.y - camera.position.y;
          models.verschilZ[i] = models.objects[i].position.z - camera.position.z;

          if (models.verschilX[i] < -activeArea) { models.objects[i].position.x = models.objects[i].position.x + (2*activeArea-200); }
          if (models.verschilX[i] > activeArea) { models.objects[i].position.x = models.objects[i].position.x - (2*activeArea-200); }
          if (models.verschilY[i] < -activeArea) { models.objects[i].position.y = models.objects[i].position.y + (2*activeArea-200); }
          if (models.verschilY[i] > activeArea) { models.objects[i].position.y = models.objects[i].position.y - (2*activeArea-200); }
          if (models.verschilZ[i] < -activeArea) { models.objects[i].position.z = models.objects[i].position.z + (2*activeArea-200); }
          if (models.verschilZ[i] > activeArea) { models.objects[i].position.z = models.objects[i].position.z - (2*activeArea-200); }
        }
      }
    },

    checkAnimationDistance: function() {
      for (i = 0; i < models.objects.length; i++) {
        if (models.objects[i].position.distanceTo(camera.position) < animationDistance) {

          // if (models.objects[i].animation && !models.objects[i].animation.isPlaying){
              // models.objects[i].animation.play();
              // if (game) game.collectElement(models.objects[i]);
          // }

          if (typeof models.objects[i].sound.play == 'function') {
            models.objects[i].sound.play();
          }

        }
      }
    }

  };
  return models;

});
