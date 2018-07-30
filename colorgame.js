var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
init();


function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
function setupModeButtons(){
	//mode button event listeners
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			}
			else{
				numSquares = 6;
			}
			reset();

		})
	}
}
function setupSquares(){
	for(var i = 0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square and 
			//compare color to picked color
		var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}	
			else{
				this.style.backgroundColor = "#232323";	
				messageDisplay.textContent = "Try Again!"
			} 
		})
		reset();

	
}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	//add initial colors to squares
	//add click listeners to squares
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(3);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i <squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}

// })
// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i <squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
	reset();
})



function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	} 
}


function pickColor(){
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColors(num){
	//make an array
	var array = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		array.push(randomColor());
	}
	//return that array
	return array;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256); 
	var g =  Math.floor(Math.random() * 256); 
	var b =  Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}