//textarea
let text = document.getElementById("text");

//counter
let count = document.getElementById("count");

//typing event 
text.addEventListener("input",function (){

    //kitny characters likhy gaye
    count.innerText = text.value.length;
});