const navSlide = () => {
  let navMenu = document.querySelector(".container");
  let burger = document.querySelector("#burger");
  let navLinks = document.querySelectorAll(".container li");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // window.onclick(onmousedown, () => {
    //   navMenu.style.transform = "translateX(0%)";
    // });

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 4}s`;
      }
    });
    burger.classList.toggle("toggle");
  });

};
navSlide();

const followUs = document.querySelector("#follow");
followUs.addEventListener("click", () => {
  const dropDown = document.querySelector(".dropdown");
  if (dropDown.style.visibility) {
    dropDown.style.visibility = '';
  } else {
    dropDown.style.visibility = 'visible'
  }
});