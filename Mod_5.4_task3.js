// ; Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".						
						
// ; // Сначала   Array.from()для превращения строки в массив, затем Array.prototype.reverse()для преобразования массива, а затем Array.prototype.join()для преобразования его обратно в строку.						
// ; // const reverse = str => Array.from(str).reverse().join('');			
						
// ; // Метод split () разбивает (делит) строку на две или более подстроки в зависимости от разделителя. Разделитель может быть одним символом, другой строкой или регулярным выражением.						
// ; // После разделения строки на несколько подстрок метод split () помещает их в массив и возвращает его. Он не вносит никаких изменений в исходную строку.						
// ; // reverse-поворачивает, а join превращает опять в строку						
let string = 'Hello';
let result;
result = string.split('').reverse().join('');
console.log(result);