class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card {
  constructor(name, cost, power, res){
    super(name, cost);
    this.power = power;
    this.res = res;
  }
  attack(target){
    //reduce target res by power
    if(target instanceof Unit) {
      target.res = (target.res - this.power)
      console.log(`El ${this.name} a atacado a ${target.name} ahora la resistencia de ${target.name} es ${target.res}`);
    } else {
      throw new Error("Target must be a unit!!");
    }
  }
}

class Efect extends Card {
  constructor(name, cost, text, stat, magnitude){
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  applyEffect(target){
    //si this.stat = Resiliencia => target.res = target.res ${this.magnitude}
    //else target.power = target.power ${this.magnitude}
    if(this.stat === "Resiliencia") {
      let signo = this.magnitude.charAt(0);
      let num = parseFloat(this.magnitude.substring(1));
      if(signo === "+"){
        target.res = target.res+num;
        console.log(`La res del ${target.name} a aumentado a ${target.res}`);
      }else {
        target.res = target.res-num;
        console.log(`La res del ${target.name} a disminuido a ${target.res}`);
      }
    } else {
      let signo = this.magnitude.charAt(0);
      let num = parseFloat(this.magnitude.substring(1));
      if(signo === "+") {
        target.power = target.power + num;
        console.log(`El poder del ${target.name} a aumentado a ${target.power}`);
      } else {
        target.power = target.power - num;
        console.log(`El poder del ${target.name} a disminuido a ${target.power}`);
      }
    }
  }
}

const ninjaRojo = new Unit("Ninja Cinturón Rojo", 3, 3, 4);
const ninjaNegro = new Unit("Ninja Cinturón Negro", 4, 5, 4);

const efect1 = new Efect("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", "+3");
const efect2 = new Efect("Rechazo de promesa no manejado", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", "-2");
const efect3 = new Efect("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "Poder", "+2");



//jugador 1, juega con ninjaRojo
//jugador 1, aplica algoritmo dificil a ninjaRojo
console.log(`Jugador 1 invoca a: ${ninjaRojo.name}`);

efect1.applyEffect(ninjaRojo);

//jugador 2, juega con ninjaNegro
//jugador 2, juega rechazo de promesa no manejado en ninjaRojo

console.log(`Jugador 2 invoca a: ${ninjaNegro.name}`);
efect2.applyEffect(ninjaRojo);

//jugador1, juega programación en pareja en ninjaRojo
efect3.applyEffect(ninjaRojo);

//jugador1, ataca ninjaNegro c
ninjaRojo.attack(ninjaNegro);