//alert("probando");


//================== FUNCTIÓN PARA OBTENER EL ELEMENTO ================

function obtenerElemento(elemento) {
    const elementoSeleccionado = document.querySelector(elemento);
    if (elementoSeleccionado) {
        return elementoSeleccionado;
    } else {
        throw new Error(`No existe el elemento que quieres seleccionar`);
    }
}

//================== CLASE CONSTRUCTORA================

class Contar {
    constructor(elemento, value) {
        this.elemento = elemento,
            this.value = value;
        this.valueDOM = elemento.querySelector(".value");
        this.valueDOM.textContent = value;

        //Seleccionamos los botones
        this.aumentarBtn = elemento.querySelector(".increase");
        this.decrementarBtn = elemento.querySelector(".decrease");
        this.resetearBtn = elemento.querySelector(".reset");

        //Método bind
        const aumentar = this.increase.bind(this);
        const disminuir = this.decrease.bind(this);
        const resetear = this.reset.bind(this);

        //Events listeners
        this.aumentarBtn.addEventListener("click", aumentar);
        this.decrementarBtn.addEventListener("click", disminuir);
        this.resetearBtn.addEventListener("click", resetear)


    }


    //Métodos de la clase
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }

    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }


}

// ===================  OBJETOS(los dos contadores) =================================


const contador1 = new Contar(obtenerElemento(".first-counter"), 100);
const contador2 = new Contar(obtenerElemento(".second-counter"), 200);