import * as THREE from 'three';
// import GLTFLoader from './GLTFLoader';

export default function Logo(scene) {
  if (!(this instanceof Logo)) {
    throw new Error('Constructor needs to be called using the "new" keyword.');
  }

  // const loader = new GLTFLoader();
  // loader.load('./static/models/mambo-jambo-logo.gltf', model => {
  //   scene.add(model);
  //   objs.push(model);
  // });

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  this.update = function update() {};
}
