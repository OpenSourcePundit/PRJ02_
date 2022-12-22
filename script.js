var text = document.querySelector('#input')
var plus = document.querySelector('#plus')
var minus = document.querySelector('#minus')
var redBtn = document.querySelector('#redBtn')
var greenBtn = document.querySelector('#greenBtn')
var blueBtn = document.querySelector('#blueBtn')
var output = document.querySelector('#output')
var h1Btn = document.querySelector('#h1Btn')
var h2Btn = document.querySelector('#h2Btn') 
var h3Btn = document.querySelector('#h3Btn')

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
function h1fn(){
    output.innerText = text.value;
    output.outerHTML = '<h1  id="output">'+output.innerHTML+'</h1>';
}
function h2fn(){
    output.innerText = text.value;
    output.outerHTML = '<h2 id="output">'+output.innerHTML+'</h2>';
}
function h3fn(){
    output.innerText = text.value;
    output.outerHTML = '<h3 id="output">'+output.innerHTML+'</h3>';
}


plus.addEventListener('click', plusfn);
minus.addEventListener('click',minusfn);
redBtn.addEventListener('click',redfn);
greenBtn.addEventListener('click',greenfn);
h1Btn.addEventListener('click',h1fn);
h2Btn.addEventListener('click',h2fn);
h3Btn.addEventListener('click',h3fn);
blueBtn.addEventListener('click',bluefn);