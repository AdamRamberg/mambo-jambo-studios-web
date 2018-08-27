import * as THREE from 'three';
import GLTFLoader from './GLTFLoader';

const FROM_COLOR = { r: 204, g: 43, b: 94 };
const TO_COLOR = { r: 117, g: 58, b: 136 };

const createGradientVertexColors = (fromColor, toColor, vertexCount) => {
  const colorArray = [];
  for (let i = 0; i < vertexCount; i += 1) {
    colorArray.push(
      fromColor.r + (toColor.r - fromColor.r) * (i / vertexCount),
    );
    colorArray.push(
      fromColor.g + (toColor.g - fromColor.g) * (i / vertexCount),
    );
    colorArray.push(
      fromColor.b + (toColor.b - fromColor.b) * (i / vertexCount),
    );
  }
  return new Uint8Array(colorArray);
};

export default function Logo(scene) {
  if (!(this instanceof Logo)) {
    throw new Error('Constructor needs to be called using the "new" keyword.');
  }

  const loader = new GLTFLoader();
  const material = new THREE.MeshBasicMaterial({
    wireframe: true,
    vertexColors: THREE.VertexColors,
  });

  loader.load('./static/models/mambo-jambo-logo.glb', gltf => {
    const object = gltf.scene;

    object.traverse(child => {
      if (child instanceof THREE.Mesh) {
        const vertexCount = child.geometry.attributes.position.count;
        child.geometry.addAttribute(
          'color',
          new THREE.BufferAttribute(
            createGradientVertexColors(FROM_COLOR, TO_COLOR, vertexCount),
            3,
            true,
          ),
        );
        child.material = material; // eslint-disable-line no-param-reassign
      }
    });
    scene.add(object);
  });

  this.update = function update() {};
}
