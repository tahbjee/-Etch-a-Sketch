function createDivs(num) {
  for (let i = 0; i < num; i++) {
    let container = document.querySelector(".container");
    let newDiv = document.createElement("div");

    newDiv.className = "createdDivs";

    container.appendChild(newDiv);
  }
}

let theDivs = prompt("");

createDivs(theDivs);

function getRandomColor() {
  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);

  return `rgb(${randomR},${randomG},${randomB})`;
}

let elements = document.querySelectorAll(".createdDivs");

elements.forEach(function (element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = getRandomColor();
  });
});
