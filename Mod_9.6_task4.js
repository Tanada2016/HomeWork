// Задание 9.6.4

// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

// При клике на кнопку происходит следующее:

// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
// Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", async () => {
  // Получаем значения из input'ов и проверяем их на соответствие условиям
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  if (
    isNaN(value1) ||
    isNaN(value2) ||
    value1 < 100 ||
    value1 > 300 ||
    value2 < 100 ||
    value2 > 300
  ) {
    resultDiv.textContent = "Одно из чисел вне диапазона от 100 до 300";
    return;
  }

  // Формируем URL для запроса и отправляем его
  const url = `https://picsum.photos/${value1}/${value2}`;
  const response = await fetch(url);

  // Создаем элемент изображения и добавляем его в div с результатами
  const img = document.createElement("img");
  img.src = response.url;
  resultDiv.innerHTML = "";
  resultDiv.appendChild(img);
});