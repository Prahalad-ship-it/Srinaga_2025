import Character from './Character.js';

class Projectile extends Character {
    constructor(data, gameEnv) {
        super(data, gameEnv);
        this.startTime = Date.now();
        this.duration = data.TRANSLATE_SIMULATION.miliseconds;
        this.steps = data.TRANSLATE_SIMULATION.steps;
        this.calculateTranslatePositions();
        this.startScaleFactor = data.SCALE_FACTOR;
        this.endScaleFactor = data.TRANSLATE_SCALE_FACTOR;
    }

    calculateTranslatePositions() {
        this.startPosition = {
            x: this.gameEnv.innerWidth * this.data.INIT_POSITION_RATIO.x,
            y: this.gameEnv.innerHeight * this.data.INIT_POSITION_RATIO.y
        };
        this.endPosition = {
            x: this.gameEnv.innerWidth * this.data.TRANSLATE_POSITION_RATIO.x,
            y: this.gameEnv.innerHeight * this.data.TRANSLATE_POSITION_RATIO.y
        };
    }

    update() {
        const elapsedTime = Date.now() - this.startTime;
        const progress = Math.min(elapsedTime / this.duration, 1);
        const step = Math.floor(progress * this.steps);

        this.position.x = this.startPosition.x + (this.endPosition.x - this.startPosition.x) * progress;
        this.position.y = this.startPosition.y + (this.endPosition.y - this.startPosition.y) * progress;

        this.scaleFactor = this.startScaleFactor + (this.endScaleFactor - this.startScaleFactor) * progress;
        this.size = this.gameEnv.innerHeight / this.scaleFactor;
        this.width = this.size;
        this.height = this.size;

        console.log("Projectile Position:", this.position);
        console.log("Projectile Size:", this.width, this.height);

        super.update();

        if (progress >= 1) {
            this.restart();
        }

        this.checkCollision();
    }

    restart() {
        this.startTime = Date.now();
        this.calculateTranslatePositions();
        this.position = { ...this.startPosition };
        this.scaleFactor = this.startScaleFactor;
    }

    checkCollision() {
        console.log("Checking collision...");
        console.log("Character Position:", this.gameEnv.character?.position);
        console.log("Character Size:", this.gameEnv.character?.width, this.gameEnv.character?.height);

        if (this.gameEnv.character && this.isCollidingWith(this.gameEnv.character)) {
            console.log("Collision detected! Restarting game...");
            this.gameEnv.restartGame();
        }
    }

    isCollidingWith(character) {
        return (
            this.position.x < character.position.x + character.width &&
            this.position.x + this.width > character.position.x &&
            this.position.y < character.position.y + character.height &&
            this.position.y + this.height > character.position.y
        );
    }
}

export default Projectile;
