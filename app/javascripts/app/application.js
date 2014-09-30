define(['jquery', 'threejs', 'oculusEffect', 'oculusControls', 'fpc', 'windowResize', 'variables', 'skybox', 'particles', 'models', 'sounds', 'fullscreen'],
 function($, three, oculuseffect, oculuscontrols, fpc, onWindowResize, variables, skybox, particles, models, sounds, launchFullscreen) {

  var app = {

    useOculus: false,

    init: function () {
      container = document.getElementById( 'container' );

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2( 0xA2BED8, fogDistance );

      // Camera
      camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, near, far );

      // Controls
      controls = new THREE.FirstPersonControls( camera );
      controls.moveForward = true;

      // Renderer
      renderer = new THREE.WebGLRenderer( {antialias : true});
      renderer.setClearColor( 0xA2BED8 );
      renderer.setSize( window.innerWidth, window.innerHeight );

      // Skybox
      skybox.init();

      // Particles if we're in the snowworld
      if (world == 1) particles.init();

      // Get, load and place models
      models.init();

      // Load sounds
      sounds.load();

      // Create Clock
      clock = new THREE.Clock();

      // Create world
      container.innerHTML = "";
      container.appendChild( renderer.domElement );

      // Make screen resizable
      window.addEventListener( 'resize', onWindowResize, false );

      // Oculus setup
      if (app.useOculus) {
        effect = new THREE.OculusRiftEffect( renderer, {worldScale: 100} );
        effect.setSize( window.innerWidth, window.innerHeight );
        oculusControls = new THREE.OculusControls( camera );
        oculusControls.connect();
      }

      // Go fullscreen on click in body
      $('body').on('click', function() {
        launchFullscreen(document.documentElement);
      });
    },

    animate: function () {
      window.requestAnimationFrame( app.animate );

      // Make particles move and follow camera
      if (world == 1) {
        particles.update();
        particles.moveWithCamera();
      }

      // Make world move with camera
      skybox.moveWithCamera();
      models.moveWithCamera();

      // Check distance to objects for animation
      models.checkAnimationDistance();

      // Render the new image
      app.render();
    },

    render: function () {
      controls.update( clock.getDelta() );

      if (app.useOculus) {
        oculusControls.update( clock.getDelta() );
        effect.render( scene, camera );
      } else {
        renderer.render( scene, camera );
      }
    }

  };
  return app;

});
