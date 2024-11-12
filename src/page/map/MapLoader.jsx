import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three'
import { addModelToSwitcher } from './MapSwitcher';
import glb from "/src/model/map.glb";

function loadMap(scene, sectorHighlighter, camera, element, currentState, controls) {
	var dracoLoader = new DRACOLoader()
	dracoLoader.setDecoderPath("/draco/")
	var loader = new GLTFLoader()
	loader.setDRACOLoader(dracoLoader);
	const fontLoader = new FontLoader();

	var blues = [0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0xff0000, 0x04398f, 0x012b70, 0x00235c]

	
	loader.load(glb, (gltf) => {
		var model = gltf.scene

		model.name = "mapModel"

		var i = 0

		model.rotation.set(Math.PI / 2, 0, 0)
		model.position.y = 0.5
		scene.add(gltf.scene)
		model.traverse((v) => {
			if (v.isMesh) {
				v.material = v.material.clone()
				v.userData.originalMaterial = v.material
				v.userData.blueMaterial = new THREE.MeshBasicMaterial({ color: blues[i], side: THREE.DoubleSide })
				v.material.transparent = true

				v.userData.originalPos = new THREE.Vector3().copy(v.position)
				i++
				fontLoader.load('/fonts/helvetiker_regular.typeface.json', function (font) {

					const geometry = new TextGeometry(v.name.replace("_", " "), {
						font: font,
						size: 0.05,
						depth: 0,
						curveSegments: 12,
						bevelEnabled: false,
						bevelThickness: 10,
						bevelSize: 8,
						bevelOffset: 0,
						bevelSegments: 5
					});
					var textMesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff }))
					textMesh.name = "textMesh"
					textMesh.geometry.center()
					textMesh.rotation.x = -Math.PI / 2
					textMesh.position.y = 0.1
					v.add(textMesh)

				});


			}
		})

		sectorHighlighter(controls, model, camera, element, currentState)
		addModelToSwitcher(model)

		return model
	})

	var textureLoader = new THREE.TextureLoader()
	textureLoader.load(
		'/assets/background1.jpg',
		function (texture) {
			texture.mapping = THREE.EquirectangularReflectionMapping
			scene.background = texture
			const geometry = new THREE.PlaneGeometry(20, 10);
			const material = new THREE.MeshBasicMaterial({ map: texture, color: 0x8f8d8d });
			const cube = new THREE.Mesh(geometry, material);
			scene.add(cube);
			cube.position.z = -0.1
		},
		undefined,
		function () {
			console.error('An error happened.');
		}
	);


}


export { loadMap }