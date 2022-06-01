const grid = document.querySelector("#grid");
const monochromeButton = document.querySelector("#monochrome");
const rainbowButton = document.querySelector("#rainbow");
const sizeChoice = document.querySelector("#sizeChoice");
const slider = document.querySelector("#slider");
const clearButton = document.querySelector("#clear");
const pinkButton = document.querySelector("#pink");
const glenButton = document.querySelector("#glen");
const colorChoiceBtn = document.querySelectorAll(".colorChoiceBtn");

let userChoice = 10;
let colorChoice;

createGrid();

function createGrid() {
    clearGrid();
    setGridLines();
    createSquares();
}

function setGridLines() {
    grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
}

function createSquares() {
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        switch(colorChoice) {
            case "monochrome":
                changeToBlack(square);
                break;
            case "rainbow":
                changeToRainbow(square);
                break;
            case "pink":
                changeToPink(square);
                break;
            case "glen":
                changeToGlen(square);
                break;
            default:
                break;
        }
        grid.appendChild(square);
    }    
}

function clearGrid() {
    grid.innerHTML = '';
}

function changeToRainbow(square) {
    square.addEventListener('mouseover', () => {
        let rainbowColors = ["red", "blue", "orange", "purple", "green", "yellow"];
        setRandomColor(rainbowColors, square);
    });
}

function changeToBlack(square) {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
}

function changeToPink(square) {
    square.addEventListener('mouseover', () => {
        let pinkColors = ["rgb(216, 153, 213)", "rgb(221, 62, 229)", "rgb(129, 33, 107)"];
        setRandomColor(pinkColors, square);
    });
}

function changeToGlen(square) {
    square.addEventListener('mouseover', () => {
        let glenColors = ["rgb(96, 234, 255)", "rgb(177, 31, 255)", "rgb(241, 250, 59)", "rgb(0, 255, 55)", "rgb(255, 0, 166)"];
        setRandomColor(glenColors, square);
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

function pressButton(button) {
    if (colorChoice != "clear") {
        button.classList.add(`${colorChoice}Selected`);
    }
}

function releaseButtons() {
    colorChoiceBtn.forEach(button => {
        button.classList.remove(`${button.id}Selected`);
    });
}

// Event listeners
colorChoiceBtn.forEach(button => {
    button.addEventListener('click', () => {
        colorChoice = button.id;
        createGrid(colorChoice);
        releaseButtons();
        pressButton(button);

    })
});

slider.addEventListener('mouseup', () => {
    userChoice = slider.value;
    createGrid();
});