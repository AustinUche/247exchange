const navSlide = () => {
  let navMenu = document.querySelector(".main .container .navlinks");
  let burger = document.querySelector(".main .container .right .burger");
  let navLinks = document.querySelectorAll(".main .container .navlinks ul li");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 17 + 1
        }s`;
      }
    });
    burger.classList.toggle("toggle");
    burger.classList.toggle("change");
  });
};
navSlide();

const btc = document.getElementById("bitcoin");
// var btc = document.getElementById("bitcoin");
// var btc = document.getElementById("bitcoin");
// var btc = document.getElementById("bitcoin");
// var btc = document.getElementById("bitcoin");

let ws = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");
ws.onmessage = (event) => {
  console.log(event.data);
};


btc.innerHTML = "Hello world"