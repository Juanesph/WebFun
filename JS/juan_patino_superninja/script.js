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

class Sensei extends Ninja {
  constructor(nombre, salud, velocidad, fuerza, sabiduria){
    super(nombre, salud, velocidad, fuerza);
    this.nombre = nombre;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    this.sabiduria = 10;    
  }

  speakWisdom(){
    console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    this.drinkSake();
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();
ninja1.showStats();

const sensei1 = new Sensei("Master Splinter");
sensei1.sayName();
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();