var themebtn = document.querySelector(".themebtn");
var body = document.querySelector("body");
// var body = document.body;
var leftnavtext = document.querySelector(".leftnavtext");
var flag = 0;

themebtn.addEventListener("click", ()=>{
    body.classList.toggle("dark-mode");
    console.log("hi");
});


// themebtn.addEventListener("click", function(){
//     if(flag == 0)
//         {
//             body.style.transition = '2s';
//             console.log("hi");
//             flag = 1;
//         }
//     else if (flag == 1)
//         {
//             body.style.backgroundColor = 'black';
//             leftnavtext.style.color = "aliceblue";
//             body.style.transition = '2s';
//             flag = 0;
//         }
// });