import * as THREE from 'three'
import gsap from 'gsap';


const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

var currentModel;

var active = true

function sectorHighlighter(controls, model, camera, element, currentState) {
    currentModel = model
    element.addEventListener("mousemove", (e) => {
        onPointerMove(e, model, camera)
    })
    element.addEventListener("mousedown", () => {
        onSectorClick(model, camera, currentState, controls)
    })
}



function onPointerMove(event, model, camera) {
    if (active) {
        raycaster.setFromCamera(pointer, camera);
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

        // calculate objects intersecting the picking ray
        const intersects = raycaster.intersectObjects(model.children);

        if (intersects[0]) {
            model.traverse((v) => {
                if (v.isMesh && v.name !== "textMesh") {
                    intersects.map((s) => {
                        if (s.object.name !== "textMesh") {
                            if (v.name !== s.object.name) {
                                gsap.to(v.material, { opacity: 0.5, duration: 0.5 })
                                gsap.to(v.position, { y: v.userData.originalPos.y, duration: 0.5 })
                            }
                            else {
                                gsap.to(v.material, { opacity: 1, duration: 0.5 })
                                gsap.to(v.position, { y: v.userData.originalPos.y + 0.1, duration: 0.5 })
                            }
                        }
                    })

                }
            })
        }
        else {
            model.traverse((v) => {
                if (v.isMesh && v.name !== "textMesh") {
                    gsap.to(v.material, { opacity: 1, duration: 0.5 })
                    gsap.to(v.position, { y: v.userData.originalPos.y, duration: 0.5 })
                }
            })
        }
    }
}


function onSectorClick(model, camera, currentState, controls) {
    if (currentState.current == "map") {
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(model.children);
        if (intersects[0]) {

            gsap.to(camera.position, { x: intersects[0].point.x, y: intersects[0].point.y, z: 2 })
            gsap.to(controls.target, { x: intersects[0].point.x, y: intersects[0].point.y, z: 0 })

        }
    }

}

function turnOnHighlighter() {
    active = true
    currentModel.traverse((v) => {
        if (v.isMesh && v.name !== "textMesh") {
            gsap.to(v.material, { opacity: 1, duration: 0.5 })
            gsap.to(v.position, { y: v.userData.originalPos.y, duration: 0.5 })
        }
    })
}

function turnOffHighlighter() {
    active = false
    currentModel.traverse((v) => {
        if (v.isMesh && v.name !== "textMesh") {
            gsap.to(v.material, { opacity: 1, duration: 0.5 })
            gsap.to(v.position, { y: v.userData.originalPos.y, duration: 0.5 })
        }
    })
}

export { sectorHighlighter, turnOnHighlighter, turnOffHighlighter };