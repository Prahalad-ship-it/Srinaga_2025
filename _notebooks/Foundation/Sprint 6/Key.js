import GameEnv from "./GameEnv.js";
import Character from "./Character.js";

class Key extends Character {
    constructor(data = null) {
        super(data);
        this.collected = false;
        this.element = document.createElement('img'); // Ensure element is initialized
        this.element.src = Key.keySpriteData.src;
        this.bindEventListeners();
    }

    // Key sprite configuration (matches your NPC structure)
    static keySpriteData = {
        id: 'Golden Key',
        greeting: "A shimmering park maintenance key!",
        src: "/images/items/key.png", // Path to your 497x502 key.png
        SCALE_FACTOR: 4, // Adjust based on desired game size
        STEP_FACTOR: 0, // Keys don't move
        ANIMATION_RATE: 150,
        INIT_POSITION: { x: 0.5, y: 0.5 }, // Center position by default
        pixels: { 
            height: 502, // Match your PNG dimensions
            width: 497 
        },
        orientation: {
            rows: 1,    // Single row for key animations
            columns: 4  // 4 animation frames
        },
        animations: {
            idle: { row: 0, columns: 4 } // Spin animation
        },
        hitbox: {
            widthPercentage: 0.3,  // Tight collision area
            heightPercentage: 0.3
        }
    };

    update() {
        if (!this.collected) {
            // Animate using the first row (idle spin)
            this.frameY = 0;
            this.animateFrame(); // Ensure animateFrame is defined
            super.draw(); // Call the draw method from Character class
        }
    }

    // Define animateFrame method if not inherited from Character
    animateFrame() {
        // Implementation of animateFrame
    }

    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown({ key }) {
        if ((key === 'e' || key === 'u') && !this.collected) {
            const playerCollision = this.checkCollision(GameEnv.player);
            
            if (playerCollision) {
                this.collectKey();
            }
        }
    }

    collectKey() {
        this.collected = true;
        console.log("🔑 Key added to inventory!");
        // Add to game state management
        GameEnv.keysCollected = (GameEnv.keysCollected || 0) + 1;
        
        // Visual feedback
        this.flashEffect();
    }

    flashEffect() {
        this.element.style.filter = "brightness(2)";
        setTimeout(() => {
            this.element.style.filter = "none";
        }, 200);
    }
}

export default Key;