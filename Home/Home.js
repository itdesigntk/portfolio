
//On body load hide elements

function hide() {

    bar.style.opacity = "0.001"
    document.getElementById("tile").style.marginTop = "block"

    
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


var recent = document.getElementById("tile");

function fadein () { 
    if (window.pageYOffset == 0) {
        bar.style.opacity = "0.001"
        document.getElementById("tile").style.display = "none"
        document.getElementById("title").style.display = "none"
    }
    } 



//3 Display Projects - Plug in and works

var imgback = document.getElementById("recent")
var select = document.getElementById("selectorline")

function featured() {

  imgback.style.backgroundImage = "url(https://i.ibb.co/RyvcDsm/weather-clear.png)"
  select.style.left = "25.45vw"
  select.style.width = "85px"

}
function mostrecent() {

  imgback.style.backgroundImage = "url(https://i.ibb.co/8DGQyFr/IMG-0798.jpg)"
  select.style.left = "50.4vw"
  select.style.width = "65px"

}
function upcoming() {

  imgback.style.backgroundImage = "url(https://i.ibb.co/Pgy5q8z/IMG-0824.jpg)"
  select.style.left = "75.45vw"
  select.style.width = "100px"

}