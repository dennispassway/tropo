define(['jquery', 'threejs', 'oculus', 'fpc', 'windowResize', 'variables', 'skybox', 'particles', 'models'],
 function($, three, oculus, fpc, onWindowResize, variables, skybox, particles, models) {

  var app = {
    init: function () {
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

      // Particles
      particles.init(); // if (!worldNumber || worldNumber == 1)

      // Get, load and place models
      models.init();

      // Create Clock
      clock = new THREE.Clock();

      // Create world
      container.innerHTML = "";
      container.appendChild( renderer.domElement );

      // Make screen resizable
      window.addEventListener( 'resize', onWindowResize, false );
    },

    animate: function () {
      window.requestAnimationFrame( app.animate );

      // Make particles move
      particles.update();

      // Make skybox move with camera
      // scene.childen.position.set(camera.position.x,camera.position.y,camera.position.z);

      // checkPositionDistance();
      // checkAnimationDistance();

      // Object animation update
      // for (a = 0; a<object.length; a++) {
      //   if (object[a].animation) { object[a].animation.update(0.02); }
      //   if (object[a].worldAnimation.movementAnimation) { object[a].worldAnimation.movementAnimation(); }
      // }

      // Render the new image
      app.render();
    },

    render: function () {
      controls.update( clock.getDelta() );
      renderer.render( scene, camera );
    }

  };
  return app;

});
