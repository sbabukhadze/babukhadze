"use strict";
window.onload = function () {


let tag = document.createElement("ul"); //create tag  ul
tag.classList.add("container"); // class for ul
let node = document.createTextNode("This is how to generate HTML"); //text node for ul
tag.appendChild(node); //wright text inside ul
let element = document.getElementById("div1"); 
element.appendChild(tag);

// function myFunction() {
//     document.getElementsByTagName("ul").setAttribute("class", "democlass")

for  (let i = 0; i < 5; i++) {   //
let list = document.createElement("li"); //create tag li for list
let node1 = document.createTextNode("this is list");
list.appendChild(node1);  

tag.appendChild(list); // this is to connect li to ul
}
}