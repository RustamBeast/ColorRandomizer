const hexSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorContainer = document.querySelector('.color-container');

btn.addEventListener('click', function(){
    let hexColor = '#';
    for (let i = 0; i < 6; i++){
        hexColor += hexSymbols[getRandomSymbol()];
    }
    colorContainer.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

function getRandomSymbol(){
    return Math.floor(Math.random()*hexSymbols.length);
}