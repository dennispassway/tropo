define(function() {

  var sounds = {

    load: function() {
      if (world == 1) backgroundMusic = new Audio('objects/sounds/tropo/backgroundMusic.mp3');
      if (world == 2) backgroundMusic = new Audio('objects/sounds/nijntje/backgroundmusic.mp3');
      backgroundMusic.loop = true;

      jetpackPinguinSound = new Audio('objects/sounds/tropo/pinguin-jetpack.mp3');
      scooterPinguinSound = new Audio('objects/sounds/tropo/pinguin-scooter.mp3');
      rocketPinguinSound = new Audio('objects/sounds/tropo/pinguin-rocket.mp3');
      ijsbeerSound = new Audio('objects/sounds/tropo/ijsbeer.mp3');
      narwalSound = new Audio('objects/sounds/tropo/narwal.mp3');
      meeuwSound = new Audio('objects/sounds/tropo/meeuw.mp3');

      nijntjeBalSound = new Audio('objects/sounds/nijntje/bal.mp3');
      nijntjeBeerSound = new Audio('objects/sounds/nijntje/beer.mp3');
      nijntjeMaanSound = new Audio('objects/sounds/nijntje/maan.mp3');
      nijntjeNijntjeSound = new Audio('objects/sounds/nijntje/nijntje.mp3');
      nijntjeOlifantSound = new Audio('objects/sounds/nijntje/olifant.mp3');
      nijntjeVogelSound = new Audio('objects/sounds/nijntje/vogel.mp3');
      nijntjeWolkSound = new Audio('objects/sounds/nijntje/wolk.mp3');
      nijntjeZonSound = new Audio('objects/sounds/nijntje/zon.mp3');
    },

    addSound: function(object) {
      switch(object.type){
        case 'pinguin-jetpack':
          return jetpackPinguinSound;
        case 'pinguin-scooter':
            return scooterPinguinSound;
        case 'pinguin-rocket':
            return rocketPinguinSound;
        case 'ijsbeer':
            return ijsbeerSound;
        case 'narwal':
            return narwalSound;
        case 'meeuw':
            return meeuwSound;

        case 'nijntjeBal':
            return nijntjeBalSound;
        case 'nijntjeBeer':
            return nijntjeBeerSound;
        case 'nijntjeMaan':
            return nijntjeMaanSound;
        case 'nijntjeNijntje':
            return nijntjeNijntjeSound;
        case 'nijntjeOlifant':
            return nijntjeOlifantSound;
        case 'nijntjeVogel':
            return nijntjeVogelSound;
        case 'nijntjeZon':
            return nijntjeZonSound;
      }
    }

  };
  return sounds;

});
