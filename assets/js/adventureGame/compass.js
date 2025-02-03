import GameObject from './GameObject.js';
class Compass extends GameObject {
    constructor(player) {
        super();
        this.player = player;
        this.direction = 'N';
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 100;
        this.canvas.height = 100;
        document.getElementById("gameContainer").appendChild(this.canvas);
        this.updateDirection();
    }

    updateDirection() {
        const { x, y } = this.player.velocity;
        if (y < 0) this.direction = 'N';
        else if (y > 0) this.direction = 'S';
        else if (x < 0) this.direction = 'W';
        else if (x > 0) this.direction = 'E';
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.fillText(this.direction, 40, 50);
    }

    update() {
        this.updateDirection();
        this.draw();
    }
}

export default Compass;
