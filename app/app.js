requirejs.config({

  baseUrl: 'javascripts/app',

  paths: {
    jquery: '../../vendor/jquery/dist/jquery.min',
    threejs: '../../vendor/threejs/build/three.min',
    oculus: '../libs/OculusRiftEffect',
    fpc: '../libs/FirstPersonControls',
    main: '../main'
  }

});

requirejs(['main']);
