var myMood = swing + " " + 1 + ")";
var frames = [];

function setup() {
	cnv = createCanvas( windowWidth, windowHeight);
	cnv.parent( "tunnel" );
	cnv.position( 0, 0 );
	rectMode(CENTER);
	frameRate(30);
	for (var i = 0; i < 10; i++) {
		frames[i] = new Frame();
	}
	console.log("setup function!");
}
function windowResized() {
	resizeCanvas( windowWidth , windowHeight );
}



function draw() {
	Frame(); ???? or use this
}






function Frame() {
	this.x = windowWidth / 2;
	this.y = windowHeight / 2;
	this.w = windowWidth;
	this.h = windowHeight;

	this.display = function() {
		stroke(myMood);
		noFill()
		rect(this.x, this.y, this.w, this.h)
	}
	this.move = function() {
		this.w = this.w * 0.01;
		this.h = this.h * 0.01;
	}
	console.log("setup function!");
}



/*var myMood;
var yN;
var wX;
var hX;

function setup() {
	cnv = createCanvas( windowWidth, windowHeight);
	cnv.parent( 'tunnel' );
	cnv.position( 0, 0 );
	rectMode(CENTER);
	frameRate(30);
	yN = 0.0;
	wX = width;
	hX = height;
	wXX = width;
	hXX = height;
	console.log( 'setup function!' );
}
function windowResized() {
	resizeCanvas( windowWidth , windowHeight );
	console.log( 'setup function!' );
}

function draw() {
	myMood = swing + " " + 0.5 + ")";
	background(0);
	stroke(myMood);
	strokeWeight(2);
	noFill();

	wX = wX - (wX * 0.01);
	if (wX < (width * 0.2)) {
		wX = width;
	}
	hX = hX - (hX * 0.01);
	if (hX < (height * 0.2)) {
		hX = height;
	}

	rect( windowWidth /2, windowHeight /2, wX, hX );
	}
	if (wX < (width * 0.8)) {
		rect( windowWidth /2, windowHeight /2, wX + (wX * 0.2), hX + (hX * 0.2) );
		if (wX < (width * 0.8)) {
			rect( windowWidth /2, windowHeight /2, wX + (wX * 0.4), hX + (hX * 0.4) );
			if (wX < (width * 0.8)) {
				rect( windowWidth /2, windowHeight /2, wX + (wX * 0.6), hX + (hX * 0.6) );
				if (wX < (width * 0.8)) {
					rect( windowWidth /2, windowHeight /2, wX + (wX * 0.8), hX + (hX * 0.) );
				}
			}
		}
	}

	console.log( 'setup function!' );

}

function drawRect() {
	myMood = swing + " " + 0.5 + ")";
	background("hsl(0, 0%, 0%)");
	stroke(myMood);
	strokeWeight(2);
	fill("hsla(0, 0%, 0%, 0)");
	rect( windowWidth /2, windowHeight /2, wi, hX );
	console.log( 'setup function!' );
}
*/

/*
// RECT
function draw() {
	myMood = swing + " " + 0.5 + ")";
	background("hsl(0, 0%, 0%)");
	stroke(myMood);
	strokeWeight(2);
	fill("hsla(0, 0%, 0%, 0)");
	wX = wX - 2;
	if (wX < (wX * 0.8)) {
		wX = height;
	}
	hX = hX - 2;
	if (hX < (hX * 0.8)) {
		hX = height;
	}
	drawRect( windowWidth/2, windowHeight/2, wX + (wX * 0.2), hX );
	console.log( 'setup function!' );
}
function drawRect(x, y, w, h) {
	rect(x, y, w, h);
	if (w > 10) {
	drawRect(x, y, w * 0.82, h * 0.82 );
	}
}
/*
/*
function draw() {
	var n = noise(yN) * height;
	background(0);
	stroke(swing + " " + n + ")");
	yN = yN + 0.01;
	var n = noise(yN) * height;
  	line(0, n, width, n);  
} 
/*
function draw() {
	stroke (255);
	fill(0);
	w = w - 1;
	h = h - 1;
	if ( h < 0 ) {
		h = windowHeight;
	}
	rect( windowWidth /2, windowHeight /2, w, h )
}


function draw() {
	stroke(swing + " 1)");
	strokeWeight(1);
	noFill();
	drawRect(0, 0, windowWidth, windowHeight)
	console.log( "setup function!" );
}

function drawRect( x, y, w, h ) {
	rect( x, y, w, h );
	if ( h < ( windowHeight * 0.1 ) ) {
		drawRect( x + ( windowWidth * 0.95 ) , y + ( windowHeight * 0.95 ) , w * 0.9 , h * 0.9 );
	}
	console.log( "setup function!" );
}



/*

function draw() {
	stroke(swing + ' 0.5)');
	noFill();
	drawCircle(windowWidth * 0.78, windowHeight * 0.15, windowWidth * 0.9);
	noLoop();

}

function drawCircle(x, y, d) {
	ellipse(x, y, d);
	if (d > 1) {
		drawCircle( x, y, d * noise(1));
		//drawCircle(x, y + d * 0.5, d * 0.5);
	}
}
*/