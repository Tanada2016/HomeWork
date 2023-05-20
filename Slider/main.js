const slideNameElements = document.querySelectorAll(
    ".slider-header .slide-name"
  );
  const cardElements = document.querySelectorAll(".slider__left .card");
  const dotElements = document.querySelectorAll(".slider-dots .dot");
  const buttonPrev = document.querySelector(".slider-controls .prev");
  const buttonNext = document.querySelector(".slider-controls .next");
  const imgElements = document
    .querySelector(".slider-right")
    .querySelectorAll(".img");
  
  const changeSlide = (slide) => {
    for (let i = 0; i < cardElements.length; i++) {
      const isActive = i === slide - 1;
      cardElements[i].classList.toggle("hidden", !isActive);
      imgElements[i].classList.toggle("hidden", !isActive);
      slideNameElements[i].classList.toggle("active", isActive);
      dotElements[i].classList.toggle("active", isActive);
    }
  };
  
  const getCurrentSlide = () => {
    for (let i = 0; i < cardElements.length; i++) {
      if (!cardElements[i].classList.contains("hidden")) {
        return i + 1;
      }
    }
  };
  
  const getPrevSlide = (slide) => (slide === 1 ? cardElements.length : slide - 1);
  const getNextSlide = (slide) => (slide === cardElements.length ? 1 : slide + 1);
  
  slideNameElements.forEach((element, i) => {
    element.addEventListener("click", () => changeSlide(i + 1));
  });
  
  dotElements.forEach((element, i) => {
    element.addEventListener("click", () => changeSlide(i + 1));
  });
  
  buttonPrev.addEventListener("click", () =>
    changeSlide(getPrevSlide(getCurrentSlide()))
  );
  
  buttonNext.addEventListener("click", () =>
    changeSlide(getNextSlide(getCurrentSlide()))
  );
  