import GameObject from './GameObject.js';

class Compass extends GameObject {
    constructor(player, npc) {
        super();
        this.player = player;
        this.npc = npc; // NPC for interaction
        this.direction = 'N';
        this.blockedDirections = ["N"]; // List of blocked directions

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = 100;
        this.canvas.height = 100;
        document.getElementById("gameContainer").appendChild(this.canvas);
        
        this.updateDirection();
        this.setupKeyListener();
    }

    setupKeyListener() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'w' || event.key === 'W') {
                this.checkInteraction();
            }
        });
    }

    updateDirection() {
        // Ensure player and npc are valid objects and have position and velocity properties
        if (!this.player || !this.npc || !this.player.position || !this.npc.position || !this.player.velocity) {
            console.error("Player or NPC is not properly initialized!");
            return;
        }

        const { x, y } = this.player.velocity;

        if (y < 0) this.direction = 'N';
        else if (y > 0) this.direction = 'S';
        else if (x < 0) this.direction = 'W';
        else if (x > 0) this.direction = 'E';

        this.checkBlockedPath();
    }

    checkBlockedPath() {
        if (this.blockedDirections.includes(this.direction)) {
            console.log(`⛔ You are blocked from moving ${this.direction}!`);
            this.player.velocity.x = 0;
            this.player.velocity.y = 0;
        }
    }

    checkInteraction() {
        // Ensure player and npc positions are defined
        if (!this.player.position || !this.npc.position) {
            console.error("Player or NPC does not have a position defined!");
            return;
        }

        const distance = Math.hypot(
            this.player.position.x - this.npc.position.x,
            this.player.position.y - this.npc.position.y
        );
        
        if (distance < 50) { // Interaction range
            console.log("🗨️ The compass reacts! You are near an NPC.");
        }
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

    addBlockedDirection(direction) {
        if (!this.blockedDirections.includes(direction)) {
            this.blockedDirections.push(direction);
        }
    }

    removeBlockedDirection(direction) {
        this.blockedDirections = this.blockedDirections.filter(dir => dir !== direction);
    }
}

export default Compass;
