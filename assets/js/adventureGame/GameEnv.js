/**
 * GameEnv is a static class that manages the game environment.
 * 
 * The focus of the file is the canvas management and the calculation of the game area dimensions. 
 * All calculations are based on the window size, header, and footer.
 * 
 * This code uses a classic Java static class pattern, which is nice for managing centralized data.
 * 
 * The static class pattern ensures that there is only one instance of the game environment,
 * providing a single point of reference for all game objects. This approach helps maintain
 * consistency and simplifies the management of shared resources like the canvas and its dimensions.
 * 
 * @class GameEnv
 * @property {Array} gameObjects - An array of game objects for the current level.
 * @property {Object} canvas - The canvas element.
 * @property {Object} ctx - The 2D rendering context of the canvas.
 * @property {number} innerWidth - The inner width of the game area.
 * @property {number} innerHeight - The inner height of the game area.
 * @property {number} top - The top offset of the game area.
 * @property {number} bottom - The bottom offset of the game area.
 * @property {boolean} timerActive - Flag to indicate if the timer is active.
 * @property {number} timerInterval - The interval for the timer.
 * @property {number} time - The current time.
 * @property {number} totalQuestions - The total number of quiz questions.
 * @property {number} questionsAnswered - The number of quiz questions answered correctly.
 */
class GameEnv {
    static gameObjects = [];
    static continueLevel = true;
    static canvas;
    static ctx;
    static innerWidth;
    static innerHeight;
    static top;
    static bottom;
    static timerActive = false;
    static timerInterval = 10;
    static time = 0;

    // Quiz-related properties
    static totalQuestions = 0;  // Number of quiz questions, can be set dynamically
    static questionsAnswered = 0;  // Correctly answered questions

    /**
     * Private constructor to prevent instantiation.
     * 
     * @constructor
     * @throws {Error} Throws an error if an attempt is made to instantiate the class.
     */
    constructor() {
        throw new Error('GameEnv is a static class and cannot be instantiated.');
    }

    /**
     * Create the game environment by setting up the canvas and calculating dimensions.
     * 
     * This method sets the canvas element, calculates the top and bottom offsets,
     * and determines the inner width and height of the game area. It then sizes the canvas
     * to fit within the calculated dimensions.
     * 
     * @static
     */
    static create() {
        this.setCanvas();
        this.setTop();
        this.setBottom();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight - this.top - this.bottom;
        this.size();
    }

    /**
     * Sets the canvas element and its 2D rendering context.
     * 
     * @static
     */
    static setCanvas() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * Sets the top offset based on the height of the header element.
     * 
     * @static
     */
    static setTop() {
        const header = document.querySelector('header');
        this.top = header ? header.offsetHeight : 0;
    }

    /**
     * Sets the bottom offset based on the height of the footer element.
     * 
     * @static
     */
    static setBottom() {
        const footer = document.querySelector('footer');
        this.bottom = footer ? footer.offsetHeight : 0;
    }

    /**
     * Sizes the canvas to fit within the calculated dimensions.
     * 
     * @static
     */
    static size() {
        this.canvas.width = this.innerWidth;
        this.canvas.height = this.innerHeight;
        this.canvas.style.width = `${this.innerWidth}px`;
        this.canvas.style.height = `${this.innerHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.top = `${this.top}px`;
    }

    /**
     * Resizes the game environment by re-creating it.
     * 
     * @static
     */
    static resize() {
        this.create();
    }

    /**
     * Clears the canvas.
     * 
     * This method clears the entire canvas, making it ready for the next frame.
     * 
     * @static
     */
    static clear() {
        this.ctx.clearRect(0, 0, this.innerWidth, this.innerHeight);
    }

    /**
     * Set the total number of questions in the quiz.
     * 
     * This is used to dynamically set how many questions need to be answered.
     * 
     * @static
     * @param {number} quizLength - The total number of questions in the quiz.
     */
    static setTotalQuestions(quizLength) {
        this.totalQuestions = quizLength;
    }

    /**
     * Check if all quiz questions have been answered correctly.
     * 
     * @static
     * @returns {boolean} - Returns true if all questions have been answered.
     */
    static get allQuestionsAnswered() {
        return this.questionsAnswered >= this.totalQuestions;
    }

    /**
     * Increments the count of correctly answered questions.
     * 
     * This method should be called each time the player answers a question correctly.
     * 
     * @static
     */
    static incrementAnsweredQuestions() {
        if (this.questionsAnswered < this.totalQuestions) {
            this.questionsAnswered++;
            console.log(`✅ Questions Answered: ${this.questionsAnswered}/${this.totalQuestions}`);

            if (this.allQuestionsAnswered) {
                console.log("🎉 All questions answered! You can now collect the key.");
                this.unlockKey();  // Unlock the key once all questions are answered
            }
        }
    }

    /**
     * Unlocks the key when all quiz questions are answered correctly.
     * 
     * @static
     */
    static unlockKey() {
        console.log("🔑 The key is now unlocked and can be collected!");
        // Additional logic to give the player the key could go here
    }

    /**
     * Play a sound by its ID in a loop.
     * 
     * @static
     * @param {string} id - The ID of the sound element.
     */
    static loopSound(id) {
        const sound = document.getElementById(id);
        sound.loop = true;
        sound.play();
    }

    /**
     * Stop all sounds.
     * 
     * @static
     */
    static stopAllSounds() {
        const sounds = document.getElementsByTagName('audio');
        for (let sound of sounds) {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    // Play a sound by its ID in a loop
    static loopSound(id) {
        const sound = document.getElementById(id);
        sound.loop = true;
        sound.play();
    }

    // Stop all sounds
    static stopAllSounds() {
        const sounds = document.getElementsByTagName('audio');
        for (let sound of sounds) {
            sound.pause();
            sound.currentTime = 0;
        }
    }
}

export default GameEnv;