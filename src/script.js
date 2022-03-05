function addListenersToCells(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", fillCell))
}

function createGrid(size){
    gridContainer.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
    gridContainer.style["grid-template-rows"] = `repeat(${size}, 1fr)`;
    for (let j = 0; j < size; j++){
        for (let i = 0; i < size; i++){
          const newDiv = document.createElement('div');
          newDiv.classList.add("cell");
          gridContainer.appendChild(newDiv);
          }  
    }
    addListenersToCells();
}

function generateRandomColor(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
}

function fillCell(e){
    if (!e.target.style.backgroundColor){
       e.target.style.backgroundColor = generateRandomColor(); 
    }
}

function clearGrid(){
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.backgroundColor = "");
}

function resizeGrid(){
    const newSize = prompt("Enter grid size >= 16 and <= 100:");
    const gridContainer = document.getElementById("grid");
    clearGrid();
    while (gridContainer.hasChildElements){
        gridContainer.removeChild(gridContainer.lastChild)
    }
    if (newSize >= 16 && newSize <= 100){
        createGrid(newSize);
    }
}

const gridContainer = document.getElementById("grid");
const STARTING_GRID_SIZE = 16;

createGrid(STARTING_GRID_SIZE);

const clearButton = document.getElementById("clear");
const sizeButton = document.getElementById("size");

sizeButton.onclick = resizeGrid;
clearButton.onclick = clearGrid;