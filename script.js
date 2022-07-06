let firstColor;
let selected;

const pageTitle = document.getElementsByTagName('h1');
pageTitle[0].setAttribute('id', 'title');
pageTitle[0].innerHTML = 'Paleta de Cores';
const  createColorPalette = document.createElement('div');
createColorPalette.setAttribute('id', 'color-palette');
const mainTag = document.getElementsByTagName('main');
mainTag[0].appendChild(createColorPalette);
const colorPalette = document.getElementById('color-palette');

function createColor () {
  let color;
  for( let index = 0; index < 4; index += 1) {
    color = document.createElement('div');
    color.setAttribute('class', 'color');
    colorPalette.appendChild(color);
  }
}
createColor();

colorPalette.firstChild.setAttribute('id', 'first-color');

const createPixelBoard = document.createElement('div');
createPixelBoard.setAttribute('id', 'pixel-board');
mainTag[0].appendChild(createPixelBoard);
const pixelBoard = document.getElementById('pixel-board');

function createPixel () {
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

window.onload = function() {
  firstColor = document.getElementById('first-color');
  firstColor.setAttribute('class', 'selected');
};



