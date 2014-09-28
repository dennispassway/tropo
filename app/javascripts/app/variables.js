define(function() {

  // World
  activeArea = 9200;
  fogDistance = 0.00018;
  fov = 40;
  near = 1;
  far = activeArea+4500;

  // Controls
  movementSpeed = 3000;
  lookSpeed = 0.05;

  // Animation
  animationDistance = 1500;
  animationRotationSpeed = 0.02;

  // Get world variable from url
  urlVars = {};
  urlParts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      urlVars[key] = value;
  });
  worldNumber = urlVars.world;

});
