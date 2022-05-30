const grid = document.querySelector("#grid");
const sizeButton = document.querySelector("#sizeChoiceBtn");

let userChoice;
let squareSize;

sizeButton.addEventListener('click', () => {
    userChoice = prompt("How many squares per row?");
    squareSize = 500 / userChoice;
    console.log(squareSize);
    console.log(userChoice ** 2);
});

sizeButton.addEventListener('click', () => {
    for (let i = 0; i < userChoice ** 2; i++) {
        const square = document.createElement("div");
        square.classList.add('square');
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
    
        grid.appendChild(square);
        square.addEventListener('mouseover', () => {
            let colors = ["red", "blue", "orange", "purple", "green", "yellow"];
            currentIndex = colors.indexOf(square.style.backgroundColor);
            colorsMinusCurrent = colors.splice(currentIndex, 1);
            let colorChoice = Math.floor(Math.random() * 5);
            square.style.backgroundColor = colors[colorChoice];
        });
    }
    
});



