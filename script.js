let boton = document.getElementById("icono");
let fl_ds_mdfr = document.getElementById("enlaces");

let contador = 0;

boton.addEventListener("click", function(){
    if (contador ==0){
        fl_ds_mdfr.className = ("enlaces dos");
        contador = 1;
    }else{
        fl_ds_mdfr.classList.remove("dos")
        fl_ds_mdfr.className = ("enlaces uno");
        contador = 0;
    }
})