let num;
num = prompt("Введите число до 1000");
let num2 = 'Сложное число';
let num1 = 'Простое число';
let num3 = 'Сказали же, меньше 1000';
function checkNumb(num) {
  for (i = 2; i < num; i++){
    if (num % i === 0) {
     return num2 }
    else if (num > 1000) {
      return num3
    }
       else {return num1}
  };
}
  console.log(checkNumb(num));