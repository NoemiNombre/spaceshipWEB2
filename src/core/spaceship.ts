
import type { Scene } from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/Addons.js";

export class spaceship {

  scene: Scene   
  gltfLoader = new GLTFLoader()

    
    constructor(scene: Scene) {}

   // this.loadModel();
     //subir el modelo 3d

  loadModel(){
 // load del modelo 3d admite url (modelo 3d en carpeta) y funcion para llamar el archivo en la scena y darle una scala
    this.gltfLoader.load("/spaceship.glb", (gltf: GLTF) => {
      const model = gltf.scene;
      model.scale.set(0.2, 0.2, 0.2);
      this.scene.add(model);
    });
   
  };

}