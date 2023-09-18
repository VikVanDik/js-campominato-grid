
// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione?).

const container = document.querySelector('.c-container')

// 2. Creare un ciclo al quale collegare gli elementi da creare (da aggiungere a funzione).
function createCells (numCell) {
  for (let i = 1; i <=numCell; i++) {
    // 3. Creare gli elementi da javascript ed aggiungere loro le classi necessarie.
    let cell = document.createElement ('div')
    cell.classList.toggle(`cell-${numCell}`)
    container.append(cell);

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


function difficulty (){
  const select = document.getElementById ('difficulty').value
  if (select === 1){
    createCells(100)
  } else if (select === 2){
    createCells(81)
  } else {
    createCells(49)
  }
}

const button = document.getElementById('button')

button.addEventListener('click', function (){
  container.classList.remove ('d-none')
  difficulty();
  console.log(select);
})

console.log(container);

