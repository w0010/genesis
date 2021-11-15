
var moods = [ 'hsla(55, 100%, 60%,', 'hsla(170, 100%, 60%,', 'hsla(240, 100%, 70%,', 'hsla(345,100%,60%,']
var moodFrag = moods[Math.floor(Math.random() * moods.length)];
var mood = moodFrag + '1)';
var shadow = ["0 0.2rem 0.2em " + moodFrag];

$(document).ready(function() {



/*
var p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++) {
	p[i].style.color = currentMood;
//	p[i].style.textShadow = shadow + " 0.15)";
};
var h1 = document.getElementsByTagName('h1');
for (var i = 0; i < h1.length; i++) {
	h1[i].style.color = currentMood;
//	h1[i].style.textShadow = shadow + " 0.5)";
};
var h2 = document.getElementsByTagName('h2');
for (var i = 0; i < h2.length; i++) {
	h2[i].style.color = currentMood;
//	h2[i].style.textShadow = shadow + " 0.1)";
};
var h3 = document.getElementsByTagName('h3');
for (var i = 0; i < h3.length; i++) {
	h3[i].style.color = currentMood;
//	h3[i].style.textShadow = shadow + " 0.1)";
}
var glass = document.getElementsByClassName('glass');
for (var i = 0; i < glass.length; i++) {
	glass[i].style.border = swing + '0.05) 24px outset';
//	glass[i].style.backgroundColor = swing + '0.2';
};*/
//document.getElementById('project-container').style.borderBottom = swing + '0.6) 1rem solid';
//document.getElementById('core-container').style.backgroundColor = swing + '0.03';
//document.getElementById('cover').style.backgroundColor = swing + '0.2';
var moodA = document.getElementsByClassName('mood');
for (var i = 0; i < moodA.length; i++) {
	moodA[i].style.color = mood;
};
var moodB = document.getElementsByClassName('mood-half');
for (var i = 0; i < moodB.length; i++) {
	moodB[i].style.color = moodFrag + '0.5)';
};
var moodC = document.getElementsByClassName('mood-dim');
for (var i = 0; i < moodC.length; i++) {
	moodC[i].style.color = moodFrag + '0.2)';
};
var moodD = document.getElementsByClassName('mood-line');
for (var i = 0; i < moodD.length; i++) {
	moodD[i].style.backgroundColor = mood;
};
//all except links
//document.body.style.color = swing + "0.9)";

//links
//var links = document.getElementsByTagName('a');
//for (var i = 0; i < links.length; i++) {
//	links[i].style.color = swing + "0.7)";
//};





//document.body.style.textShadow = shadow + " 0.25)";



});





