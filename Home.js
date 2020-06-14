
//On body load hide elements

function hide() {

    bar.style.opacity = "0.001"
    document.getElementById("content").style.display = "none"
    document.getElementById("explore").style.display = "none"
    document.getElementById("title").style.display = "none"
    document.getElementById("description").style.display = "none"
    document.getElementById("readmore").style.display = "none"
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
        recent.classList.remove("recent")
        document.getElementById("tile").style.display = "none"
        document.getElementById("content").style.display = "none"
        document.getElementById("explore").style.display = "none"
        document.getElementById("title").style.display = "none"
    }
    if (window.pageYOffset >= 101) {

        if (window.pageYOffset < 701) {

        recent.classList.add("recent")
        document.getElementById("tile").style.display = "block"
        document.getElementById("content").style.display = "block"
        document.getElementById("explore").style.display = "block"
        document.getElementById("title").style.display = "block"
      } else {
        recent.classList.remove("recent")
      }
    } travelphase2();
}

function travelphase2 () { 
    if (window.pageYOffset >= 702) {
        recent.classList.add("phase2")



        var x = window.matchMedia("(max-width: 1070px)")

        if (x.matches) {
          document.getElementById("tile").style.marginLeft = "30%";
        } else {
          document.getElementById("tile").style.marginLeft = "0vw";
        }
       
        document.getElementById("tile").style.top = "50%"
        document.getElementById("readmore").style.display = "block"
        document.getElementById("description").style.display = "block"



      } else {
        recent.classList.remove("phase2")
        document.getElementById("tile").style.top = "-50vh"
        document.getElementById("tile").style.marginLeft = "45vw"
        document.getElementById("readmore").style.display = "none"
        document.getElementById("description").style.display = "none"
      }
}