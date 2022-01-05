const blocoBack = document.querySelector('#back')
const fundo = document.querySelector('#fundo')
const paragrafo = document.querySelector('#texto')
const blocoText = document.querySelector('#text') 
const blocoSize = document.querySelector('#size')
const blocoSpace = document.getElementById('space')
const blocoFont = document.querySelector('#font')
const button = document.getElementById('add-button')
const list = document.getElementById('infos-list');

blocoBack.addEventListener("change", function(){
    fundo.style.backgroundColor = blocoBack.value
});

blocoText.addEventListener("change", function(){
    paragrafo.style.color = blocoText.value
});

blocoSize.addEventListener("change", function(){
    paragrafo.style.fontSize = blocoSize.value
});

blocoSpace.addEventListener("change", function(){
    paragrafo.style.lineHeight = blocoSpace.value
});

blocoFont.addEventListener("change", function(){
    paragrafo.style.fontFamily = blocoFont.value
});
