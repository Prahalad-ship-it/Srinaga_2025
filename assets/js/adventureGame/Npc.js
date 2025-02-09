import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";
import Key from "./Key.js"; // Import Key class

class Npc extends Character {
    constructor(data = null) {
        super(data);
        
        // Initialize quiz data based on NPC type (either Bison or Tux)
        this.quizType = data?.quiz?.type || "bison"; // Default to "bison"
        this.loadQuizData();
        
        this.currentQuestionIndex = 0; // Start from the first question
        this.correctAnswers = 0; // Track correct answers
        this.alertTimeout = null;
        this.rickRollAudio = new Audio("https://www.myinstants.com/media/sounds/rickroll.mp3"); // Rick Roll sound
        
        this.bindEventListeners();
    }

    loadQuizData() {
        if (this.quizType === "bison") {
            this.quiz = "Yellowstone Quiz (Bison)";
            this.questions = [
                "What is the name of the massive volcanic crater found in Yellowstone?\n1. Yellowstone Caldera\n2. Mount St. Helens\n3. Mount Fuji\n4. Crater Lake",
                "Yellowstone is home to which of the following geothermal features?\n1. Hot Springs\n2. Caves\n3. Lava Tubes\n4. Volcanoes",
                "How many species of mammals can be found in Yellowstone?\n1. Over 60 species\n2. 10 species\n3. 100 species\n4. 30 species",
                "Which geyser is the largest in the world?\n1. Steamboat Geyser\n2. Old Faithful\n3. Grand Geyser\n4. Morning Glory Pool",
                "What is the elevation of Yellowstone National Park?\n1. 7,000 feet\n2. 4,000 feet\n3. 9,000 feet\n4. 5,000 feet"
            ];
            this.answers = [
                "Yellowstone Caldera", "Hot Springs", "Over 60 species", "Steamboat Geyser", "7,000 feet"
            ];
        } else if (this.quizType === "tux") {
            this.quiz = "Yellowstone Quiz (Tux)";
            this.questions = [
                "What year was Yellowstone National Park established?\n1. 1872\n2. 1800\n3. 1900\n4. 1750",
                "Which of these animals is native to Yellowstone?\n1. Bison\n2. Kangaroo\n3. Penguin\n4. Elephant",
                "What is the name of the famous geyser in Yellowstone?\n1. Old Faithful\n2. Big Blast\n3. Steamy Joe\n4. Hot Springs"
            ];
            this.answers = ["1872", "Bison", "Old Faithful"];
        }
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
            case 'i': // Play Rick Roll
                this.rickRollAudio.play();
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

    handleAnswer(playerAnswer) {
        const correctAnswer = this.answers[this.currentQuestionIndex];
        const isCorrect = playerAnswer === correctAnswer;
        if (isCorrect) {
            this.correctAnswers++;
            console.log("✅ Correct Answer!");
        } else {
            console.log("❌ Incorrect Answer.");
        }
        this.checkQuizCompletion();
    }

    checkQuizCompletion() {
        if (this.correctAnswers === this.questions.length) {
            console.log("✅ All questions answered correctly! Granting the key...");
            this.giveKey();
        }
    }

    giveKey() {
        const key = new Key({ x: this.x, y: this.y });
        GameEnv.gameObjects.push(key);
        console.log("🔑 Key has been added to the game!");
    }
}

export default Npc;
