var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messegeDisplay = document.querySelector("#messege")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var eassyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

eassyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    eassyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor;
    colorDisplay.textContent = pickedColor
});

hardBtn.addEventListener("click", function() {
    eassyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
})

resetButton.addEventListener("click", function() {
    //generate new colors
    colors = generateRandomColors(6);
    //pick a new colors on array
    pickedColor = pickColor();
    //change colorDisplay to math picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squareі
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to a pickedColor
        if (clickedColor === pickedColor) {
            messegeDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again!"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323"
            messegeDisplay.textContent = "Try Again"
        }
    });
}

function changeColors(color) {
    //loop throught all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color  to match given color
        squares[i].style.background = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make array
    var arr = []
        //repeat num times
    for (var i = 0; i < num; i++) {
        //get random colors and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}