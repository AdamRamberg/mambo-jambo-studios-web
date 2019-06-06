import SceneManager from './SceneManager';

export default function threeEntryPoint(container, options) {
  const canvas = createCanvas(container);
  const sceneManager = new SceneManager(canvas, options);

  bindEventListeners(sceneManager, canvas, resizeCanvas);
  render(sceneManager);

  function createCanvas(c) {
    return c.appendChild(document.createElement('canvas'));
  }

  function bindEventListeners() {
    window.onresize = resizeCanvas;
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.maxWidth = '100vw';

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    sceneManager.onWindowResize();
  }

  function render() {
    requestAnimationFrame(render);
    sceneManager.update();
  }
}
