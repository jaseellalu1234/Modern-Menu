const menu = document.querySelector("#menu");
const background = document.querySelector("#background");


menu.addEventListener('click', function(){
    background.style.transform = 'translateX(200px) scale(0.8)';
    background.style.filter = 'blur(1.5px)';
})