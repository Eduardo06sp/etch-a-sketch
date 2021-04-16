const container = document.querySelector('.container');
const clearGridButton = document.querySelector('.clear-grid');
const newGridButton = document.querySelector('.new-grid');
const numberInput = document.querySelector('.grid-size');
const modal = document.querySelector('.modal');

clearGridButton.addEventListener('click', clearGrid);
newGridButton.addEventListener('click', newGrid);
createGrid();

function createGrid(gridHeight = 16, gridWidth = 16) {
  for (i = 0; i < gridHeight; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (j = 0; j < gridWidth; j++) {
      let column = document.createElement('div');
      column.classList.add('cell');
      row.appendChild(column);
    }

    container.appendChild(row);
  }

  container.addEventListener('mouseover', colorCell);
}


function colorCell(e) {
  cell = e.target;
  cell.classList.add('black-cell');
}


function clearGrid() {
  container.innerHTML = '';
  modal.classList.add('modal-visible');

  container.removeEventListener('mouseover', colorCell);
}



function newGrid() {
  let validateInput = numberInput.checkValidity();

  if (validateInput) {
    let gridSize = parseInt(numberInput.value);

    createGrid(gridSize, gridSize);
    modal.classList.remove('modal-visible');
  }
}
