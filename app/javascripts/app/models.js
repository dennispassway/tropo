define(function() {

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

      var wolk1, wolk2, wolk3, pinguin1, pinguin2, pinguin3, ijsbeer, narwal, meeuw;

      wolk1Loader = new THREE.JSONLoader();
      wolk2Loader = new THREE.JSONLoader();
      wolk3Loader = new THREE.JSONLoader();
      pinguin1Loader = new THREE.JSONLoader();
      pinguin2Loader = new THREE.JSONLoader();
      pinguin3Loader = new THREE.JSONLoader();
      ijsbeerLoader = new THREE.JSONLoader();
      narwalLoader = new THREE.JSONLoader();
      meeuwLoader = new THREE.JSONLoader();

      wolk1Loader.load('objects/model/wolk-1.js', function (geometry,materials) {
          wolk1 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      wolk2Loader.load('objects/model/wolk-2.js', function (geometry,materials) {
          wolk2 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      wolk3Loader.load('objects/model/wolk-3.js', function (geometry,materials) {
          wolk3 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      });

      pinguin1Loader.load('objects/model/pinguin-1-jetpack.js', function (geometry,materials) {
          pinguin1 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = pinguin1.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(pinguin1.geometry.animations[0]);
      });

      pinguin2Loader.load('objects/model/pinguin-2-scooter.js', function (geometry,materials) {
          pinguin2 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = pinguin2.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(pinguin2.geometry.animations[0]);
      });

      pinguin3Loader.load('objects/model/pinguin-3-rocket.js', function (geometry,materials) {
          pinguin3 = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = pinguin3.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(pinguin3.geometry.animations[0]);
      });

      ijsbeerLoader.load('objects/model/ijsbeer.js', function (geometry,materials) {
          ijsbeer = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = ijsbeer.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(ijsbeer.geometry.animations[0]);
      });

      narwalLoader.load('objects/model/narwal.js', function (geometry,materials) {
          narwal = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = narwal.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(narwal.geometry.animations[0]);
      });

      meeuwLoader.load('objects/model/meeuw.js', function (geometry,materials) {
          meeuw = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
          materials = meeuw.material.materials;
          for (i = 0,length = materials.length; i < length; i++) { mat = materials[i]; mat.skinning = true; }
          THREE.AnimationHandler.add(meeuw.geometry.animations[0]);
      });

    },

    place: function() {

      for (var m = 0; m < models.data.length; m++){
        switch(models.data[m].model){
          case 'wolk1':
          models.objects[m] = wolk1.clone();
          break;
          case 'wolk2':
          models.objects[m] = wolk2.clone();
          break;
          case 'wolk3':
          models.objects[m] = wolk3.clone();
          break;
          case 'pinguin-jetpack':
          models.objects[m] = pinguin1.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "PinguinJetpack", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'pinguin-scooter':
          models.objects[m] = pinguin2.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "PinguinScooter", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'pinguin-rocket':
          models.objects[m] = pinguin3.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "RocketAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'ijsbeer':
          models.objects[m] = ijsbeer.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "IjsbeerAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'narwal':
          models.objects[m] = narwal.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "NarwalAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'meeuw':
          models.objects[m] = meeuw.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "MeeuwAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeBal':
          models.objects[m] = nijntjeBal.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "BalAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeBeer':
          models.objects[m] = nijntjeBeer.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeBeerAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeMaan':
          models.objects[m] = nijntjeMaan.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeMaanAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeNijntje':
          models.objects[m] = nijntjeNijntje.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeOlifant':
          models.objects[m] = nijntjeOlifant.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeOlifantAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeVogel':
          models.objects[m] = nijntjeVogel.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeVogelAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeZon':
          models.objects[m] = nijntjeZon.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeZonAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeWolk1':
          models.objects[m] = nijntjeWolk1.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeWolkAction", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeWolk2':
          models.objects[m] = nijntjeWolk2.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeWolk2Action", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
          case 'nijntjeWolk3':
          models.objects[m] = nijntjeWolk3.clone();
          models.objects[m].animation = new THREE.Animation(models.objects[m], "nijntjeWolk3Action", THREE.AnimationHandler.CATMULLROM);
          models.objects[m].animation.loop = false;
          break;
        }

        models.objects[m].name = models.data[m].name;
        models.objects[m].type = models.data[m].model;
        models.objects[m].position.set(models.data[m].x, models.data[m].y, models.data[m].z);
        models.objects[m].scale.set(models.data[m].scale, models.data[m].scale, models.data[m].scale);
        models.objects[m].rotation.set(toRadian(models.data[m].rotationX),toRadian(models.data[m].rotationY),toRadian(models.data[m].rotationZ));
        models.objects[m].worldAnimation = new worldAnimation(models.objects[m]);
        models.objects[m].sound = new sound(models.objects[m]);
        scene.add(models.objects[m]);
      }

    }

  };
  return models;

});
