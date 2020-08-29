
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
}

function expandTile1() {

  var visibility = document.getElementById("mainCard").style.display    

  //console.log(visibility)

  if (visibility === "") {
    visibility = "none"
  }

  //console.log(visibility)
  
  switch (visibility) {

    default: 
      alert("default case triggered")

    case "none":

      document.getElementById("mainCard").style.display = "block"
      document.getElementById("tile2").style.display = "none"
      document.getElementById("tile3").style.display = "none"
      document.getElementById("tile4").style.display = "none"
      document.getElementById("tile5").style.display = "none"
      document.getElementById("tile6").style.display = "none"
      document.getElementById("tile7").style.display = "none"
      document.getElementById("tile8").style.display = "none"
      document.getElementById("tile9").style.display = "none"    
      break;

    case "block":

      document.getElementById("mainCard").style.display = "none"
      document.getElementById("tile2").style.display = "block"
      document.getElementById("tile3").style.display = "block"
      document.getElementById("tile4").style.display = "block"
      document.getElementById("tile5").style.display = "block"
      document.getElementById("tile6").style.display = "block"
      document.getElementById("tile7").style.display = "block"
      document.getElementById("tile8").style.display = "block"
      document.getElementById("tile9").style.display = "block"
      break;

  }

}