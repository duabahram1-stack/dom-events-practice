let form = document.getElementById("form");

let nameInput = document.getElementById("name");

let msg = document.getElementById("msg");

form.addEventListener("submit",function (e){
    e.preventDefault(); // page reload stop 

    if(nameInput.value === ""){
        msg.innerText = "Error: Name required";
        msg.style.color = "red";
    }else{
        msg.innerText = "Form Submitted";
        msg.style.color = "green";
    }
});