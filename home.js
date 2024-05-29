var themebtn = document.querySelector(".themebtn");
var body = document.querySelector("body");
var navmenubutton = document.querySelectorAll(".navmenubutton");

themebtn.addEventListener("click", function(){
    body.style.backgroundColor = '#D9D9D9';
    navmenubutton.style.color = 'black';
});