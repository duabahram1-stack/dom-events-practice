//button
let btn = document.getElementById("btn");
//click evnt 
btn.addEventListener("click",function(){
    //buttom disable 
    btn.disabled = true;

    //text change
    btn.innerText = "Submitted";
});