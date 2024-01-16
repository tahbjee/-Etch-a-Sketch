const sizeOfGrid = 4;

const container = document.querySelector(".container");

const createGrid = (amtOfGrid) => {
  for (let i = 0; i < amtOfGrid; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");

    for (let j = 0; j < amtOfGrid; j++) {
      const widthAndHeight = 960 / sizeOfGrid;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;
      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
};

createGrid(sizeOfGrid);

function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);

  return `rgb(${randomR},${randomG},${randomB})`;
}

let elements = document.querySelectorAll(".grid-box");

elements.forEach(function (element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = getRandomColor();
  });
});
