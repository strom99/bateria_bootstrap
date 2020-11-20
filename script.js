document.addEventListener('click', function(event){
    let boton = event.target.dataset.boton;
    let sonido = document.querySelector("audio[data-boton=" + boton +"]");
    let pad = document.querySelector("button[data-boton=" +boton +"]");
    pad.classList.add("hited"); 
    sonido.currentTime = 0;
    sonido.play();
});
document.onkeydown = function() {
    document.getElementById('bombo').play();
} 
document.addEventListener('click', myFunction = function(event){
    let boton = event.target.dataset.boton;
    let pad = document.querySelector("button[data-boton=" +boton +"]");
    pad.classList.remove("hited");
});

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

