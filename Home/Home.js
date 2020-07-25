
//On body load hide elements

function hide() {

    bar.style.opacity = "0.001"
    document.getElementById("tile").style.marginTop = "block"
    document.getElementById("descriptionrecent").style.display = "none"
    document.getElementById("descriptionupcoming").style.display = "none"

    
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

  localStorage.setItem("projectnameclick", "featured")
  imgback.style.backgroundImage = "url(https://i.ibb.co/RyvcDsm/weather-clear.png)"
  select.style.left = "25.45vw"
  select.style.width = "85px"
  document.getElementById("descriptionfeatured").style.display = "block"
  document.getElementById("descriptionrecent").style.display = "none"
  document.getElementById("descriptionupcoming").style.display = "none"

}
function mostrecent() {

  localStorage.setItem("projectnameclick", "recent")
  imgback.style.backgroundImage = "url(https://i.ibb.co/rQ5FTd8/IMG-0781-burned.png)"
  select.style.left = "50.4vw"
  select.style.width = "65px"
  document.getElementById("descriptionrecent").style.display = "block"
  document.getElementById("descriptionupcoming").style.display = "none"
  document.getElementById("descriptionfeatured").style.display = "none"

}
function upcoming() {

  localStorage.setItem("projectnameclick", "upcoming")
  imgback.style.backgroundImage = "url(https://www.signaturehardware.com/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/3/1/313317-three-tier-teak-towel-shelf_1.jpg)"
  select.style.left = "75.45vw"
  select.style.width = "100px"
  document.getElementById("descriptionupcoming").style.display = "block"
  document.getElementById("descriptionfeatured").style.display = "none"
  document.getElementById("descriptionrecent").style.display = "none"

}