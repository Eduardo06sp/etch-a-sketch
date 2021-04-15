const container = document.querySelector('.container');

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

createGrid();

function colorCell(e) {
  cell = e.target;
  cell.classList.add('black-cell');
}

const clearGridButton = document.querySelector('.clear-grid');
clearGridButton.addEventListener('click', clearGrid);

modal = document.querySelector('.modal');
function clearGrid() {
  container.innerHTML = '';
  modal.classList.add('modal-visible');

  container.removeEventListener('mouseover', colorCell);
}
