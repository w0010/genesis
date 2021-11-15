 $(document).ready(function() {

var ZOOM = 0;
var scene, camera, renderer, spotLight;
var mesh;
var mouseX = 0, mouseY = 0, scroll = 0;
	
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('hsl(0, 0%, 8%)');
	var aspect = 1;
	var width = window.innerWidth;
	var height = window.innerHeight;
	camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 10000 );
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
	spotLight.position.set( 10000, -10000, 10000 ); //SpotLight.target defaults to 0, 0, 0
	scene.add(spotLight);

 


// geometry
	var geometry = new THREE.CylinderBufferGeometry( 1000, 1000, 2000, 7, 1, true, 0, 4 );
	var material = new THREE.MeshBasicMaterial( {
		visible: false,
	} );
	var meshY = new THREE.Mesh( geometry, material );
	var meshX = new THREE.Mesh( geometry, material );
	scene.add( meshY );
	scene.add( meshX );

	var geoY = new THREE.EdgesGeometry( meshY.geometry );
	var geoX = new THREE.EdgesGeometry( meshX.geometry );
	var mat = new THREE.LineBasicMaterial( {
		color: mood,
		transparent: true,
		opacity: 0.3
	} );
	var wireframeY = new THREE.LineSegments( geoY, mat );
	var wireframeX = new THREE.LineSegments( geoX, mat );
	meshY.add( wireframeY );
	meshX.add( wireframeX );




	meshY.rotation.z = 45 * Math.PI / 180;
	meshX.rotation.z = -45 * Math.PI / 180;

//movement





// render and animation
function update() {
	meshY.rotation.y += 0.001;
	meshX.rotation.x += 0.001;

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



