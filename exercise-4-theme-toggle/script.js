//toggle button 
let btn = document.getElementById("toggle");

//click event 
btn.addEventListener("click",function(){
    
    //body py class add/remove
    document.body.classList.toggle("dark");
})