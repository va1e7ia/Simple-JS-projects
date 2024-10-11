const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  button = document.querySelectorAll(".button");

let imageIndex = 1,
  interValid;

const autoSlide = () => {
  interValid = setInterval(() => slideImage(++imageIndex), 2000);
};

autoSlide();

const slideImage = () => {
  imageIndex =
    imageIndex === images.length
      ? 0
      : imageIndex < 0
      ? images.length - 1
      : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(interValid);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};

button.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(interValid));
wrapper.addEventListener("mouseleave", autoSlide);
