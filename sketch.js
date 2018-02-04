var lincoln;

function preload(){
	lincoln = loadImage("AbrahamLincoln.jpg");
}

function setup(){
	createCanvas(lincoln.width, lincoln.height);
}

function draw() {
	background(0);
	image(lincoln, 0, 0);
	loadPixels();
	for (var row = 0; row < height; row++){
		for (var col = 0; col < width; col++){
			var startingIndex = (col + row * width) * 4;
			var r = pixels[startingIndex + 0];
			var g = pixels[startingIndex + 1];
			var b = pixels[startingIndex + 2];
			var a = pixels[startingIndex + 3];
			if (keyIsPressed) {
				if (key == "1"){
					gray_filter(startingIndex, r, g, b, a);
				}
				if (key == "2"){
					green_filter(startingIndex, r, g, b, a);
				}
				if (key == "3"){
					silver_filter(startingIndex, r, g, b, a);
				}
				if (key == "4"){
					pink_filter(startingIndex, r, g, b, a);
				}
				if (key == "5"){
					blahblah_filter(startingIndex, r, g, b, a);
				}
				if (key == "6"){
					loveyou_filter(startingIndex, r, g, b, a);
				}
				if (key == "7"){
					heygirl_filter(startingIndex, r, g, b, a);
				}
				if (key == "8"){
					sheyla_filter(startingIndex, r, g, b, a);
				}
				if(key == "9"){
					oneinakind_filter(startingIndex, r, g, b, a);
				}
				
				if(key == "0"){
					prettygirl_filter(startingIndex, r, g, b, a);
				}
			}
		}
	}
	updatePixels();
}

function gray_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function green_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = 0; // Red Color
	pixels[startingIndex + 1] = g; // Green Color
	pixels[startingIndex + 2] = 0; // Blue Color
	pixels[startingIndex + 3] = a; // Alpha Transparency
}

function silver_filter(startingIndex, g, a){
	pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function pink_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = g; // Red Color
	pixels[startingIndex + 1] = r - random(50, 155); // Green Color
	pixels[startingIndex + 2] = b - random(10, 15); // Blue Color
	pixels[startingIndex + 3] = a; // Alpha Transparency
}

function blahblah_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = g; //red
	pixels[startingIndex + 1] = r; //green
	pixels[startingIndex + 2] = b; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function loveyou_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = r; //red
	pixels[startingIndex + 1] = b; //green
	pixels[startingIndex + 2] = r; //blue
	pixels[startingIndex + 3] = b; //alpha
}

function heygirl_filter(startingIndex, r, g, b, a){
	pixels[startingIndex + 0] = 255 - r;
	pixels[startingIndex + 1] = 255 - g;
	pixels[startingIndex + 2] = 255 - b;
	pixels[startingIndex + 3] = a;
}

function sheyla_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r/2;
    pixels[startingIndex + 1] = g/2;
    pixels[startingIndex + 2] = b/2;
    pixels[startingIndex + 3] = a;
}

function oneinakind_filter(startingIndex, r, g, b, a){
    if(startingIndex % 20 == 0){
        pixels[startingIndex + 0] = 255; //red
        pixels[startingIndex + 1] = 0; //green
        pixels[startingIndex + 2] = 0; //blue
        pixels[startingIndex + 3] = a; //alpha
    }
}

 function prettygirl_filter(startingIndex, r, g, b, a){
    pixels[startingIndex + 0] = r/2; //red
    pixels[startingIndex + 1] = b/2; //green
    pixels[startingIndex + 2] = g/2; //blue
    pixels[startingIndex + 3] = a; //alpha
}

