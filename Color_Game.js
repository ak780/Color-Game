var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var ctr=4;
	var x="";
	var y="";
	var z="";
	while(pickedColor[ctr]!=',')
	{
		x=x+pickedColor[ctr];
		ctr++;
   }

   ctr+=2;
   while(pickedColor[ctr]!=',')
   {
   	y+=pickedColor[ctr];
   	ctr++;
   }
   ctr+=2;
   while(pickedColor[ctr]!=')')
   {
   	z+=pickedColor[ctr];
   	ctr++;
   }
var q = parseInt(x)+parseInt(y)+parseInt(z);
var percent = "Red=" + parseInt((x/q)*100)+"% " + "Green=" + parseInt((y/q)*100)+"% " + "Blue=" + parseInt((z/q)*100)+"%";
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	var ctr=4;
	var x="";
	var y="";
	var z="";
	while(pickedColor[ctr]!=',')
	{
		x=x+pickedColor[ctr];
		ctr++;
   }

   ctr+=2;
   while(pickedColor[ctr]!=',')
   {
   	y+=pickedColor[ctr];
   	ctr++;
   }
   ctr+=2;
   while(pickedColor[ctr]!=')')
   {
   	z+=pickedColor[ctr];
   	ctr++;
   }
var q = parseInt(x)+parseInt(y)+parseInt(z);
var percent = "Red=" + parseInt((x/q)*100)+"% " + "Green=" + parseInt((y/q)*100)+"% " + "Blue=" + parseInt((z/q)*100)+"%";
	colorDisplay.textContent = percent;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	var ctr=4;
	var x="";
	var y="";
	var z="";
	while(pickedColor[ctr]!=',')
	{
		x=x+pickedColor[ctr];
		ctr++;
   }

   ctr+=2;
   while(pickedColor[ctr]!=',')
   {
   	y+=pickedColor[ctr];
   	ctr++;
   }
   ctr+=2;
   while(pickedColor[ctr]!=')')
   {
   	z+=pickedColor[ctr];
   	ctr++;
   }
var q = parseInt(x)+parseInt(y)+parseInt(z);
var percent = "Red=" + parseInt((x/q)*100)+"% " + "Green=" + parseInt((y/q)*100)+"% " + "Blue=" + parseInt((z/q)*100)+"%";
	colorDisplay.textContent = percent;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	var ctr=4;
	var x="";
	var y="";
	var z="";
	while(pickedColor[ctr]!=',')
	{
		x=x+pickedColor[ctr];
		ctr++;
   }

   ctr+=2;
   while(pickedColor[ctr]!=',')
   {
   	y+=pickedColor[ctr];
   	ctr++;
   }
   ctr+=2;
   while(pickedColor[ctr]!=')')
   {
   	z+=pickedColor[ctr];
   	ctr++;
   }
var q = parseInt(x)+parseInt(y)+parseInt(z);
var percent = "Red=" + parseInt((x/q)*100)+"% " + "Green=" + parseInt((y/q)*100)+"% " + "Blue=" + parseInt((z/q)*100)+"%";
	colorDisplay.textContent = percent;
	//change colorDisplay to match picked Color
	messageDisplay.textContent="";
	resetButton.textContent="New colors"
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundImage = 'linear-gradient(to right,orange,red,yellow,green,indigo,blue,violet)';
});

colorDisplay.textContent = percent;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() 
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function generateRandomColors(num) 
{
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

