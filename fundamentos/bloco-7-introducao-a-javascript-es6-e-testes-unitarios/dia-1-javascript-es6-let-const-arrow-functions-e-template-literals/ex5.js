const clickCount = document.querySelector("#btn");
let count = 0;

clickCount.addEventListener('click', ()=>{
    alert(`Voce clicou ${count += 1} vez(es)`);
});