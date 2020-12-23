//alert("probando");


//================== FUNCTIÓN PARA OBTENER EL ELEMENTO ================

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element
    } else {
        throw new Error(`Porfavor revisa "${selection}", este elemento no existe en el dom`)
    }
}


//================== FUNCTIÓN CONSTRUCTORA================

function Counter(element, value) {

    this.counter = element;
    this.value = value;
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    //Seleccionamos los botones
    this.resetBtn = element.querySelector(".reset");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");

    // Método bind
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // Event listeners
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);


}


// ===================  PROTOTIPOS =================================

Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
}

Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
}




// ===================  OBJETOS(los dos contadores) =================================

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200)
















