import * as THREE from 'three';

import Logo from './Logo';

const CAMERA_ROT_SPEED = 15;

export default function SceneManager(canvas) {
  if (!(this instanceof SceneManager)) {
    throw new Error('Constructor needs to be called using the "new" keyword.');
  }

  const clock = new THREE.Clock();
  const origin = new THREE.Vector3(0, 0, 0);

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  };

  const mScene = buildScene();
  const mRenderer = buildRender(screenDimensions);
  const mCamera = buildCamera(screenDimensions);
  const mSceneSubjects = createSceneSubjects(mScene);

  function buildScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a0a0a');
    return scene;
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane,
    );

    camera.position.z = 7;

    return camera;
  }

  function createSceneSubjects(scene) {
    const subjects = [new Logo(scene)];
    return subjects;
  }

  this.update = function update() {
    const elapsedTime = clock.getElapsedTime();

    mSceneSubjects.forEach(subject => subject.update(elapsedTime));

    const radius = 7;
    const angle = (elapsedTime * CAMERA_ROT_SPEED * Math.PI) / 180;
    mCamera.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    mCamera.lookAt(origin);

    mRenderer.render(mScene, mCamera);
  };
  this.onWindowResize = function onWindowResize() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    mCamera.aspect = width / height;
    mCamera.updateProjectionMatrix();

    mRenderer.setSize(width, height);
  };
  // this.onMouseMove = function onMouseMove(x, y) {};
}
