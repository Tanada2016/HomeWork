// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.


const dog = {
    string: 'string',
    age: 9,
    color: 'orange'
    }
  let getProp = (prop, dog) => {
    if (prop in dog) return true
    else return false
  }
  
  console.log(getProp('orange', dog));
  console.log(getProp('string', dog))
  