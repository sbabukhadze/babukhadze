"use strict";

let btn = document.querySelector(".but");
// let table = document.querySelector("colors");

let colorElements = document.querySelectorAll(".container .color");
let colorBoxes = {};



btn.addEventListener('click', function () {
  setColorsToBoxes();
});




function setColorsToBoxes() {

  let totalColors = Object.keys(colorBoxes).length;

  if (colorBoxes && totalColors == 3) {
  
    for (let i = 1; i <= totalColors; i++) {

      //print or set some color by its index :) 

      document.getElementById("color_" + i).style.backgroundColor = colorBoxes[i];


    }
  } else {
    alert('Not Enough Colors');
  }

}

colorElements.forEach(colorElement => {

  colorElement.addEventListener('click', function (e) {

    let colorOfElement = window.getComputedStyle(this, null).getPropertyValue("background-color");
    let indexOfCullomn = this.parentNode.id;

    colorBoxes[indexOfCullomn] = colorOfElement;
  });
});
