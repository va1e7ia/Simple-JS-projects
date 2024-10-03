const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = ["img/rock.png"];
    result.textContent = "...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image.classList.remove("active");
    });

    gameContainer.classList.add("start");

    let time = setTimeout(() => {
      gameContainer.classList.remove("start");
      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);

      let cpuImages = ["img/rock.png", "img/scissors.png", "img/paper.png"];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "S", "P"][randomNumber];
      let userValue = ["R", "S", "P"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "You",
        SR: "Cpu",
        SS: "Draw",
        SP: "You",
        PR: "You",
        PS: "Cpu",
        PP: "Draw",
      };

      let outComeValue = outcomes[userValue + cpuValue];
      result.textContent =
        userValue === cpuValue ? "Draw" : `${outComeValue} Won!`;
    }, 2500);
  });
});
