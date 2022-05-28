const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseover', () => {
        let colors = ["red", "blue", "orange", "purple", "green", "yellow"];
        currentIndex = colors.indexOf(square.style.backgroundColor);
        colorsMinusCurrent = colors.splice(currentIndex, 1);
        let colorChoice = Math.floor(Math.random() * 5);
        square.style.backgroundColor = colors[colorChoice];
    });
}


