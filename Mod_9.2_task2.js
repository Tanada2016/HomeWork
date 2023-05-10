// Задание 2.

// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// JSON:

// {
//  "list": [
//   {
//    "name": "Petr",
//    "age": "20",
//    "prof": "mechanic"
//   },
//   {
//    "name": "Vova",
//    "age": "60",
//    "prof": "pilot"
//   }
//  ]
// }
// JS-объект:

// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }

const textStr =`{
    "list": [
      {
       "name": "Petr",
       "age": "20",
       "prof": "mechanic"
      },
      {
       "name": "Vova",
       "age": "60",
       "prof": "pilot"
      }
     ]
     }`;  
      
    const data = JSON.parse(textStr);
    const list = data.list;  
      
    var datta = {
       result:{  
    name: list[0].name,
    age: list[0].age,
    prof: list[0].prof,
    },
       result2:{
    name: list[1].name,
    age: list[1].age,
    prof: list[1].prof,
    }
        
    };
    
    console.log("list:", Object.values(datta))