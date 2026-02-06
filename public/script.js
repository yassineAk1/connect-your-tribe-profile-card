const buttons = document.querySelectorAll("button");
const backgroundImg = document.querySelector(".background");
const profileImg = document.querySelector(".profile");

fetch("https://fdnd.directus.app/items/person/278")
  .then((res) => res.json())
  .then((result) => {
    const personData = result.data;
    personData.custom = JSON.parse(personData.custom);

    const images = [
      personData.custom.gaming,
      personData.custom.reizen,
      personData.custom.sporten,
      personData.custom.kungfu,
    ];

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        backgroundImg.src = images[index];
      });

      profileImg.addEventListener("click", () => {
        backgroundImg.src = personData.custom.background;
      });
    });
  });
