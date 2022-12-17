var text = document.querySelector('#input')
var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var redBtn = document.querySelector('#redBtn')
var greenBtn = document.querySelector('#greenBtn')
var blueBtn = document.querySelector('#blueBtn')
var output = document.querySelector('#output')

function refresh(){
    output.innerText = text;
    
}
function plus(){
    
    refresh()
}



plus.addEventListener('click', plus);
minus.addEventListener('click',minus);
redBtn.addEventListener('click', red);
greenBtn.addEventListener('click',green);
blueBtn.addEventListener('click',blue);