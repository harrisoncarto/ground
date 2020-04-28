function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	stroke(255);
	strokeWeight(0.1);
  
	let rotate = 60;
  
	for (let a=0; a <= width; a += rotate/2) {
	  for (let b=windowWidth; b >= 0; b -= rotate/2) {
		line(a, 0, b, height);
	  }
	}
	
	for (let c=0; c <= height; c += rotate/2) {
	  for (let d=windowHeight; d >= 0; d -= rotate/2) {
		line(0, c, width, d);
	  }
	}
  }