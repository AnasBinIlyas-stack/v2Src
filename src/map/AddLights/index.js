import * as THREE from 'three'

function addLights(scene) {
    var ambientLight = new THREE.AmbientLight(0xffffff, 3)

    scene.add(ambientLight)
}

export default addLights