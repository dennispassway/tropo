var container, camera, controls, scene, renderer, boundingBox;
var clock = new THREE.Clock();
var processingData;

function init() {
  container = document.getElementById( 'container' );

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2( 0xA2BED8, startFogAfstand );

  // Camera
  camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, near, far );
  setCameras();

  // Controls
  cameraTarget = new THREE.Object3D();
  spocontrols = new THREE.FirstPersonControls( cameraTarget );

  // Renderer
  renderer = new THREE.WebGLRenderer( {antialias : true});
  renderer.setClearColor( 0xA2BED8 );
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Modellen laden
  for (var m = 0; m < jsonSet.length; m++){
    modellenLaden(m);
  }

  // Bounding Box & Particles
  loadSkyBox();
  if (!worldNumber || worldNumber == 1) addParticles();

  // Create world
  container.innerHTML = "";
  container.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize, false );
}

// Animate
function animate() {
  requestAnimationFrame( animate );
  checkPositionDistance();
  checkAnimationDistance();
  skybox.position.set(camera.position.x,camera.position.y,camera.position.z);
  updateParticles();
  // Object animation update
  for (a = 0; a<object.length; a++) {
    if (object[a].animation) { object[a].animation.update(0.02); }
    if (object[a].worldAnimation.movementAnimation) { object[a].worldAnimation.movementAnimation(); }
  }
  render();
}

// Render
function render() {
  controls.update( clock.getDelta() );
  renderer.render( scene, camera );

  effect.render( scene, camera );
}
