document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    const sonido = document.querySelector("audio[data-boton=" + boton +"]");
    sonido.currentTime = 0;
    if(!sonido) return;
    sonido.play();
    console.log(boton);
});

    document.addEventListener('onkeypress', function (event){
    

        
    })
