import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";
import Key from "./Key.js"; // Import Key class

class Npc extends Character {
    constructor(data = null) {
        super(data);
        this.quiz = data?.quiz?.title; // Quiz title
        this.questions = Prompt.shuffleArray(data?.quiz?.questions || []); // Shuffle questions
        this.currentQuestionIndex = 0; // Start from the first question
        this.correctAnswers = 0; // Track correct answers
        this.alertTimeout = null;
        this.bindEventListeners();
    }

    update() {
        this.draw();
    }

    bindEventListeners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ key }) {
        switch (key) {
            case 'e': // Player 1 interaction
            case 'u': // Player 2 interaction
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

    getNextQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.currentQuestionIndex = (this.currentQuestionIndex + 1) % this.questions.length;
        return question;
    }

    shareQuizQuestion() {
        const players = GameEnv.gameObjects.filter(obj => obj.state.collisionEvents.includes(this.spriteData.id));
        const hasQuestions = this.questions.length > 0;
        if (players.length > 0 && hasQuestions) {
            players.forEach(player => {
                if (!Prompt.isOpen) {
                    Prompt.currentNpc = this;
                    Prompt.openPromptPanel(this);
                }
            });
        }
    }

    /**
     * Handle player's answer and check if quiz is completed.
     * @param {boolean} isCorrect - Whether the answer was correct.
     */
    handleAnswer(isCorrect) {
        if (isCorrect) {
            this.correctAnswers++;
        }
        this.checkQuizCompletion();
    }

    /**
     * Check if the player answered all questions correctly.
     */
    checkQuizCompletion() {
        if (this.correctAnswers === this.questions.length) {
            console.log("✅ All questions answered correctly! Granting the key...");
            this.giveKey();
        }
    }

    /**
     * Grant the player a key.
     */
    giveKey() {
        const key = new Key({ x: this.x, y: this.y }); // Create a new key instance
        GameEnv.gameObjects.push(key); // Add the key to the game
        console.log("🔑 Key has been added to the game!");
    }
}

export default Npc;
