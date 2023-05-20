// Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.


const myButton = document.getElementById("myButton");
const myIcon = document.getElementById("myIcon");

let isFilled = false;

myButton.addEventListener("click", () => {
  if (isFilled) {
    myIcon.classList.remove("fill");
    myIcon.classList.replace(
      "bi-arrow-down-left-circle-fill",
      "bi-arrow-down-left-circle"
    );
    isFilled = false;
  } else {
    myIcon.classList.add("fill");
    myIcon.classList.replace(
      "bi-arrow-down-left-circle",
      "bi-arrow-down-left-circle-fill"
    );
    isFilled = true;
  }
});
