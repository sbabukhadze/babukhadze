
// ********davaleba2*******



let shuffle = document.querySelector("#shuffle")
let accending = document.querySelector("#accending")
let descending = document.querySelector("#decending")



    let array = [];

    for (let i = 1; i <= 150; i++) {
        array.push(i);
    
    };


function drawSpanElements() {
    span.innerHTML = '';
    for (let i of array) {
        let spanNumber = document.createElement("span");
        spanNumber.classList.add("spanName");
        spanNumber.innerHTML = i;
        span.appendChild(spanNumber);

    }
}


drawSpanElements();  //draw default state of array



function shuffleArray(a) {
    let j, x, i;  // i have j, x and i  for currentIndex,temporaryValue and randomIndex
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle.addEventListener("click", function () {
    shuffleArray(array);
    drawSpanElements();
});



accending.addEventListener("click", function () {
    array.sort(function (a, b) { return a - b });
    drawSpanElements();

});

descending.addEventListener("click", function () {
    array.sort(function (a, b) { return b - a });
    drawSpanElements();

});














