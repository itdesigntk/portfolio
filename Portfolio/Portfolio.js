
//On body load hide elements

function hide() {

    bar.style.opacity = "0.001"
}



window.onscroll = function() {myFunction()};

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
  fadein();
}