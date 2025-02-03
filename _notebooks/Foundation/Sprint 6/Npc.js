import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";
import Key from "./Key.js";

class Npc extends Character {
    constructor(data = null) {
        super(data);
        this.quiz = data?.quiz?.title;
        this.questions = Prompt.shuffleArray(data?.quiz?.questions || []);
        this.currentQuestionIndex = 0;
        this.alertTimeout = null;
        this.spawnedKey = null;
        this.keyOffset = { x: 0, y: 0 };
        this.quizPassed = false;
        
        if (this.spriteData?.id === 'Bear') {
            this.keyOffset = {
                x: 396 * 0.7,
                y: -216 * 0.4
            };
        }

        this.bindEventListeners(); // Now properly defined below
    }

    // ADD THE MISSING METHOD
    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    // REST OF THE CLASS REMAINS THE SAME
    update() {
        this.draw();
        if (this.spriteData.id === 'Bear' && this.spawnedKey && !this.spawnedKey.collected) {
            this.spawnedKey.x = this.x + this.keyOffset.x;
            this.spawnedKey.y = this.y + this.keyOffset.y;
        }
    }

    handleKeyDown({ key }) {
        switch (key) {
            case 'e':
            case 'u':
                this.shareQuizQuestion();
                break;
        }
    }

    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }

    // ... keep the rest of your existing methods ...
}

export default Npc;