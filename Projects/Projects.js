
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



      var mainCard = document.getElementById("mainCard") 
      var tiletwo = document.getElementById("tile2")
      var tilethree = document.getElementById("tile3")
      var tilefour = document.getElementById("tile4")
      var tilefive = document.getElementById("tile5")
      var tilesix = document.getElementById("tile6")
      var tileseven = document.getElementById("tile7")
      var tileeight = document.getElementById("tile8")
      var tilenine = document.getElementById("tile9")




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
    
    mainCard.style.display = "block"
    tiletwo.style.display = "none"
    tilethree.style.display = "none"
    tilefour.style.display = "none"
    tilefive.style.display = "none"
    tilesix.style.display = "none"
    tileseven.style.display = "none"
    tileeight.style.display = "none"
    tilenine.style.display = "none"    
    break;

    case "block":

    mainCard.style.display = "none"
    tiletwo.style.display = "block"
    tilethree.style.display = "block"
    tilefour.style.display = "block"
    tilefive.style.display = "block"
    tilesix.style.display = "block"
    tileseven.style.display = "block"
    tileeight.style.display = "block"
    tilenine.style.display = "block" 
    break;

  }

}