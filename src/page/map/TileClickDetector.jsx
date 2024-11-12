import * as THREE from 'three'
import data from './TileData.json';


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(1, 1);

var availableSections = ["astralBeacons","cryptoCradles","harmonicFields"]

function onClick(camera, mesh, showModal, setCurrentTileIndex, currentState) {
    if (currentState.current == "tiles") {
        raycaster.setFromCamera(mouse, camera);

        const intersection = raycaster.intersectObject(mesh);

        if (intersection.length > 0) {

            const instanceId = intersection[0].instanceId;
            var object = findParentById(data,instanceId)
            if(availableSections.includes(object.id)){
            showModal()
            setCurrentTileIndex(instanceId)
            }

        }
    }
}



function onMouseMove(event) {

    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}


function findParentById(mainArray, index) {
    for (let obj of mainArray) {
        for (let tile of obj.tiles) {
            if (tile.index === index) {
                return obj;
            }
        }
    }
    return null; // return null if no matching parent object is found
}


export { onClick, onMouseMove, availableSections }