document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    const sonido = document.querySelector("audio[data-boton=" + boton +"]");
    sonido.currentTime = 0;
    if(!sonido) return;
    sonido.play();
    console.log(boton);
});

    document.addEventListener('onkeypress', function (event){
    
<<<<<<< HEAD
} 
=======

        
    })
>>>>>>> 3e1bd3eed6511de0a50a2a2a01aeae70670eea85
