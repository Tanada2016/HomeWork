// Задание 5.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).



const pageInput = document.getElementById("pageInput");
const limitInput = document.getElementById("limitInput");
const imagesDiv = document.getElementById("images");
let lastRequestPage = localStorage.getItem("page");
let lastRequestLimit = localStorage.getItem("limit");

// Если есть данные о последнем успешно выполненном запросе, то используем их
if (lastRequestPage && lastRequestLimit) {
  pageInput.value = lastRequestPage;
  limitInput.value = lastRequestLimit;
  makeRequest();
}

function makeRequest() {
  const page = parseInt(pageInput.value);
  const limit = parseInt(limitInput.value);

  // Проверяем, что оба числа попадают в диапазон от 1 до 10 и являются числами
  if (isNaN(page) || page < 1 || page > 10) {
    imagesDiv.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    return;
  }

  if (isNaN(limit) || limit < 1 || limit > 10) {
    imagesDiv.innerHTML = "Лимит вне диапазона от 1 до 10";
    return;
  }

  // Сохраняем данные запроса в localStorage
  localStorage.setItem("page", page);
  localStorage.setItem("limit", limit);

  // Отправляем запрос
  fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
      let images = "";
      data.forEach((imageData) => {
        const image = `<img src="${imageData.download_url}" alt="Image">`;
        images += image;
      });
      imagesDiv.innerHTML = images;
    })
    .catch((error) => console.error(error));
}
