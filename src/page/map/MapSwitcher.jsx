import { turnOnHighlighter, turnOffHighlighter } from './SectorHighlighter';

var currentModel, currentInstancedMesh;

function addModelToSwitcher(model) {
    currentModel = model
}

function addMeshToSwitcher(instancedMesh) {
    currentInstancedMesh = instancedMesh
}

function switchToTiles(currentState) {
    if (currentState.current == "map") {
        turnOffHighlighter()
        currentInstancedMesh.visible = true
        currentModel.traverse((v) => {
            if (v.isMesh && v.name != "textMesh") {
                v.material = v.userData.blueMaterial
            }
        })
    }
}

function switchToMap(currentState) {
    if (currentState.current == "tiles") {
        turnOnHighlighter()
        currentInstancedMesh.visible = false
        currentModel.traverse((v) => {
            if (v.isMesh && v.name != "textMesh") {
                v.material = v.userData.originalMaterial
            }
        })
    }
}


export { addModelToSwitcher, addMeshToSwitcher, switchToMap, switchToTiles }

