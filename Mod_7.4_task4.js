// Задание 4.

// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


function electricalDevice (name, manufacturer, power, turn ){
    this.name = name,
    this.turn = function(){
      console.log(`The ${this.name} is switched ${turn}.`)
    }
    this.power = function(){
      console.log(`Power Consumption of the ${this.name} is ${power} W.`)
    }
    this.manufacturer = function(){      
      console.log(`The ${name} is manufacturied by ${manufacturer}.`)
    }
  }
  
  const iron = new electricalDevice('iron', 'Tefal');
  const power  = new electricalDevice('iron', '', 650);
  const turn = new electricalDevice('iron', '', '', 'on');
  iron.manufacturer();
  power.power();
  turn.turn();
  
  
  
  function PC (name, manufacturer, power){
    this.name= name,
    this.power = power,
    this.manufacturer = function(){console.log(`The ${this.name} is manufacturied by ${manufacturer}. 
   '. Power is ${this.power} W.`)}
  }
  
  const comp = new PC('computer', 'IBM', 220);
  
  comp.manufacturer();
  

//   class Device { constructor (DevName, power)
//     {
// this.DevName = DevName,
// this.power = power
// };};     
// const sumDev =() => {
// if (Device.power === true ) {
// const sum = Iron.power + Lamp.power
// return console.log(sum);}
// return console.log('Один или оба не включены')
// }

// const Iron = new Device('iron', 1000);
// const Lamp = new Device('lamp', 800);
// console.log(Lamp);
// console.log(Iron);
// sumDev(Iron.power, Lamp.power);