import * as THREE from 'three'
import data from '../TilesData'
import { InstancedUniformsMesh } from 'three-instanced-uniforms-mesh'




function createGridPlanes(scene) {




    var planeGeometry = new THREE.PlaneGeometry(0.0187, 0.0187);
    // Create a gradient material

    const vertexShader = `
     varying vec2 vUv;
     
       void main() {
   
       vUv = uv;
       
       // VERTEX POSITION
       
       vec4 mvPosition = vec4( position, 1.0 );
       #ifdef USE_INSTANCING
           mvPosition = instanceMatrix * mvPosition;
       #endif
       
       vec4 modelViewPosition = modelViewMatrix * mvPosition;
       gl_Position = projectionMatrix * modelViewPosition;
   
       }
   `;

    const fragmentShader = `
     varying vec2 vUv;
     uniform vec3 baseColor;
     
     void main() {
       float clarity = ( vUv.y * 0.5 ) + 0.5;
       gl_FragColor = vec4( baseColor * clarity, 1 );
     }
   `;

    const uniforms = {
        baseColor: {
            value: new THREE.Vector3(0.42745098039215684, 0.5529411764705883, 0.8980392156862745)
        }
    }

    const planeMaterial = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        side: THREE.DoubleSide
    });

    const instancedMesh = new InstancedUniformsMesh(
        planeGeometry,
        planeMaterial,
        11727
    )
    var matrix = new THREE.Matrix4();

    instancedMesh.visible = false


    var names = ["Astral Beacons", "Crypto Cradles", "Harmonic Fields", "Sigil Spires", "Nexus Points", "Echo Monoliths", "Quantum Wells", "Rune Towers", "Ethereal Gates", "Void Anchors"]
var num = 0
    var newData = []
    data.map((v, i) => {
        v.tiles.map((s) => {
            num++
            newData.push(s)
            matrix.setPosition(s.position.x, s.position.y, s.position.z);
            instancedMesh.setMatrixAt(s.index, matrix);
            instancedMesh.setUniformAt('baseColor', s.index, s.color)
        })

    })

    scene.add(instancedMesh)


    return instancedMesh








}

export { createGridPlanes }
