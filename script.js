let firstColor;
let nowSelected;
let prevSelected;
let cor;
let colorValue;

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

function createPixel() {
  let pixel;
  for (let index = 0; index < 5; index += 1) {
    const createSection = document.createElement('section');
    pixelBoard.appendChild(createSection);
    const linhas = document.getElementsByTagName('section');
    for (let index2 = 0; index2 < 5; index2 += 1) {
      pixel = document.createElement('div');
      pixel.setAttribute('class', 'pixel');
      linhas[index].appendChild(pixel);
    }
  }
}
createPixel();

function selectColor() {
  let colors = document.getElementsByClassName('color');
  prevSelected = document.getElementsByClassName('selected');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', function () {
      if (prevSelected.length !== null) {
        prevSelected[0].classList.remove('selected');
      }
      colors[index].classList.toggle('selected');
    });
  }
  nowSelected = document.getElementsByClassName('selected');
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

