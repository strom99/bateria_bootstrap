document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    const sonido = document.querySelector("audio[data-boton=" + boton +"]");
    sonido.currentTime = 0;
    if(!sonido) return;
    sonido.play();
});


    document.addEventListener("keypress", function(event) {
        
        let key = event.key;
        if (key = 'l'){
            document.getElementById('bombo').play();
        }
        else return document.getElementById('bombo').muted(true);
        
console.log(event)


    })


