// 9.3.Задание 3

// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
// Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
// После получения данных вывести ниже картинки на экран.


const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");
const imagesContainer = document.getElementById("images");
const errorText = document.getElementById("errorText");

submitButton.addEventListener("click", () => {
  const value = parseInt(numberInput.value);

  if (isNaN(value) || value < 1 || value > 10) {
    errorText.textContent = "Число вне диапазона от 1 до 10";
    imagesContainer.innerHTML = "";
  } else {
    errorText.textContent = "";
    imagesContainer.innerHTML = "";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://picsum.photos/v2/list?limit=${value}`);
    xhr.onload = () => {
      const response = JSON.parse(xhr.response);
      response.forEach((item) => {
        const img = document.createElement("img");
        img.src = item.download_url;
        imagesContainer.appendChild(img);
      });
    };
    xhr.send();
  }
});