// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

let objNull = () => {
    return (Object.create(null))
    }
   console.log(objNull());