let input = document.getElementById("inputbutton");
let para = document.getElementById("output");
input.addEventListener("input",function(){
para.textContent=input.value;
});