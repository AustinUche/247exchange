const navSlide = () => {
  let navMenu = document.querySelector(".main .container .navlinks");
  let burger = document.querySelector(".main .container .burger");
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
  });
};
navSlide();

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var bnb = document.getElementById("binance");
var dogecoin = document.getElementById("dogecoin");
var litecoin = document.getElementById("litecoin");
var cardano = document.getElementById("cardano");
var tether = document.getElementById("tether");
var solana = document.getElementById("solana");
var polkadot = document.getElementById("polkadot");
var xrp = document.getElementById("xrp");
var down1 = document.getElementById("down1");
var down2 = document.getElementById("down2");
var down3 = document.getElementById("down3");
var down4 = document.getElementById("down4");
var down5 = document.getElementById("down5");
var down6 = document.getElementById("down6");
var down7 = document.getElementById("down7");
var down8 = document.getElementById("down8");
var down9 = document.getElementById("down9");
var down10 = document.getElementById("down10");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbinancecoin%2Clitecoin%2Cdogecoin%2Cethereum%2Csolana%2Ccardano%2Cripple%2Cstellar%2Ctether&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",
  method: "GET",
  header: {},
};
$.ajax(settings).done(function (response) {
  console.log(response)
  btc.innerHTML = `$${response.bitcoin.usd}`;
  eth.innerHTML = `$${response.ethereum.usd}`;
  bnb.innerHTML = `$${response.binancecoin.usd}`;
  dogecoin.innerHTML = `$${response.dogecoin.usd}`; 
  litecoin.innerHTML = `$${response.litecoin.usd}`;

  if (response.bitcoin.usd_24h_change < 0) {
    btc.style.color = "red";
    down1.style.color = "red";
  } else {
    btc.style.color = "green";
    down1.style.color = "green";
    down1.classList.remove("bxs-down-arrow");
    down1.classList.add("bxs-up-arrow");
  }

  if (response.ethereum.usd_24h_change < 0) {
    eth.style.color = "red";
    down2.style.color = "red";
  } else {
    eth.style.color = "green";
    down2.style.color = "green";
    down2.classList.remove("bxs-down-arrow");
    down2.classList.add("bxs-up-arrow");
  }

  if (response.binancecoin.usd_24h_change < 0) {
    bnb.style.color = "red";
    down3.style.color = "red";
  } else {
    bnb.style.color = "green";
    down3.style.color = "green";
    down3.classList.remove("bxs-down-arrow");
    down3.classList.add("bxs-up-arrow");
  }

  if (response.dogecoin.usd_24h_change < 0) {
    dogecoin.style.color = "red";
    down4.style.color = "red";
  } else {
    dogecoin.style.color = "green";
    down4.style.color = "green";
    down4.classList.remove("bxs-down-arrow");
    down4.classList.add("bxs-up-arrow");
  }

  if (response.litecoin.usd_24h_change < 0) {
    litecoin.style.color = "red";
    down5.style.color = "red";
  } else {
    litecoin.style.color = "green";
    down5.style.color = "green";
    down5.classList.remove("bxs-down-arrow");
    down5.classList.add("bxs-up-arrow");
  }


  
  cardano.innerHTML = `$${response.cardano.usd}`;
  tether.innerHTML = `$${response.tether.usd}`;
  solana.innerHTML = `$${response.solana.usd}`;
  polkadot.innerHTML = `$${response.stellar.usd}`;
  xrp.innerHTML = `$${response.ripple.usd}`;

  if (response.cardano.usd_24h_change < 0) {
    cardano.style.color = "red";
    down6.style.color = "red";
  } else {
    cardano.style.color = "green";
    down6.style.color = "green";
    down6.classList.remove("bxs-down-arrow");
    down6.classList.add("bxs-up-arrow");
  }

  if (response.tether.usd_24h_change < 0) {
    tether.style.color = "red";
    down7.style.color = "red";
  } else {
    tether.style.color = "green";
    down7.style.color = "green";
    down7.classList.remove("bxs-down-arrow");
    down7.classList.add("bxs-up-arrow");
  }

  if (response.solana.usd_24h_change < 0) {
    solana.style.color = "red";
    down8.style.color = "red";
  } else {
    solana.style.color = "green";
    down8.style.color = "green";
    down8.classList.remove("bxs-down-arrow");
    down8.classList.add("bxs-up-arrow");
  }

  if (response.stellar.usd_24h_change < 0) {
    polkadot.style.color = "red";
    down9.style.color = "red";
  } else {
    polkadot.style.color = "green";
    down9.style.color = "green";
    down9.classList.remove("bxs-down-arrow");
    down9.classList.add("bxs-up-arrow");
  }

  if (response.ripple.usd_24h_change < 0) {
    xrp.style.color = "red";
    down10.style.color = "red";
  } else {
    xrp.style.color = "green";
    down10.style.color = "green";
    down10.classList.remove("bxs-down-arrow");
    down10.classList.add("bxs-up-arrow");
  }

})


//Frequently asked questions
let question1 = document.querySelector(".question1")
let question2 = document.querySelector(".question2")
let question3 = document.querySelector(".question3")
let hide1 = document.querySelector("#hidden-content1")
let hide2 = document.querySelector("#hidden-content2")
let hide3 = document.querySelector("#hidden-content3")

question1.addEventListener("click", () => {
  hide1.classList.toggle("active")
  hide2.classList.remove("active")
  hide3.classList.remove("active")
})

question2.addEventListener("click", () => {
  hide2.classList.toggle("active")
  hide1.classList.remove("active")
  hide3.classList.remove("active")
})

question3.addEventListener("click", () => {
  hide3.classList.toggle("active")
  hide1.classList.remove("active")
  hide2.classList.remove("active")
})