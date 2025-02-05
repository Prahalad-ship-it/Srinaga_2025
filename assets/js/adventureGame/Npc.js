import GameEnv from "./GameEnv.js";
import Character from "./Character.js";
import Prompt from "./Prompt.js";
import Key from "./Key.js"; // Import Key class

class Npc extends Character {
    constructor(data = null) {
        super(data);
        
        // Initialize quiz data based on NPC type (either Bison or Tux)
        this.quizType = data?.quiz?.type || "bison"; // Default to "bison"
        if (this.quizType === "bison") {
            this.quiz = "Yellowstone Quiz (Bison)";
            this.questions = [
                "What is the name of the massive volcanic crater found in Yellowstone?\n1. Yellowstone Caldera\n2. Mount St. Helens\n3. Mount Fuji\n4. Crater Lake",
                "Yellowstone is home to which of the following geothermal features?\n1. Hot Springs\n2. Caves\n3. Lava Tubes\n4. Volcanoes",
                "How many species of mammals can be found in Yellowstone?\n1. Over 60 species\n2. 10 species\n3. 100 species\n4. 30 species",
                "Which geyser is the largest in the world?\n1. Steamboat Geyser\n2. Old Faithful\n3. Grand Geyser\n4. Morning Glory Pool",
                "What is the elevation of Yellowstone National Park?\n1. 7,000 feet\n2. 4,000 feet\n3. 9,000 feet\n4. 5,000 feet",
                "Which of these is NOT a feature of Yellowstone?\n1. Tropical Rainforest\n2. Hot Springs\n3. Geysers\n4. Waterfalls",
                "What is the primary reason Yellowstone was established as a national park?\n1. To protect its unique geothermal features\n2. To protect its wildlife\n3. To provide recreation\n4. To preserve forests",
                "What famous volcano is located underneath Yellowstone?\n1. Yellowstone Supervolcano\n2. Mount Vesuvius\n3. Mount Etna\n4. Mount St. Helens",
                "Yellowstone was the first national park in the world. When was it established?\n1. 1872\n2. 1912\n3. 1800\n4. 1850",
                "Which famous animal can be seen roaming the plains of Yellowstone?\n1. Bison\n2. Elephants\n3. Lions\n4. Kangaroos"
            ];
            this.answers = [
                "Yellowstone Caldera", "Hot Springs", "Over 60 species", "Steamboat Geyser", "7,000 feet", 
                "Tropical Rainforest", "To protect its unique geothermal features", "Yellowstone Supervolcano", 
                "1872", "Bison" // Correct answers for Bison NPC
            ];
        } else if (this.quizType === "tux") {
            this.quiz = "Yellowstone Quiz (Tux)";
            this.questions = [
                "What year was Yellowstone National Park established?\n1. 1872\n2. 1800\n3. 1900\n4. 1750",
                "Which of these animals is native to Yellowstone?\n1. Bison\n2. Kangaroo\n3. Penguin\n4. Elephant",
                "What is the name of the famous geyser in Yellowstone?\n1. Old Faithful\n2. Big Blast\n3. Steamy Joe\n4. Hot Springs",
                "Which river flows through Yellowstone?\n1. Yellowstone River\n2. Missouri River\n3. Colorado River\n4. Snake River",
                "Yellowstone is located primarily in which U.S. state?\n1. Wyoming\n2. California\n3. Montana\n4. Utah",
                "Which famous volcanic feature can be found in Yellowstone?\n1. Supervolcano\n2. Mount St. Helens\n3. Kilauea\n4. Mount Fuji",
                "Which U.S. president signed the bill establishing Yellowstone as a national park?\n1. Ulysses S. Grant\n2. Abraham Lincoln\n3. Theodore Roosevelt\n4. Franklin D. Roosevelt",
                "What is the name of the geothermal area that features hot springs and fumaroles in Yellowstone?\n1. Norris Geyser Basin\n2. Everglades\n3. Grand Canyon\n4. Glacier Basin",
                "Which wildlife species can be found in Yellowstone?\n1. Grizzly Bears\n2. Tigers\n3. Cheetahs\n4. Polar Bears",
                "What geological feature is Yellowstone best known for?\n1. Geysers\n2. Mountains\n3. Waterfalls\n4. Desert"
            ];
            this.answers = [
                "1872", "Bison", "Old Faithful", "Yellowstone River", "Wyoming", 
                "Supervolcano", "Ulysses S. Grant", "Norris Geyser Basin", "Grizzly Bears", "Geysers" // Correct answers for Tux NPC
            ];
        }

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
     * @param {string} playerAnswer - The answer the player provided.
     */
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
