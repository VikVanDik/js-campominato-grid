
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')

// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione).
function createCells (numCell) {
  for (let i = 1; i <=numCell; i++) {
    // 3. Creare gli elementi da javascript ed aggiungere loro le classi necessarie.
    let cell = document.createElement ('div')
    cell.classList.toggle(`cell-${numCell}`)
    container.append(cell);
    console.log(cell);

    cell.addEventListener ('click', function () {
      let classAdded = this.classList.toggle ('clicked')
      
      if (classAdded) {
        cell.innerHTML = [i]
      } else {
        cell.innerHTML = ``
      }

      
    })
  }
  
}


createCells(100);


console.log(container);

