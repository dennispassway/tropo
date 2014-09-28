// Check Nearness
function checkAnimationDistance() {
  for (i = 0; i < object.length; i++) {
    if (object[i].position.distanceTo(camera.position) < afstandAnimatie) {
      object[i].worldAnimation.nearObjectAnimation();
    }
  }
}
