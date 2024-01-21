let dropDown = document.querySelector(".dropdown");
let followUs = document.querySelector("#follow");

followUs.addEventListener("click", () => {
  dropDown.style.visibility = "visible";
});

let menuBar = document.querySelector("#menu");
let closeMenu = document.querySelector("#close");
if (screen.width >= 600) {
  menuBar.style.display = "block";
     menuBar.addEventListener("click", () => {
          // closeMenu.classList.toggle("active");
    menuBar.style.display = "none";
       closeMenu.style.display = "block";
          if (closeMenu.style.display == "block") {
               
            menuBar.style.display = "block";
       }
  });
}
