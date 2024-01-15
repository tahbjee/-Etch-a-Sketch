sizeOfGrids = 10;

let container = document.querySelector(".container");

let resetButton = document.querySelector("button");

function createDivs(amtOfGrids) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  for (let i = 0; i < amtOfGrids; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add = "new-divs";

    for (let j = 0; j < amtOfGrids; j++) {
      const widthAndHeight = 500 / sizeOfGrids;
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${widthAndHeight}px`;
      gridBox.style.height = `${widthAndHeight}px`;

      newDiv.appendChild(gridBox);
    }
    container.appendChild(newDiv);
  }
}

resetButton.addEventListener("click", () => {
  let userSize = Number(prompt("Select the size"));

  while (userSize > 100) {
    userSize = Number(
      prompt("Make sure to select a number that is equal to or less than 100. ")
    );
  }
  createDivs(userSize);
});

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

function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);

  return `rgb(${randomR},${randomG},${randomB})`;
}
