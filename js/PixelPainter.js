//div element creater
function makeIdDiv(elem, label) {
  let makeIdElement = document.createElement(elem);
  makeIdElement.id = label;
  return makeIdElement;
}

//add fonts for page
let fonts = document.createElement("link");
fonts.href =
  "https://fonts.googleapis.com/css?family=Amatic+SC|Dancing+Script&display=swap";
fonts.rel = "stylesheet";
document.head.appendChild(fonts);

//create containers for colors and grid
let gridContainer = makeIdDiv("div", "myGrid");

let colorContainer = makeIdDiv("div", "myColor");

let getPixelDiv = document.querySelector("#pixelPainter");

getPixelDiv.appendChild(colorContainer);
getPixelDiv.appendChild(gridContainer);

//create boxes inside grid container
function makeClassDiv(elem, label) {
  let makeClassElement = document.createElement(elem);
  makeClassElement.className = label;
  return makeClassElement;
}

let numOfRows = 40;
let numOfBoxes = 40;

for (let i = 0; i < numOfRows; i++) {
  let gridRows = makeClassDiv("div", "rows");
  myGrid.appendChild(gridRows);
  for (let i = 0; i < numOfBoxes; i++) {
    let gridBox = makeClassDiv("div", "coloringBox");
    gridRows.appendChild(gridBox);
  }
}

//creat script src for jscolor
let jscolor = document.createElement("script");
jscolor.src = "js/jscolor.js";
document.body.appendChild(jscolor);

//create color selector in color box
let colorDiv = makeIdDiv("div", "colorSelector");
colorContainer.appendChild(colorDiv);

let color = document.createElement("input");
color.className = "jscolor";
colorDiv.appendChild(color);

//create buttons div
let buttonDiv = makeIdDiv("div", "buttons");
colorContainer.appendChild(buttonDiv);

//create erase button
let eraseButton = makeIdDiv("button", "eraseBox");
eraseButton.textContent = "Eraser";
buttonDiv.appendChild(eraseButton);

//create clear button
let clearButton = makeIdDiv("button", "clearGrid");
clearButton.textContent = "Clear";
buttonDiv.appendChild(clearButton);

//create save button
let saveButton = makeIdDiv("button", "saveGrid");
saveButton.textContent = "Save";
buttonDiv.appendChild(saveButton);

//get color
let colorMemory = undefined;

let inputColor = document.querySelectorAll(".jscolor");
color.addEventListener("change", function() {
  colorMemory = this.style["background-color"];
});

let mousedown = false;

let colorIn = document.querySelectorAll(".coloringBox");
colorIn.forEach(function(e) {
  e.addEventListener("mousedown", function() {
    this.style.background = colorMemory;
    mousedown = true;
  });
  e.addEventListener("mouseover", function() {
    if (mousedown === true) {
      this.style.background = colorMemory;
    }
  });
  e.addEventListener("mouseup", function() {
    mousedown = false;
  });
});

//erase box
eraseBox.addEventListener("click", function() {
  colorMemory = "";
});

//clear grid
clearGrid.addEventListener("click", function() {
  colorIn.forEach(function(a) {
    a.style.backgroundColor = "";
    a.style.opacity = "";
  });
});

// //save your beautiful drawing
// let pixelArray = [];
// let savedColorArr = [];

// for (let i = 0; i < colorIn.length; i++) {
//   let saveColor = colorIn.style.backgroundColor;
//   console.log(saveColor);
// }
