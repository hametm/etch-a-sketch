const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "purple";
    });
}

