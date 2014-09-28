define(['jquery', 'threejs', 'oculus', 'fpc', 'windowResize', 'variables', 'skybox', 'particles', 'models', 'sounds'],
 function($, three, oculus, fpc, onWindowResize, variables, skybox, particles, models, sounds) {

  var app = {
    init: function (oculus) {
      container = document.getElementById( 'container' );

      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2( 0xA2BED8, fogDistance );

      // Camera
      camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, near, far );

      // Controls
      controls = new THREE.FirstPersonControls( camera );

      // Renderer
      renderer = new THREE.WebGLRenderer( {antialias : true});
      renderer.setClearColor( 0xA2BED8 );
      renderer.setSize( window.innerWidth, window.innerHeight );

      // Skybox
      skybox.init();

      // Particles if we're in the snowworld
      if (!worldNumber || worldNumber == 1) particles.init();

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

      // Configure oculus effect
      effect = new THREE.OculusRiftEffect( renderer, {worldScale: 100} );
      effect.setSize( window.innerWidth, window.innerHeight );
    },

    animate: function () {
      window.requestAnimationFrame( app.animate );

      // Make particles move
      if (!worldNumber || worldNumber == 1) particles.update();

      // Make world move with camera
      skybox.moveWithCamera();
      models.moveWithCamera();
      if (!worldNumber || worldNumber == 1) particles.moveWithCamera();

      // Check distance too objects for animation
      models.checkAnimationDistance();

      // Update object animations
      // for (a = 0; a<object.length; a++) {
      //   if (object[a].animation) { object[a].animation.update(0.02); }
      //   if (object[a].worldAnimation.movementAnimation) { object[a].worldAnimation.movementAnimation(); }
      // }

      // Render the new image
      app.render();
    },

    render: function () {
      controls.update( clock.getDelta() );

      effect.render( scene, camera );
      //   renderer.render( scene, camera );
    }

  };
  return app;

});
