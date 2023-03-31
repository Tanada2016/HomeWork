// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


let dog = {
    age: 9,
    color: 'orange'
   }

const printObj = dog => {
  for (let key in dog)
    {
     if (dog.hasOwnProperty(key) )
      {console.log(key, dog[key])}
    }
  
}
printObj(dog)