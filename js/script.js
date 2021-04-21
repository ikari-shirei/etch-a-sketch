function createDiv() {
  let gridContainer = document.querySelector('.grid-container');
  for (let i = 1; i <= 256; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    gridContainer.appendChild(div);
  }
}

createDiv();

function hoverDiv() {
  let square = document.querySelector('div');
  square.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'var(--green2)';
  });
}

hoverDiv();

function clear() {
  let gridContainer = document.querySelector('.grid-container');
  let square = document.querySelector('.square');
  let clear = document.querySelector('#clear-button');
  console.log(gridContainer);
  clear.addEventListener('click', () => {
    square.style.backgroundColor = 'var(--green3)';
  });
}

clear();
