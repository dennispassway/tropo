define(function() {

  var particles = {
    init: function () {
      particleCount = 6000;
      particles = new THREE.Geometry();
      pMaterial = new THREE.PointCloudMaterial({
        color: 0xffffff,
        size: 20
      });

      // Create individual particles
      for (var p = 0; p < particleCount; p++) {
        var pX = (Math.random()*18000) - 9000;
        var pY = (Math.random()*18000) - 9000;
        var pZ = (Math.random()*18000) - 9000;
        particle = new THREE.Vector3(pX, pY, pZ);

        particle.velocity = new THREE.Vector3(0,-Math.random(),0);

        particles.vertices.push(particle);
      }

      // Create the particle system
      particleSystem = new THREE.PointCloud(particles, pMaterial);
      particleSystem.name = 'particles';

      // Add it to the scene
      scene.add(particleSystem);
    },

    update: function() {
      if (particleSystem) {
        particleSystem.rotation.x += 0.004;
        particleSystem.rotation.y += 0.002;
        particleSystem.rotation.z += 0.001;
      }
    },

    moveWithCamera: function() {
      if(particleSystem && particleSystem.position.distanceTo(camera.position) > activeArea) {
        particleVerschilX = particleSystem.position.x - camera.position.x;
        particleVerschilY = particleSystem.position.y - camera.position.y;
        particleVerschilZ = particleSystem.position.z - camera.position.z;

        if (particleVerschilX < -activeArea) { particleSystem.position.x = particleSystem.position.x + (2*activeArea-200); }
        if (particleVerschilX > activeArea) { particleSystem.position.x = particleSystem.position.x - (2*activeArea-200); }
        if (particleVerschilY < -activeArea) { particleSystem.position.y = particleSystem.position.y + (2*activeArea-200); }
        if (particleVerschilY > activeArea) { particleSystem.position.y = particleSystem.position.y - (2*activeArea-200); }
        if (particleVerschilZ < -activeArea) { particleSystem.position.z = particleSystem.position.z + (2*activeArea-200); }
        if (particleVerschilZ > activeArea) { particleSystem.position.z = particleSystem.position.z - (2*activeArea-200); }
      }
    }
  };
  return particles;

});
