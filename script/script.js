
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')

function createCells () {
  for (let i = 1; i <=100; i++) {
    let cell = document.createElement ('div')
    cell.classList.toggle ('cell-100')
    container.append(cell);
  }
}

createCells();


console.log(container);

