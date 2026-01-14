//Starting Value 
let count = 0;

//display element 
let display=document.getElementById("count");

//plus button
document.getElementById("plus").addEventListener("click",function(){
    count++;
    display.innerText=count;
});

//minus button
document.getElementById("minus").addEventListener("click",function(){
    count--; 
    display.innerText=count;
})