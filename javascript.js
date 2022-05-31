const grid = document.querySelector("#grid");
const monochromeButton = document.querySelector("#monochromeButton");
const rainbowButton = document.querySelector("#rainbowButton");
const sizeChoice = document.querySelector("#sizeChoice");
let slider = document.querySelector("#slider");
const clearButton = document.querySelector("#clearButton");
const pinkButton = document.querySelector("#pinkButton");

let userChoice = 10;

createMonochromeGrid();

function createGrid() {
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        grid.appendChild(square);
    }    
}

rainbowButton.addEventListener('click', () => {
    grid.innerHTML = '';
    createRainbowGrid();
});

pinkButton.addEventListener('click', () => {
    grid.innerHTML = '';
    createPinkGrid();
});

clearButton.addEventListener('click', () => {
    grid.innerHTML = '';
    createGrid();
})

monochromeButton.addEventListener('click', () => {
    grid.innerHTML = '';
    createMonochromeGrid();
})

// This needs work
slider.addEventListener('onmousemove', (e) => {
    userChoice = slider.value;
    console.log(slider.value);
});

function createMonochromeGrid() {
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
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
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        setSquareStyle(square);
        changeToRainbow(square);
        grid.appendChild(square);
    }
}    

function createPinkGrid() {
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        setSquareStyle(square);
        changeToPink(square);
        grid.appendChild(square);
    }
}  

function changeToRainbow(square) {
    square.addEventListener('mouseover', () => {
        let rainbowColors = ["red", "blue", "orange", "purple", "green", "yellow"];
        setRandomColor(rainbowColors, square);
    });
}

function changeToPink(square) {
    square.addEventListener('mouseover', () => {
        let pinkColors = ["rgb(216, 153, 213)", "rgb(221, 62, 229)", "rgb(129, 33, 107)"];
        setRandomColor(pinkColors, square);
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
 
}

