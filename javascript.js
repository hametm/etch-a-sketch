const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseover', () => {
        let colors = ["red", "blue", "orange"];
        let colorChoice = Math.floor(Math.random() * 3);
        let colorString = String(colors[colorChoice]);
        square.style.backgroundColor = colorString;;
    });
}


