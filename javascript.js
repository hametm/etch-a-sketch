const grid = document.querySelector("#grid");
const monochromeButton = document.querySelector("#monochromeButton");
const rainbowButton = document.querySelector("#rainbowButton");
const sizeChoice = document.querySelector("#sizeChoice");
let slider = document.querySelector("#slider");

let userChoice = 10;
let squareSize = 50;

console.log(slider.value);

rainbowButton.addEventListener('click', () => {
    grid.innerHTML = '';
    squareSize = 500 / userChoice;
    createRainbowGrid();
});

monochromeButton.addEventListener('click', () => {
    grid.innerHTML = '';
    squareSize = 500 / userChoice;
    createMonochromeGrid();
})

// This needs work
slider.addEventListener('onmousemove', () => {
    userChoice = slider.value;
    console.log(slider.value);
});

function createMonochromeGrid() {
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        setSquareStyle(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
        grid.appendChild(square);
    }    
}

function createRainbowGrid() {
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        setSquareStyle(square);
        changeColor(square);
        grid.appendChild(square);
    }
}    

function changeColor(square) {
    square.addEventListener('mouseover', () => {
        let colors = ["red", "blue", "orange", "purple", "green", "yellow"];
        setRandomColor(colors, square);
    });
}

function setRandomColor(colors, square) {
    currentIndex = colors.indexOf(square.style.backgroundColor);
    colorsMinusCurrent = colors.splice(currentIndex, 1);
    let colorChoice = Math.floor(Math.random() * colors.length);
    square.style.backgroundColor = colors[colorChoice];
}

function setSquareStyle(square) {
    square.classList.add('square');
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
}

