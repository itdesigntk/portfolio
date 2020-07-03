
//On body load hide elements

function hide() {

    bar.style.opacity = "0.001"

    sortorder ();
}

function sortorder () {

  var photos = 5

  var lasttile = "tile" + photos
  var thirdtile = "tile" + (photos - (photos - 3)) 
  var secondtile = "tile" + (photos - (photos - 2)) 
  var firsttile = "tile" + (photos - (photos - 1)) 


  var two = "'https://i.ibb.co/23zPmfP/IMG-0781.jpg'"
  var one = "'https://i.ibb.co/23zPmfP/IMG-0781.jpg'"
  var zero = "'https://i.ibb.co/rp9w6Gf/70997517-1181052828748245-4085072603278330813-n.jpg'"
    
  document.getElementById(firsttile).style.backgroundImage = "url("+first+")";

  document.getElementById(lasttile).style.backgroundImage = "url("+zero+")";

  // I have no idea what im doing
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
  
}