
var moodFrag = 'hsla(345,90%,60%,';
var mood = moodFrag + '1)';

$(document).ready(function() {
	document.documentElement.style.setProperty('--mood', mood);
	document.documentElement.style.setProperty('--mood-dim', moodFrag + '0.6');
	});
	
	var moodClass = document.getElementsByClassName('mood');
	for (var i = 0; i < moodClass.length; i++) {
		moodClass[i].style.color = mood;
};



