import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
} from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/Addons.js";


export class App {
  // declaracion de constantes de la scena
  canvas = document.getElementById("canvas") as HTMLCanvasElement; //canvas inicia la pag
  scene = new Scene(); //scena es mi inico de pag like pestanas
  renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true }); // motor de render para visualizar la pag
  perspectiveCamera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  ); //camara para ver los elemntos de lapag
  gltfLoader = new GLTFLoader(); //para importar el archivo 3d

  constructor() {
    //setteo de la dimension del canvas
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // setteo posicion de la camara
    this.perspectiveCamera.position.set(0, 8, -10);
    // setteo anchor point camara
    this.perspectiveCamera.lookAt(0, 0, 0);

   
///luces
    this.createLight();
    
    this.animate();
    // funcion que da animacion a todo la pagina usando el motor de render con el metodo de renderizar dentro de la scena y usando para camra
  }
  animate() {
    this.renderer.render(this.scene, this.perspectiveCamera);
    requestAnimationFrame(this.animate.bind(this)); // aqui bind the .this metod a mi funciton de animation
  }
//iluminacinon
  createLight() {
    //iluminacion de la scena que afeccta al objeto
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight); //esto agrega mi constante a la scena y se debe hacer con todos los elemntos
   
    const directionalLight = new DirectionalLight(0xffffff, 1);
    this.scene.add(directionalLight);
  }
 
}

