const myInterval = setInterval(setColor, 3000);

function setColor() {
    let background = document.querySelector('.background');
    let arrayColor = ['red','yellow','pink','gray','orange','darkblue'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
}
function randomColor(array){
    return Math.floor(Math.random()*array.length);
}