$(document).ready(function() {

	var covers = ['url("images/dark/d-prometheus.jpg")', 'url("images/dark/d-seraph-a.jpg")', 'url("images/dark/d-spine.jpg")', 'url("images/dark/d-thruster.jpg")', 'url("images/dark/d-wall.jpg")', ]
	var cover = covers[Math.floor(Math.random() * covers.length)];

	document.getElementById('cover').style.background = cover;

});