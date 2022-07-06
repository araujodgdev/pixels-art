let firstColor;
let prevSelected;
let cor;
let colorValue;
let n = 5;

const pageTitle = document.getElementsByTagName('h1');
pageTitle[0].setAttribute('id', 'title');
pageTitle[0].innerHTML = 'Paleta de Cores';

const createColorPalette = document.createElement('div');
createColorPalette.setAttribute('id', 'color-palette');

const mainTag = document.getElementsByTagName('main');
mainTag[0].appendChild(createColorPalette);

const colorPalette = document.getElementById('color-palette');

const createPixelBoard = document.createElement('div');
createPixelBoard.setAttribute('id', 'pixel-board');
mainTag[0].appendChild(createPixelBoard);

const pixelBoard = document.getElementById('pixel-board');

const createDiv = document.createElement('div');
createDiv.setAttribute('id', 'buttons');
mainTag[0].insertBefore(createDiv, colorPalette.nextSibling);

const buttonLimpar = document.createElement('button');
buttonLimpar.setAttribute('id', 'clear-board');
buttonLimpar.innerHTML = 'Limpar';
document.getElementById('buttons').appendChild(buttonLimpar);

const createInput = document.createElement('input');
createInput.setAttribute('id', 'board-size');
createInput.setAttribute('placeholder', 'Quadro');
createInput.setAttribute('type', 'number');
createInput.setAttribute('min', '0');
createInput.setAttribute('max', '10');
document.getElementById('buttons').appendChild(createInput);
const boardSize = document.getElementById('board-size');

const buttonVqv = document.createElement('button');
buttonVqv.setAttribute('id', 'generate-board');
buttonVqv.innerHTML = 'VQV';
document.getElementById('buttons').appendChild(buttonVqv);

function createColor() {
  let color;
  for (let index = 0; index < 4; index += 1) {
    color = document.createElement('div');
    color.setAttribute('class', 'color');
    colorPalette.appendChild(color);
  }
  colorPalette.firstChild.setAttribute('id', 'first-color');
}
createColor();

function createPixel(n) {
  let pixel;
  for (let index = 0; index < n; index += 1) {
    const createSection = document.createElement('section');
    pixelBoard.appendChild(createSection);
    const linhas = document.getElementsByTagName('section');
    for (let index2 = 0; index2 < n; index2 += 1) {
      pixel = document.createElement('div');
      pixel.setAttribute('class', 'pixel');
      linhas[index].appendChild(pixel);
    }
  }
}
createPixel(n);

function selectColor() {
  const colors = document.getElementsByClassName('color');
  prevSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function () {
      if (prevSelected.length !== null) {
        prevSelected[0].classList.remove('selected');
      }
      colors[index].classList.toggle('selected');
    });
  }
  firstColor = document.getElementById('first-color');
  firstColor.classList.add('selected');
}
selectColor();

function paintPixel() {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function () {
      cor = document.getElementsByClassName('selected');
      colorValue = window.getComputedStyle(cor[0]).backgroundColor;
      pixels[index].style.backgroundColor = colorValue;
    });
  }
}
paintPixel();

buttonLimpar.addEventListener('click', function () {
  let pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

buttonVqv.addEventListener('click', function () {
  let list = document.getElementById('pixel-board');
  for (child of list.children) {
    child.remove();
  }
  n = parseInt(document.getElementById('board-size').value);
  createPixel(n);
});
