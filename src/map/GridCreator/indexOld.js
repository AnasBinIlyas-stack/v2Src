import * as THREE from 'three'
import data from '../TilesData'
import { InstancedUniformsMesh } from 'three-instanced-uniforms-mesh'


var tileColors = [
    new THREE.Vector3(0.42745098039215684,0.5529411764705883,0.8980392156862745),
    new THREE.Vector3(0.7803921568627451,0.07058823529411765,0.8784313725490196),
    new THREE.Vector3(0.24705882352941178,0.2235294117647059,0.5764705882352941),
    new THREE.Vector3(0.20392156862745098,0.7450980392156863,0.34901960784313724)
]

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(randomIntFromInterval(0,tileColors.length-1))

function getRandomObjectsWithoutAttribute(array, attribute, n) {
    // Filter out the objects that don't have the specified attribute
    const filteredArray = array.filter(obj => !obj.hasOwnProperty(attribute));
    
    // If the number of requested objects is greater than the available objects, adjust n
    const count = Math.min(n, filteredArray.length);
    
    // Shuffle the filtered array
    for (let i = filteredArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredArray[i], filteredArray[j]] = [filteredArray[j], filteredArray[i]];
    }
    
    // Return the first n objects from the shuffled array
    return filteredArray.slice(0, count);
}

function findTileObjectByIndex(array, targetIndex) {
    // Helper function to recursively search for the tile object
    function searchArray(arr) {
        for (let obj of arr) {
            if (Array.isArray(obj.tiles)) {
                for (let tile of obj.tiles) {
                    if (tile.index === targetIndex) {
                        return tile;
                    }
                }
            }
        }
        return null;
    }

    // Start the search
    return searchArray(array);
}

function createGridPlanes(scene) {


   

    var planeGeometry = new THREE.PlaneGeometry(0.0187, 0.0187);
    var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
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
      baseColor:{
        value:new THREE.Vector3(0.42745098039215684,0.5529411764705883,0.8980392156862745)
      }
   }
   
   const leavesMaterial = new THREE.ShaderMaterial({
       vertexShader,
     fragmentShader,
     uniforms,
     side: THREE.DoubleSide
   });

    // var instancedMesh = new THREE.InstancedMesh(planeGeometry, gradientMaterial, 11727);
    const instancedMesh = new InstancedUniformsMesh(
        planeGeometry,
        leavesMaterial,
        11727
      )
    var matrix = new THREE.Matrix4();

    instancedMesh.visible = false


var names = ["Astral Beacons", "Crypto Cradles", "Harmonic Fields", "Sigil Spires", "Nexus Points", "Echo Monoliths", "Quantum Wells", "Rune Towers", "Ethereal Gates", "Void Anchors"]

var newData = []
var max = 0
    data.map((v,i) => {
        v.name = names[i]
        v.tiles.map((s) => {
            newData.push(s)
            matrix.setPosition(s.position.x, s.position.y, s.position.z);

            // s.longitude = convertRange(s.position.x,[-2.5,2.5],[-180,180]).toFixed(2)
            // s.latitude = convertRange(s.position.x,[-2.5,2.5],[-90,90]).toFixed(2)

            instancedMesh.setMatrixAt(s.index, matrix);
        
            // if(s.elements.length==6 && s.fundamentals.length==6){
            //     s.color = new THREE.Vector3(0.3176470588235294,0.9607843137254902,0.403921568627451)
            //     s.level = 5
            // }
            // else if(s.elements.length==5 && s.fundamentals.length==5){
            //     s.color = new THREE.Vector3(0.7803921568627451,0.07058823529411765,0.8784313725490196)
            //     s.level = 4
            // }
            // else if(s.elements.length==4 && s.fundamentals.length==4){
            //     s.color = new THREE.Vector3(0.42745098039215684,0.5529411764705883,0.8980392156862745)
            //     s.level = 3
            // }
            // else if(s.elements.length==3 && s.fundamentals.length==3){
            //     s.color =   new THREE.Vector3(0.24705882352941178,0.2235294117647059,0.5764705882352941)
            //     s.level = 2
            // }
            // else{
            //     s.color = new THREE.Vector3(0.0196078431372549,0.7450980392156863,0.8901960784313725)
            //     s.level = 1
            // }

            instancedMesh.setUniformAt('baseColor', s.index,s.color)
        })

  

    })


    
    function convertRange( value, r1, r2 ) { 
        return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
    }




    // var newElementals = [
    //     {
    //         "elements": [
    //             4,
    //             1
    //         ],
    //         "fundamentals": [
    //             3
    //         ]
    //     },
    //     {
    //         "elements": [
    //             1
    //         ],
    //         "fundamentals": [
    //             5,
    //             3
    //         ]
    //     },
    //     {
    //         "elements": [
    //             3,
    //             0
    //         ],
    //         "fundamentals": [
    //             4
    //         ]
    //     }
    // ]


    // newElementals.map((v)=>{
    //     v.elements.map((s,i)=>{
    //         v.elements[i] = elements.indexOf(s)
    //     })
    //     v.fundamentals.map((s,i)=>{
    //         v.fundamentals[i] = fundamentals.indexOf(s)
    //     })
    // })


    // newElementals.map((v)=>{
    //     var newArray = getRandomObjectsWithoutAttribute(newData,"elements",272 )
        // newArray.map((s)=>{
        //  var foundObject = findTileObjectByIndex(data,s.index)
        //  foundObject.elements = v.elements
        //  foundObject.fundamentals = v.fundamentals
        // })
    // })



    function removeObjectFromArray(arr, objectToRemove) {
        // Iterate through each object in the array
        arr.forEach(obj => {
            // Check if the current object has a 'tiles' array
            if (obj.hasOwnProperty('tiles') && Array.isArray(obj.tiles)) {
                // Find the index of the object to remove within the 'tiles' array
                const indexToRemove = obj.tiles.findIndex(tile => tile === objectToRemove);
                
                // If the object is found in 'tiles' array, remove it
                if (indexToRemove !== -1) {
                    obj.tiles.splice(indexToRemove, 1);
                    console.log(`Removed object from tiles in object: `, obj);
                } else {
                    console.log(`Object not found in tiles of object: `, obj);
                }
            } else {
                console.log(`Object does not have a valid 'tiles' array: `, obj);
            }
        });
    }


    // const filteredArray = newData.filter(obj => !obj.hasOwnProperty("elements"));
    
    // // filteredArray.map((s)=>{
    // //     var foundObject = findTileObjectByIndex(data,s.index)
    // //     removeObjectFromArray(data,foundObject)
    // //    })

    // //  var newestData = []

    // //  data.map((v) => {
    // //     v.tiles.map((s) => {
    // //         newestData.push(s)
          
    // //     })
    // //  })

    //    newData.map((s,i)=>{
    //     var foundObject = findTileObjectByIndex(data,s.index)
    //    foundObject.index = i
    //    })

 


    scene.add(instancedMesh)
    

    return instancedMesh


    // function createPlanes(size, numRows, numCols,discardProbability) {
    //     var planesGroup = new THREE.Group();
    //     var planeGeometry = new THREE.PlaneGeometry(size / numCols, size / numRows);

    //     for (var i = 0; i < numRows; i++) {

    //         var randomnessX = Math.random()*2
    //         for (var j = 0; j < numCols; j++) {

    //             var randomnessY = Math.random()

    //             if (Math.random() > discardProbability) {
    //             var planeMaterial = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, side: THREE.DoubleSide });
    //             var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
    //             planeMesh.position.x = (j +randomnessX+ 0.5 - numCols / 2) * (size / numCols);
    //             planeMesh.position.y = (i +0.5 - numRows / 2) * (size / numRows);
    //             planesGroup.add(planeMesh);
    //         }
    //     }
    //     }

    //     scene.add(planesGroup)

    //     return planesGroup;
    // }

    // createPlanes(1,13,14,0.5)

    // var totalTiles = 0


    //     function createPlanesFromImage(imageElement, colorToIdentify, planeSize,jsonData) {
    //         // Create a canvas element
    //         var canvas = document.createElement('canvas');
    //         canvas.width = imageElement.width;
    //         canvas.height = imageElement.height;
    //         var ctx = canvas.getContext('2d');
    //         // Draw the image onto the canvas
    //         ctx.drawImage(imageElement, 0, 0);

    //         // Get the pixel data from the canvas
    //         var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //         var data = imageData.data;

    //         var planesGroup = new THREE.Group();

    //         // Loop through each pixel in the image
    //         for (var i = 0; i < data.length; i += 4) {
    //             // Extract the RGB values of the pixel
    //             var r = data[i];
    //             var g = data[i + 1];
    //             var b = data[i + 2];
    // // if(g!=255 && b!=255){,b)
    // // }

    //             // Check if the pixel matches the color to identify
    //             if (r === colorToIdentify[0] && g === colorToIdentify[1] && b === colorToIdentify[2]) {
    //                 // Create a plane at the corresponding position
    // var planeGeometry = new THREE.PlaneGeometry(planeSize, planeSize);
    // var planeMaterial = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff, side: THREE.DoubleSide });
    // var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

    //                 // Calculate position based on pixel index
    //                 var x = (i / 4) % canvas.width;
    //                 var y = Math.floor((i / 4) / canvas.width);
    //                 planeMesh.position.x = (x - (canvas.width / 2)) / 53.4759358289;
    //                 planeMesh.position.y = ((canvas.height / 2) - y) / 53.4759358289;
    //                 planeMesh.position.z = 0.01

    //                 planesGroup.add(planeMesh);
    //             }
    //         }
    //         scene.add(planesGroup)


    //         totalTiles+=planesGroup.children.length

    //      planesGroup.children.map((v)=>{
    //         jsonData.tiles.push({
    //             position:v.position
    //         })
    //      })

    //         // planesGroup.children.map((v) => {
    //         //     var details = {
    //         //         position: v.position,

    //         //     }
    //         // })

    //         // planesGroup.position.set(-0.1,0.2,0)
    //         return planesGroup;
    //     }
    //     // var img = document.getElementById("shapetest")


    //     var dataJson = [
    //         {
    //             id: "astralBeacons",
    //             image: "assets/TileMappings/astralBeacons.png",
    //             color:[255,17,17],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "cryptoCradles",
    //             image: "assets/TileMappings/cryptoCradles.png",
    //             color:[255,16,16],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "harmonicFields",
    //             image: "assets/TileMappings/harmonicFields.png",
    //             color:[255,16,16],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "sigilspires",
    //             image: "assets/TileMappings/sigilspires.png",
    //             color:[255,17,17],
    //             tiles: [

    //             ]
    //         },

    //   {
    //             id: "nexuspoints",
    //             image: "assets/TileMappings/nexuspoints.png",
    //             color:[255,17,17],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "echoMonoliths",
    //             image: "assets/TileMappings/echoMonoliths.png",
    //             color:[255,31,31],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "quantumwells",
    //             image: "assets/TileMappings/quantumwells.png",
    //             color:[255,34,34],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "runetowers",
    //             image: "assets/TileMappings/runetowers.png",
    //             color:[255,21,21],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "etherealGates",
    //             image: "assets/TileMappings/etherealGates.png",
    //             color:[255,39,39],
    //             tiles: [

    //             ]
    //         },
    //         {
    //             id: "voidAnchors",
    //             image: "assets/TileMappings/voidAnchors.png",
    //             color:[255,19,19],
    //             tiles: [

    //             ]
    //         },
    //     ]



    //     dataJson.map((v,i)=>{
    //         var img = new Image()
    //         img.src = v.image
    //         img.onload=function(){
    //             createPlanesFromImage(img, v.color, 0.0187,v)
    //             if(i==dataJson.length-1){
    //             }
    //         }
    //     })





}

export { createGridPlanes }
