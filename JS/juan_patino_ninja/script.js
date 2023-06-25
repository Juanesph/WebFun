class Ninja {
  constructor(nombre, salud, velocidad, fuerza){
    this.nombre = nombre;
    this.salud = "";
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName(){
    console.log(`My name is: ${this.nombre}`);
  }

  showStats(){
    console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
  }

  drinkSake(){
    this.salud += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
ninja1.showStats();
