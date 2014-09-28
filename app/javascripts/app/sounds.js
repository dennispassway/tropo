define(function() {

  var sounds = {

    load: function() {
      backgroundMusic = new Audio('objects/sounds/backgroundMusic.mp3');
      if (worldNumber == 1) backgroundMusic = new Audio('objects/sounds/backgroundMusic.mp3');
      if (worldNumber == 2) backgroundMusic = new Audio('objects/sounds/nijntje/backgroundmusic.mp3');
      backgroundMusic.loop = true;

      collectSound = new Audio('objects/sounds/collectSound.mp3');
      completedMusic = new Audio('objects/sounds/completedMusic.mp3');

      jetpackPinguinSound = new Audio('objects/sounds/pinguin-jetpack.mp3');
      scooterPinguinSound = new Audio('objects/sounds/pinguin-scooter.mp3');
      rocketPinguinSound = new Audio('objects/sounds/pinguin-rocket.mp3');
      ijsbeerSound = new Audio('objects/sounds/ijsbeer.mp3');
      narwalSound = new Audio('objects/sounds/narwal.mp3');
      meeuwSound = new Audio('objects/sounds/meeuw.mp3');

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
