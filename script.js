document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    const sonido = document.querySelector("audio[data-boton=" + boton +"]");
    sonido.play();
    sonido.currentTime = 0;
    console.log(boton);
});

document.onkeydown = function() {
    document.getElementById('bombo').play();
    
} 
