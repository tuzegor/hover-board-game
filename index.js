const board = document.getElementById('board');
const SQUARE_NUMBER = 600;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseleave', () => removeColor(square));
}

function setColor(element) {
  const color = generateColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`;
}

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
