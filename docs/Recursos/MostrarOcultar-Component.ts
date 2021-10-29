import { Component } from "@angular/core";

@Component({
    selector: 'mostraroculto',
    templateUrl: './MostrarOcultar.html'
})

export class mostrar{

mostrar: boolean=false;
mensaje: String="este es el mensaje"
mensaje_enlace: String = "Pulsa aqui"

fmostrar(){
    if (this.mostrar) {
        this.mostrar = false;
        this.mensaje_enlace = 'mostrar'
    } else {
        this.mostrar = true;
        this.mensaje_enlace = 'ocultar'
    }
}

}