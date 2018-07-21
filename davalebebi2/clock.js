let forclock = document.getElementById("forclock");

function myFunction(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
   
    forclock.textContent = hour + ":" + minutes +  ":" + seconds
    
                                                                             
}
let clock = setInterval(myFunction , 1000);
   


let pause = document.querySelector("#but1");
pause.addEventListener("click", function(){
clearInterval(clock);
});

let input=document.querySelector("input");
input.addEventListener('input' , function(el) {
    let forclock = document.getElementById("forclock");
    forclock.innerHTML=input(setTimeout,input.value);
});

let goOn=document.querySelector("#but2");
goOn.addEventListener('click' , function() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    let clock = setInterval(myFunction , 1000);
    forclock.textContent = hour + ":" + minutes +  ":" + seconds
});
myFunction();
