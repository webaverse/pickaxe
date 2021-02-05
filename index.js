import * as THREE from 'three';
import {GLTFLoader} from 'GLTFLoader';
import {renderer, scene, app} from 'app';

(async () => {
  const o = await new Promise((accept, reject) => {
    new GLTFLoader().load(app.files['./pickaxe.glb'], function(o) {
      o = o.scene;
      o.traverse(o => {
        if (o.isMesh) {
          o.frustumCulled = false;
        }
      });
      // console.log('loaded lightsaber', o);
      accept(o);
    }, undefined, reject);
  });
  app.object.add(o);
})();

/* let lastUpdateTime = Date.now();
function animate() {
  const now = Date.now();
  const timeDiff = now - lastUpdateTime;

  bladeMaterial.uniforms.uTime.value.set(-1 + Math.random()*2, -1 + Math.random()*2, -1 + Math.random()*2);

  // lightsaberMesh.rotation.x = Math.PI/2 + Math.sin((now%2000)/2000 * Math.PI*2)*0.1;
  // lightsaberMesh.rotation.y = Math.sin((now%3000)/3000 * Math.PI*2);
  if (!lightsaberMesh.tick()) {
    lightsaberMesh.setState();
  }
}
renderer.setAnimationLoop(animate); */