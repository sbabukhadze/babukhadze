"use strict";

let btnAdd = document.querySelector(".but1");
let btnRemove = document.querySelector(".but2");
let lessonday = new Date(2018, 3, 28); //because when I add new day, it (first day) has to be 30 Apirl 2018.
let names = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10", "n11", "n12", "n13", "n14", "n15"]; // array of scores

// let btnUpdate = document.querySelector(".but3");


btnAdd.addEventListener('click', function () { //to call functions after add  day button

  addDays();
  totalDays();
  missedLessons();

});

btnRemove.addEventListener('click', function () { //to call functions after remove button,  but in some cases it doesn't work

  removeLastDay();
  // totalDays();

});


// ****prompt******
//this is even for scores,  for every student in any  lesson  day

function addPromptEvent(element) {
  element.addEventListener('click', function () {
    let input = parseInt(prompt("Enter Score", ""));
    if (isNaN(input)) {    //if it  is a  number or  not, if it's not  a number, then alert  will ask to enter A NUMBER!!
      alert("Enter a Number!");
    }
    //I have used if statements for cases when "input" is less then  0, more then 5 or  between  them.  at  the  same  time  i set  backgound style,  which is different from  default

    else if (input < 0 || input == 0) {
      input = 0;
      element.style.backgroundColor="red";
      element.innerHTML=input;
      
    }
    else if (input > 5) {
      input = 5;
      element.style.backgroundColor="green";
      element.innerHTML=input;

    }
    else {
      element.style.backgroundColor="green";
      element.innerHTML=input;

    }

    
    missedLessons();
  });
}


// ***** add new  days ******

function addDays() {
  let scores = document.getElementsByClassName("scores-container")[0]; 
  let scoresInside = document.createElement("div");   //create div element
  scoresInside.classList.add("scores-grid"); //add class
  for (let i = 0; i < 16; i++) {
    if (i == 0) {

//<div class="score-title">
//<span>Thu Apr 30</span>
//</div> 
      let scoreTitle = document.createElement("div");  //create  "score title" where we can see lesson date
      scoreTitle.classList.add("score-title");
      let spanDate = document.createElement("span");

      spanDate.innerHTML = nextLesson(lessonday);
      scoreTitle.appendChild(spanDate);
      scoresInside.appendChild(scoreTitle);

    } else {

// <div class="score">
// <span>0</span>
//</div>
      let scoreDiv = document.createElement("div"); //create  "score" where we can see scores fore each student
      addPromptEvent(scoreDiv); //when u click on it, u can wright inside scores for each student
      scoreDiv.classList.add("score");
      scoreDiv.classList.add(names[i - 1]);
      let spanScore = document.createElement("span");
      spanScore.innerHTML = "0";
      scoreDiv.appendChild(spanScore);
      scoresInside.appendChild(scoreDiv);
      
    }
  }
  scores.appendChild(scoresInside);
  
}



// add date =  when u click on button "add day"
 

function nextLesson(lessonday) {
  let weekday = lessonday.getDay(); //it gives  me weekdays as  0-6
  let monthDay = lessonday.getDate(); // it gaves me date in month as 1-31
  if (weekday == 5) {  //only for lesson day friday increase date in a month with one and in other cases(for lesson days) increase date in  a month with 2
    monthDay++;
    lessonday.setDate(monthDay);
  }
  else {
    monthDay += 2;
    lessonday.setDate(monthDay);
  }
  return lessonday.toDateString().substr(0, lessonday.toDateString().length - 5);
}


// remove date =  when u click on button "remove day"
function perviousLesson(lessonday) {  //only for lesson day saturday decrease date in a month with one and in other cases(for lesson days) decrease date in  a month with 2
  let weekday = lessonday.getDay();
  let monthDay = lessonday.getDate();
  if (weekday == 6) {
    monthDay--;
    lessonday.setDate(monthDay);
  }
  else {
    monthDay -= 2;
    lessonday.setDate(monthDay);
  }
}


function removeLastDay() {
  perviousLesson(lessonday);
  let scoresContainer = document.getElementById("scores-container")
  let getLastNode = scoresContainer.lastChild;
  scoresContainer.removeChild(getLastNode);
  
  totalDays();
  missedLessons();
 }



// ****total addDays***
// counts  number of ".scores-grid" wich we  have  after  "add  day" button and  gives  us  new lesson day

function totalDays () {
  document.querySelector("#totaldays").innerHTML =
  document.querySelectorAll(".scores-grid").length;
}



// *****missedlessons******
// counts missed lessons  for students if there is input "0" in  a score

function missedLessons() {
  let missedLessons = 0;
  let arr = document.querySelectorAll(".score"); //creates array for "score"
  for(let i = 0; i < arr.length; i++){           // for  every element in array where  score is "0" counts it
    if (arr[i].children[0].innerHTML == "0") {
      missedLessons += 1;
    }
  }
  document.querySelector("#missedlessons").innerHTML= missedLessons;

}






