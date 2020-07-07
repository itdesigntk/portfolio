//On body load hide elements

function hide() {
    visit.style.opacity = "0.5"
    visit.style.cursor = "not-allowed"
    visit.href = "nne"
    bar.style.opacity = "0.001"
}



window.onscroll = function() {myFunction()};

var visit = document.getElementById("visit");
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
}

function chooseoff() {
  document.getElementById("overlaychoose").style.display = "none"
  document.getElementById("choosetemplate").style.display = "none"
}

