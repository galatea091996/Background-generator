var cssDisplay = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h1 = document.querySelector("h1");
var button = document.querySelector(".button");

function setGradient(){
	body.style.background =
	"linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";

	cssDisplay.textContent = body.style.background + ";";
	color1.style.background = color1.value;
	color2.style.background = color2.value;


 }

function randomHexValue() {
	var rgb = Math.floor(Math.random() * 256);
	return rgb.toString(16);
}

 //random colors
function randomColorCode(){
	//pick a "red" from 0 - ff
	var r = randomHexValue();
	//pick a "green" from 0 - ff
	var g = randomHexValue();
	// pick a "blue" from 0 - ff
	var b = randomHexValue();
	return "#" + r + g + b;
}

// random color button
 function randomColorButton() {
 	// set both colors
    color1.value = randomColorCode();
    color2.value = randomColorCode();
    // update gradient
    setGradient();
    button.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
 }

//h3 linear-gradient text
setGradient(); 

button.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";

 


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColorButton);