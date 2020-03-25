let Car = function(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;

    this.getHeight = function () {
        return this.height;
    };

    this.getWidth = function () {
        return this.width;
    };

    this.moveRight = function () {
        this.x += 10;
    };

    this.moveLeft = function () {
        this.x -= 10;
    };

    this.moveUp = function () {
        this.y -= 10;
    };

    this.moveDown = function () {
        this.y += 10;
    };

    this.drawImage = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.drawImage(carImage, this.x, this.y);
    }

};

let Obstacle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.getRadius = function () {
        return this.radius;
    };

    this.moveRight = function () {
        this.x += 10;
    };

    this.moveLeft = function () {
        this.x -= 10;
    };

    this.moveUp = function () {
        this.y -= 10;
    };

    this.moveDown = function () {
        this.y += 10;
    };

    this.drawImage = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.stroke();
    }
};

let GameScreen = function(height, width) {
    this.clear = function () {
        let canvas = document.getElementById("myCanvas");
        let context = canvas.getContext("2d");

        context.clearRect(0, 0, canvas.clientHeight, canvas.clientWidth);
    }
};
