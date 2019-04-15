
var navbar = document.querySelector(".my-navbar");
var navbarTop = navbar.offsetTop;

console.log(navbarTop);


window.onscroll = function(){navbarPosition()};

function navbarPosition(){
    if(window.pageYOffset >= navbarTop){
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
}