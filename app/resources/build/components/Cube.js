var numCubes = 10;
var container, stats;
var camera, scene, renderer;
var textureLoader = new THREE.TextureLoader();
var raycaster;
var mouse;
var cubeTexture = textureLoader.load('http://i.imgur.com/U1DnhNv.png');
var isMouseDown = false,
	onMouseDownPosition, onMouseDownTheta = 45,
	onMouseDownPhi = 60,
	phi = 60,
	theta = 45,
	radious = 1600,
	count = 0;

//cube creation
function createGeometry() {
	var geometry = new THREE.BoxGeometry(100, 100, 100);
	var object = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
		color: Math.random() * 0xffffff,
		opacity: .75,
		map: cubeTexture
	}));

	object.position.x = Math.random() * 800 - 500;
	object.position.y = Math.random() * 800 - 600;
	object.position.z = Math.random() * 800 - 700;
	object.scale.x = Math.random() * 2 + 1;
	object.scale.y = Math.random() * 2 + 1;
	object.scale.z = Math.random() * 2 + 1;
	object.rotation.x = Math.random() * 2 * Math.PI;
	object.rotation.y = Math.random() * 2 * Math.PI;
	object.rotation.z = Math.random() * 2 * Math.PI;
	return object;
}