const navSlide = () => {
  let navMenu = document.querySelector(".header .container ul");
  let burger = document.querySelector(".header .container .burger");
  let navLinks = document.querySelectorAll(".header .container ul li");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
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