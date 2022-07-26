const grid = document.querySelector("#grid");
const sizeChoice = document.querySelector("#sizeChoice");
const slider = document.querySelector("#slider");
const colorButton = document.querySelectorAll(".colorButton");
const blackButton = document.querySelector("#black");
const reginaAlert = document.querySelector("#reginaAlert");

let userChoice = 15;
let colorChoice = "black";
pressButton(blackButton);

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
            case "black":
                changeToBlack(square);
                break;
            case "rainbow":
                changeToRainbow(square);
                break;
            case "pink":
                changeToPink(square);
                break;
            case "christmas":
                changeToChristmas(square);
                break;
            default:
                break;
        }
        grid.appendChild(square);
    }    
}

function clearGrid() {
    grid.innerHTML = "";
}

function changeToRainbow(square) {
    square.addEventListener("mouseover", () => {
        let rainbowColors = ["red", "blue", "orange", "purple", "green", "yellow"];
        setRandomColor(rainbowColors, square);
    });
}

function changeToBlack(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
}

function changeToPink(square) {
    square.addEventListener('mouseover', () => {
        let pinkColors = ["rgb(216, 153, 213)", "rgb(221, 62, 229)", "rgb(129, 33, 107)"];
        setRandomColor(pinkColors, square);
    });
}

function changeToChristmas(square) {
    square.addEventListener("mouseover", () => {
        let christmasColors = ["red", "green"];
        setRandomColor(christmasColors, square);
    });
}

function setRandomColor(colors, square) {
    currentIndex = colors.indexOf(square.style.backgroundColor);
    let randomColor = Math.floor(Math.random() * colors.length);
    square.style.backgroundColor = colors[randomColor];
}

function setSquareStyle(square) {
    square.classList.add("square");
}

function pressButton(button) {
    if (colorChoice != "clear") button.classList.add("selected");
}

function releaseButtons() {
    colorButton.forEach(button => {
        button.classList.remove("selected");
    });
}

// Event listeners
colorButton.forEach(button => {
    button.addEventListener("click", () => {
        colorChoice = button.id;
        createGrid(colorChoice);
        releaseButtons();
        pressButton(button);
    })
});

slider.addEventListener("mouseup", () => {
    userChoice = slider.value;
    createGrid();
});

reginaAlert.addEventListener("click", () => {
    alert("Gretchen, stop trying to make \"fetch\" happen. It's not going to happen!");
})