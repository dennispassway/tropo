requirejs.config({

  baseUrl: 'javascripts/app',

  paths: {
    jquery: '../../vendor/jquery/dist/jquery.min',
    threejs: '../../vendor/threejs/build/three.min',
    oculusEffect: '../lib/OculusRift2Effect',
    oculusControls: '../lib/OculusControls',
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
