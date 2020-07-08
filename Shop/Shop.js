//On body load hide elements

function hide() {
    loader.style.display = "none"
    bar.style.opacity = "0.001"
}

function validated () {

    location.href = "https://tallkanvasofficial.onuniverse.com/store";
 
}

window.onscroll = function() {myFunction()};

var loader = document.getElementById("loader22");
var navbar = document.getElementById("navbar");
var bar = document.getElementById("bar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 21) {
    navbar.classList.add("sticky")
    bar.classList.add("shadow")
    bar.style.opacity = "1"
  } else {
    navbar.classList.remove("sticky");
    bar.classList.remove("shadow");
    bar.style.opacity = "0.001"
  }
  if (window.pageYOffset == 0) {
    bar.style.opacity = "0.001"
  }
}

function chooseon() {
  document.getElementById("overlaychoose").style.display = "block"
  document.getElementById("choosetemplate").style.display = "block"
  document.getElementById("Card1").style.display = "block"
  document.getElementById("Card2").style.display = "block"
  document.getElementById("Card3").style.display = "block"
  document.getElementById("Card4").style.display = "block"
  loader.style.display = "none"
  document.getElementById("topic").style.display = "block"

}
function chooseon22 () {
  loader.style.display = "block"
  document.getElementById("topic").style.display = "none"

  setTimeout(getLocation, 1000);
}

function chooseoff() {
  document.getElementById("Card1").style.display = "none"
  document.getElementById("Card2").style.display = "none"
  document.getElementById("Card3").style.display = "none"
  document.getElementById("Card4").style.display = "none"
  document.getElementById("overlaychoose").style.display = "none"
  document.getElementById("choosetemplate").style.display = "none"
}

var x = document.getElementById("hello");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  	localStorage.setItem("lat", position.coords.latitude)
	localStorage.setItem("lon", position.coords.longitude)

  console.log(localStorage.getItem("lat"))
  
  validation();
  chooseon();
}	

function validation () {

  localStorage.setItem("validate", "yes")

  if (localStorage.getItem("lat") > 45.123043) {
    localStorage.setItem("validate", "no")
  }
  if (localStorage.getItem("lat") < 44.903352) {
    localStorage.setItem("validate", "no")
  }
  if (localStorage.getItem("lon") < -93.217534) {
    localStorage.setItem("validate", "no")
  }
  if (localStorage.getItem("lon") > -92.982014) {
    localStorage.setItem("validate", "no")
  }
  showtrue();
  console.log(localStorage.getItem("validate"))
}

function showtrue () {

  if (localStorage.getItem("validate") == "yes") {

    alert("Yay! You are within the free shipping zone. No shipping fees will apply.")

}
if (localStorage.getItem("validate") == "no") {

  alert("Oh no! Your residence is out of the delivery zone. No worries! a small shipping fee will be applied at checkout.")

}
}