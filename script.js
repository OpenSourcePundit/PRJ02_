var text = document.querySelector('#input')
var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var redBtn = document.querySelector('#redBtn')
var greenBtn = document.querySelector('#greenBtn')
var blueBtn = document.querySelector('#blueBtn')
var output = document.querySelector('#output')
var color = '';
var size = 20;

function refresh(){
    output.innerText = text.value;
    document.getElementById('output').style.color = color;
    document.getElementById('output').style.fontSize = size+'px';
}
function plusfn(){
    size = size+2;
    refresh();
}
function minusfn(){
    size = size-2;
    refresh();
}
function redfn(){
    color = 'red';
    refresh();
}
function greenfn(){
    color = 'green';
    refresh();
}
function bluefn(){
    color = 'blue';
    refresh();
}




plus.addEventListener('click', plusfn);
minus.addEventListener('click',minusfn);
redBtn.addEventListener('click',redfn);
greenBtn.addEventListener('click',greenfn);
blueBtn.addEventListener('click',bluefn);