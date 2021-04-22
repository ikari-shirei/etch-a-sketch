//column number of grids
let numberOfGrid = 16;

//total number of created divs
let lengthOfGrid = numberOfGrid * numberOfGrid;

function createDiv(num) {
  let gridContainer = document.querySelector('.grid-container');

  // create divs as many as needed
  for (let i = 1; i <= num; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    gridContainer.appendChild(div);
  }
}

createDiv(lengthOfGrid);

function removeDiv(num) {
  let gridContainer = document.querySelector('.grid-container');

  // remove divs for replacement
  for (let i = 1; i <= num; i++) {
    let square = document.querySelector('.square');
    gridContainer.removeChild(square);
  }
}

function hoverDiv() {
  let square = document.querySelector('div');
  square.addEventListener('mouseover', (e) => {
    //e.target.classList.add('square-active');
    e.target.style.backgroundColor = 'var(--green2)';
  });
}

hoverDiv();

function clear() {
  let gridContainer = document.querySelector('.grid-container');
  //all divs inside of grid container
  let gridContainerItems = gridContainer.getElementsByTagName('*');
  let clear = document.querySelector('#clear-button');
  //iterate through divs and remove active class
  clear.addEventListener('click', () => {
    for (let i = 0; i < gridContainerItems.length; i++) {
      //gridContainerItems[i].classList.remove('square-active');
      gridContainerItems[i].style.backgroundColor = 'var(--green3)';
    }
  });
}

clear();

function ask() {
  let gridContainer = document.querySelector('.grid-container');
  let gridContainerItems = gridContainer.getElementsByTagName('*');
  let gridNumber = document.querySelector('#grid-number-button');
  //remove active class
  gridNumber.addEventListener('click', () => {
    for (let i = 0; i < gridContainerItems.length; i++) {
      gridContainerItems[i].classList.remove('square-active');
    }
    //ask for column size
    numberOfGrid = prompt('How many shall thee? 1-100');
    //remove all divs and replace them with using new inputs
    if (numberOfGrid <= 100 && numberOfGrid >= 1 && Number(numberOfGrid)) {
      removeDiv(lengthOfGrid);
      numberOfGrid = numberOfGrid;
      lengthOfGrid = numberOfGrid * numberOfGrid;
      gridContainer.style.gridTemplateColumns = `repeat(${numberOfGrid}, 1fr)`;
      createDiv(lengthOfGrid);
    } else {
      window.alert('Number should be between 100 and 1');
    }
  });
}

ask();
