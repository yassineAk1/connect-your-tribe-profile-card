const buttons = document.querySelectorAll('button');
const backgroundImg = document.querySelector('.background');
const profileImg = document.querySelector('.profile');


profileImg.addEventListener('click', () => {
  backgroundImg.src = 'img2.jpg';
})

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    backgroundImg.src = `foto${index + 1}.svg`;
  });
});