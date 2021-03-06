//set variables
const container= document.getElementById('container');
const smallButton= document.getElementById('small');
const mediumButton= document.getElementById('medium');
const largeButton= document.getElementById('large');
var gridSize= 0;

//function to create grid
function makeGrid() {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    for(var i = 0; i < (gridSize*gridSize); i++) {
        blockDiv = document.createElement("div");
        blockDiv.className = "block";
        blockDiv.style.backgroundColor= '#f2f2f2';
        container.append(blockDiv);
      }
}

//function to draw on mouseover
function draw() {
    let currentBackground = event.target.style.backgroundColor;
    let drawingArea = event.target;
    if (currentBackground = '#f2f2f2') {
        drawingArea.style.backgroundColor= '#8c8c8c'    
    } else {
        console.log(error);
    }
}

//button click to create grid
smallButton.addEventListener('click', () => {
    gridSize = 10;
    makeGrid();
})

mediumButton.addEventListener('click', () => {
    gridSize = 30;
    makeGrid();
})

largeButton.addEventListener('click', () => {
    gridSize = 100;
    makeGrid();
})

//add draw event
container.addEventListener('mouseover', () => {
    draw();
})