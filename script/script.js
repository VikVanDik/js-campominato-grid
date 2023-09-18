
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')

function createCells (numCell) {
  for (let i = 1; i <=numCell; i++) {
    let cell = document.createElement ('div')
    cell.classList.toggle ('cell-${numCell}')
    container.append(cell);
    console.log(cell);
  }
}

createCells();


console.log(container);

