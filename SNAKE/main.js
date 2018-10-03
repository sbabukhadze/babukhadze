const mycanvas = document.getElementById('mycanvas');
const ctx = mycanvas.getContext('2d');
let x = 20;
let y = 20;
let d = "RIGHT"
let score = 0;


class Snake {
    constructor(x, y, width, height, length) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.length = length;
        this.snake = [];
    }

    create() {

        let body = this.x;
        for (let i = 0; i < this.length; i++) {
            this.snake.push({
                x: body,
                y: 200
            })
            body += 20;
        }
    }
    draw() {

        ctx.clearRect(0, 0, mycanvas.width, mycanvas.height)
        for (let i = 0; i < this.snake.length; i++) {
            let x = this.snake[i].x;
            let y = this.snake[i].y;
            // apple.eat();
            ctx.fillStyle = "gold";
            ctx.fillRect(x, y, this.width, this.height);
            ctx.strokeStyle = "red";
            ctx.strokeRect(x, y, this.width, this.height);
        }
    }

    borders() {
        let last = this.snake[this.snake.length - 1]
        let snakeX = last.x;
        let snakeY = last.y;

        //game will over when Snake touches the borders
        if (snakeX < 0 || snakeY < 0 || snakeX >= mycanvas.width || snakeY >= mycanvas.height) {
            // Call Game over Function
            gameFinished();
        }

        //game will over when Snake touches itself
        for (let i = 0; i < this.snake.length - 1; i++) {
            if (snakeX === this.snake[i].x && snakeY === this.snake[i].y) {
                // Call Game over Function
                gameFinished();
            }
        }

    }

    //directions
    moveRight() {
        this.snake.shift();
        let last = this.snake[this.snake.length - 1];
        let obj = {
            x: last.x + this.width,
            y: last.y
        }
        this.snake.push(obj);
        this.draw()
    }

    moveLeft() {
        this.snake.shift();
        let last = this.snake[this.snake.length - 1];
        let obj = {
            x: last.x - this.width,
            y: last.y
        }
        this.snake.push(obj);
        this.draw()
    }

    moveUp() {
        this.snake.shift();
        let last = this.snake[this.snake.length - 1];
        let obj = {
            x: last.x,
            y: last.y - this.height
        }
        this.snake.push(obj);
        this.draw()
    }

    moveDown() {
        this.snake.shift();
        let last = this.snake[this.snake.length - 1];
        let obj = {
            x: last.x,
            y: last.y + this.height
        }
        this.snake.push(obj);
        this.draw()
    }
}

// When Game is Over
function gameFinished() {
    setHighScore();
    score = 0;
    cancelAnimationFrame(game);
    d = "RIGHT"
    ctx.clearRect(0, 0, mycanvas.width, mycanvas.height);
    let text = "loozaah!"
    ctx.font = "50px Helvetica";
    ctx.fillText = (text, 100, 100);
    ctx.strokeText(text, 100, 100)
    ctx.stroke();
}

class Apple {

    constructor(width, height) {
        this.x = Math.floor(Math.random() * (mycanvas.width / 25)) * 20;
        this.y = Math.floor(Math.random() * (mycanvas.height / 25)) * 20;
        this.width = width;
        this.height = height;
        // this.eat = this.eat;
    }

    draw() { //draw an apple on the board
        let image = new Image();
        image.src = 'appleold.png';
        ctx.drawImage(image, this.x, this.y, 20, 20);
    }

    redraw() { //when eaten  apple is  gone it needs  to appear  again
        this.x = Math.floor(Math.random() * (mycanvas.width / 25)) * 20;
        this.y = Math.floor(Math.random() * (mycanvas.height / 25)) * 20;
        this.draw();
    }

    eat() { // snake  eats  an apple  and  then starts growing

        let last = snake.snake[snake.snake.length - 1]
        let snakeX = last.x;
        let snakeY = last.y;

        let appleX = apple.x;
        let appleY = apple.y;

        if (snakeX == appleX && snakeY == appleY) {
            apple.redraw(); //Create new food
            score += 10;
            setScore();
            let head = { //new head
                x: snakeX,
                y: snakeY
            };
            snake.snake.push(head);
        }
    }
}



//keys
document.addEventListener('keydown', function (event) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if (key == 40 && d != "UP") {
        d = "DOWN";
    }
})


let snake = new Snake(x, y, 20, 20, 3);
snake.create();
let apple = new Apple(20, 20);
apple.draw();


let loop = 0;
let loopnumber = 10;

// Change Speed Function and Add Active Class on each Button
function changeSpeed() { //change speed for levels and also show active  level

    let hard = document.getElementById("hard");
    let intermadiate = document.getElementById("intermadiate");
    let novice = document.getElementById("novice");

    let hardRange = document.getElementById("hard-range");
    let intermadiateRange = document.getElementById("intermadiate-range");
    let noviceRange = document.getElementById("novice-range");

    let hardValue = document.getElementById("hardvalue").value;
    let intermadiateValue = document.getElementById("intermadiatevalue").value;
    let noviceValue = document.getElementById("novicevalue").value;

    // If user Clicks Hard Button
    hard.addEventListener("click", function () {
        loopnumber = hardValue;

        // Show Range input
        hardRange.classList.remove("hidden");
        intermadiateRange.classList.add("hidden");
        noviceRange.classList.add("hidden");

        // Add Active on Hard add delete active class for another buttons
        hard.classList.add("active");
        intermadiate.classList.remove("active");
        novice.classList.remove("active");
    });


    // If user Clicks Intermadiate Button
    intermadiate.addEventListener("click", function () {
        loopnumber = intermadiateValue;

        // Show Range input
        hardRange.classList.add("hidden");
        intermadiateRange.classList.remove("hidden");
        noviceRange.classList.add("hidden");

        // Add Active on Hard add delete active class for another buttons
        intermadiate.classList.add("active");
        hard.classList.remove("active");
        novice.classList.remove("active");
    });

    // If user Clicks Novice Button
    novice.addEventListener("click", function () {
        loopnumber = noviceValue;

        // Show Range input
        hardRange.classList.add("hidden");
        intermadiateRange.classList.add("hidden");
        noviceRange.classList.remove("hidden");

        // Add Active on Hard add delete active class for another buttons
        novice.classList.add("active");
        hard.classList.remove("active");
        intermadiate.classList.remove("active");
    });
}

function animate() {
    game = requestAnimationFrame(animate);

    if (++loop < loopnumber) {
        return;
    }
    loop = 0;

    snake.draw()

    if (d === 'RIGHT') {
        snake.moveRight();
    } else if (d === 'LEFT') {
        snake.moveLeft();
    } else if (d === 'UP') {
        snake.moveUp();
    } else {
        snake.moveDown();
    }

    snake.borders();
    apple.draw();
    apple.eat()
}

function setScore(reset) {
    const item = document.getElementsByClassName('currentScore')[0];
    if (reset) {
        item.innerHTML = 0
    } else {
        item.innerHTML = score
    }
}
setScore()

// Save High Score in Localstorage and show in html
function setHighScore(scoreParam) {
    const item = document.getElementsByClassName('highestScore')[0];
    let highScore = parseInt(localStorage.getItem('highScore'));
    if (isNaN(highScore)) highScore = score
    if (isNaN(scoreParam)) item.innerHTML = highScore;
    if (highScore <= score) {
        localStorage.setItem('highScore', score);
        item.innerHTML = score;
    }
    // localStorage.clear() 
}

setHighScore();

// Default Snake Size
let snakeSize = 3;

let start = document.getElementById('btn')
start.addEventListener("click", function () {
    setScore(true)
    apple = new Apple(20, 20);
    apple.draw();

    // Get Snake Size with input value
    let sizeValue = document.getElementById("snakeSize").value;

    // If input value is null make snake size 3
    if (sizeValue != true) {
        snakeSize = 3;
    }

    // If input value isn't null make snake size input value
    if (sizeValue != false) {
        snakeSize = sizeValue;
    }

    snake = new Snake(x, y, 20, 20, snakeSize);
    snake.create();

    animate();
})


changeSpeed(); // adds change speed events

//Canvas size changing
let createNewCanvas = document.getElementById("createNewCanvas");
let enterCanvasHeight = document.getElementById("enterCanvasHeight");
let enterCanvasWidth = document.getElementById("enterCanvasWidth");

function createNewCanvass() {

    let canvasHeight = enterCanvasHeight.value;
    let canvasWidth = enterCanvasWidth.value;
    let newCanvas = document.getElementById("mycanvas");
    newCanvas.style.height = canvasHeight + "px";
    newCanvas.style.width = canvasWidth + "px";
}

createNewCanvas.addEventListener("click", createNewCanvass);