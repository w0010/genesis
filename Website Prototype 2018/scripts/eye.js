$(document).ready(function() {

var scene, camera, renderer;
var eye;
var mouseX = 0, mouseY = 0;


function init() {


// INIT
	scene = new THREE.Scene();
	var aspect = 1;
	var width = window.innerWidth;
	var height = 120;
	camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
	camera.position.z = 130;
	renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
	renderer.setSize( window.innerWidth, 120 );
	var socket = document.getElementById( 'socket' );
	socket.appendChild( renderer.domElement );


// LIGHTS
	var keyLight = new THREE.DirectionalLight( 0xffffff, 1 );
	keyLight.position.set( -500, 500, 1000 );
	keyLight.castShadow = true;

	var moodLight = new THREE.DirectionalLight( Mood, 0 );
	moodLight.position.set( -1000, 1000, 1000 );

	var rimLight = new THREE.DirectionalLight( Mood, 0.2 );
	rimLight.position.set( 10000, -10000, 1000 );

// ADD TO SCENE
	scene.add(keyLight, rimLight, moodLight);

// 				//
//	GEOMETRY 	//
//				//


// SCLERA - CONSTRUCTIVE SOLID GEOMETRY
	var scleraMaterial = new THREE.MeshStandardMaterial( {
		color: 'hsl(0, 0%, 11%)',
		metalness:0,
		roughness: 0.7
		} );
	var scleraOuterGeometry = new THREE.IcosahedronGeometry( 60, 4 );
	var scleraOuterMesh = new THREE.Mesh( scleraOuterGeometry );
	var scleraOuterCSG = THREE.CSG.fromMesh( scleraOuterMesh );
	var scleraInnerGeometry = new THREE.IcosahedronGeometry( 34, 4 ); // also used for lens geometry
	var scleraInnerMesh = new THREE.Mesh( scleraInnerGeometry );
	var lensBulge = 34;
	scleraInnerMesh.position.z = lensBulge;
	var scleraInnerCSG = THREE.CSG.fromMesh( scleraInnerMesh );
	var scleraGeometry =scleraOuterCSG.subtract( scleraInnerCSG );
	var scleraMesh = THREE.CSG.toMesh( scleraGeometry, scleraMaterial );


// LENS
	var lensMaterial = new THREE.MeshStandardMaterial( {
		color: 'hsl(0, 0%, 11%)',
		metalness:0,
		roughness: 0.3,
		transparent: true,
		opacity: 0.75
		} );
	var lensMesh = new THREE.Mesh( scleraInnerGeometry, lensMaterial );
	lensMesh.position.z = lensBulge;


// IRIS
	var irisGeometry = new THREE.RingGeometry( 12, 23, 20 );
	var irisMaterial = new THREE.MeshLambertMaterial( {
		color: Mood,
		polygonOffset: true,
		polygonOffsetFactor: 300,
		polygonOffsetUnits: 100,
		wireframe: true,
	} );
	var irisMesh = new THREE.Mesh( irisGeometry, irisMaterial );
	irisMesh.position.z = 53;


// EYEBALL ( SCLERA + LENS + IRIS )
	var eyeballMesh = new THREE.Object3D(); //var eyeball previously declaired
	eyeballMesh.add( scleraMesh );
	eyeballMesh.add( lensMesh );
	eyeballMesh.add( irisMesh );


// EYELID

// EYE ( EYEBALL + )
	eye = new THREE.Object3D();
	eye.add( eyeballMesh );




// ADD ALL GEOMETRY TO SCENE
	scene.add( eye );

};


//


// MOUSE TRACKER
function MouseMove(event) {
	mouseX = event.clientX - window.innerWidth / 2;
	mouseY = event.clientY - window.innerHeight / 2;
	if (mouseX < 0) {

	} else {

	};
};
document.addEventListener( 'mousemove', MouseMove );


//


// RENDER ANIMATION
function update() {
	eye.rotation.x = mouseY * 0.0025;
	eye.rotation.y = mouseX * 0.0025;
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







