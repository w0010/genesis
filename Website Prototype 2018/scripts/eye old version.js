$(document).ready(function() {

var scene, camera, renderer;
var socket;
var eye;
var mouseX = 0, mouseY = 0;


function init() {
	scene = new THREE.Scene();
	var aspect = 1;
	var width = window.innerWidth;
	var height = 120;
	camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
	camera.position.z = 130;
	renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
	renderer.setSize( window.innerWidth, 120 );
	socket = document.getElementById( 'socket' );
	socket.appendChild( renderer.domElement );



	var keyLight = new THREE.SpotLight( { penumbra: 1 } );
	keyLight.position.set( -1000, 1000, 1000 );

	var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
	var moodLight = new THREE.DirectionalLight( currentMood, 0.3 );

	directionalLight.position.set( 1000, -1000, -500 );
	moodLight.position.set( 1000, -1000, -500 );

	scene.add(keyLight, directionalLight, moodLight);



	var eyeGeometry = new THREE.IcosahedronGeometry( 60, 4 );
	var eyeMaterial = new THREE.MeshStandardMaterial( {
		color: 'hsl(0, 0%, 20%)',
		metalness:0.25,
		roughness: 0.2
		} );
	var eyeMesh = new THREE.Mesh( eyeGeometry, eyeMaterial );

	var lensGeometry = new THREE.IcosahedronGeometry( 40, 4 );
	var lensMaterial = new THREE.MeshStandardMaterial( {
		color: 'hsl(0, 0%, 20%)',
		metalness:0.25,
		roughness: 0.2,
		transparent: true,
		opacity: 0.75
		} );
	var lensMesh = new THREE.Mesh( lensGeometry, lensMaterial );
	lensMesh.name = 'lensB';

	var irisGeometry = new THREE.RingGeometry( 8, 10, 20 );
	var irisMaterial = new THREE.MeshLambertMaterial( {
		color: currentMood,
	} );
	var irisMesh = new THREE.Mesh( irisGeometry, irisMaterial );
	irisMesh.name = 'irisB';

	eye = new THREE.Object3D();
	eye.add( eyeMesh );
	eye.add( lensMesh );
	eye.add( irisMesh );

	scene.add( eye );
	var lensA = scene.getObjectByName( 'lensB' );
	lensA.position.z = 25;
	var irisA = scene.getObjectByName( 'irisB' );
	irisA.position.z = 61;


};

function MouseMove(event) {
	mouseX = event.clientX - window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;
	if (mouseX < 0) {

	} else {

	};
};
document.addEventListener( 'mousemove', MouseMove );



function update() {
	eye.rotation.x = mouseY * 0.002;
	eye.rotation.y = mouseX * 0.002;
};
function render() {
	renderer.render(scene, camera);
};
function animate() {
	requestAnimationFrame(animate);
	update();
	render();
};



function eye() {
	init();
	animate();
};



eye();

});







