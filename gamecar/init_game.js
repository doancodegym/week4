let carImage = new Image();
carImage.src = "car_mini.png";

let canvas = document.getElementById("myCanvas");

const INIT_POSITION_X = canvas.clientWidth / 2 - (carImage.width / 2);
const INIT_POSITION_Y = 450;

let myCar = new Car(INIT_POSITION_X, INIT_POSITION_Y, carImage.height, carImage.width);

let obstacles = [];

let gameScreen = new GameScreen();

function startGame() {
    gameScreen.clear();
    myCar.drawImage();
    createObstacles();
    setInterval(drawAllObstacles, 1000);
}

function createObstacles() {
    for (let i = 0 ; i < 10; i++) {
        const x = Math.random() * 600;
        obstacles.push(new Obstacle(x, 0, 40));
    }
}

function drawAllObstacles() {
    for (let i = 0 ; i < 10; i++) {
        obstacles[i].moveDown();
        obstacles[i].drawImage();
    }
}

function moveLeft() {
    gameScreen.clear();
    myCar.moveLeft();
    myCar.drawImage();
    drawAllObstacles();
}

function moveRight() {
    gameScreen.clear();
    myCar.moveRight();
    myCar.drawImage();
    drawAllObstacles();
}
