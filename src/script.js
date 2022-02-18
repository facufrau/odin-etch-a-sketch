
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
const gridContainer = document.getElementById("grid");
const GRID_SIZE = Number(prompt("Enter grid size >= 16 and <= 100:"));
if (GRID_SIZE <= 100 && GRID_SIZE >= 16){
    createGrid(GRID_SIZE);
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("mouseenter", fillCell))
}


