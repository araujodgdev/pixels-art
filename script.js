const  createColorPalette = document.createElement('div');
createColorPalette.setAttribute('id', 'color-palette');
const mainTag = document.getElementById('principal');
mainTag.appendChild(createColorPalette);
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

colorPalette.firstChild.setAttribute('id', 'firstColor');

