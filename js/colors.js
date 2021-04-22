let defaultButton = document.querySelector('#default-button');
let thickenButton = document.querySelector('#thicken-button');
let coloredButton = document.querySelector('#colored-button');
let square = document.querySelector('div');
let squareClass = document.getElementsByClassName('square');

function defaultDiv() {
  defaultButton.addEventListener('click', () => {
    hoverDiv();
  });
}

defaultDiv();

function randomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColor();

function coloredDiv() {
  coloredButton.addEventListener('click', () => {
    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = `${randomColor()}`;
    });
  });
}

coloredDiv();
