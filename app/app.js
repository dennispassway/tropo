requirejs.config({

  baseUrl: 'javascripts/app',

  paths: {
    jquery: '../../vendor/jquery/dist/jquery.min',
    threejs: '../../vendor/threejs/build/three.min',
    oculus: '../lib/OculusRift2Effect',
    fpc: '../lib/FirstPersonControls',
    main: '../main'
  },

  shim: {
    'main': {
      deps: ['jquery', 'threejs']
    }
  }

});

requirejs(['main']);
