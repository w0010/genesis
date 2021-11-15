$(document).ready(function() {

var ZOOM = 350;
var scene, camera, renderer, spotLight;
var mesh;
var mouseX = 0, mouseY = 0, scroll = 0;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('hsl(0, 0%, 75%)');
	var camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 10000);
	camera.position.z = ZOOM;
	var renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	var container = document.getElementById( 'the-depth' );
	container.appendChild( renderer.domElement );
	
	window.addEventListener('resize', function() {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerWidth;
		camera.updateProjectionMatrix();
	});
	spotLight = new THREE.SpotLight( {
		color: mood,
		penumbra: 1,
	} );
	spotLight.position.set( 0, -10000, 10000 ); //SpotLight.target defaults to 0, 0, 0
	scene.add(spotLight);




// geometry
	var geometry = new THREE.TorusKnotBufferGeometry( 3000, 200 );
	var material = new THREE.MeshPhongMaterial( {
		color: mood,
		flatShading: false,
		transparent: true,
		opacity: 0.03,
		shininess: 0, //default is 30
		polygonOffset: true,
		polygonOffsetFactor: 100,
		polygonOffsetUnits: 1,
		side: THREE.DoubleSide,
	} );
	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	var geo = new THREE.EdgesGeometry( mesh.geometry );
	var mat = new THREE.LineBasicMaterial( {
		color: mood,
		transparent: true,
		opacity: 0.3,
	} );
	var wireframe = new THREE.LineSegments( geo, mat );
	mesh.add( wireframe );

//movement






// render and animation
function update() {
	mesh.rotation.x += 0.005;
	mesh.rotation.z += -0.005;
	camera.position.x += ( mouseX - camera.position.x ) * 0.2;
	camera.position.y += ( - ( mouseY ) - camera.position.y ) * 0.2;
};
function render() {
	renderer.render(scene, camera);
};
function animate() {
	requestAnimationFrame(animate);
	update();
	render();
};
animate();

});



