// To build GameLevels, each contains GameObjects from below imports
import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Quest from './Quests.js';
import QuestSystem from './QuestObject.js';
import QuestNpc from './QuestNpc.js';
import ScavengerObject from './ScavengerObject.js';

class GameLevelDesert {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    // Values dependent on GameEnv.create()
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;


    // Background data
    const image_src_desert = path + "/images/gamify/Grassland.png"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdome and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };


    // NPC data for Npc
    const sprite_src_Npc= path + "/images/gamify/Npc.png"; // be sure to include the path
    const sprite_data_Npc= {
        id: 'Npc',
        greeting: "Hi I am Tux, the Linux mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_Npc,
        SCALE_FACTOR: 6.5,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 257, width: 577},
        INIT_POSITION: { x: (width / 2), y: (height / 2)},
        orientation: {rows: 4, columns: 9 },
        down: {row: 2, start: 0, columns: 9 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Linux Command Quiz",
          questions: [
            "Which command is used to list files in a directory?\n1. ls\n2. dir\n3. list\n4. show",
            "Which command is used to change directories?\n1. cd\n2. chdir\n3. changedir\n4. changedirectory",
            "Which command is used to create a new directory?\n1. mkdir\n2. newdir\n3. createdir\n4. makedir",
            "Which command is used to remove a file?\n1. rm\n2. remove\n3. delete\n4. erase",
            "Which command is used to remove a directory?\n1. rmdir\n2. removedir\n3. deletedir\n4. erasedir",
            "Which command is used to copy files?\n1. cp\n2. copy\n3. duplicate\n4. xerox",
            "Which command is used to move files?\n1. mv\n2. move\n3. transfer\n4. relocate",
            "Which command is used to view a file?\n1. cat\n2. view\n3. show\n4. display",
            "Which command is used to search for text in a file?\n1. grep\n2. search\n3. find\n4. locate",
            "Which command is used to view the contents of a file?\n1. less\n2. more\n3. view\n4. cat" 
          ] 
        }
      };



      // NPC data for Octocat
      const sprite_src_octocat = path + "/images/gamify/octocat.png"; // be sure to include the path
      const sprite_data_octocat = {
        id: 'Octocat',
        greeting: "Hello there you intrested in becoming rich talk to my friend",
        src: sprite_src_octocat,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 50,
        pixels: {height: 301, width: 801},
        INIT_POSITION: { x: (width / 4), y: (height / 4)},
        orientation: {rows: 1, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
        // GitHub command quiz 
        quiz: { 
          title: "GitHub Command Quiz",
          questions: [
            "Which command is used to clone a repository?\n1. git clone\n2. git fork\n3. git copy\n4. git download",
            "Which command is used to add changes to the staging area?\n1. git add\n2. git stage\n3. git commit\n4. git push",
            "Which command is used to commit changes?\n1. git commit\n2. git add\n3. git save\n4. git push",
            "Which command is used to push changes to a remote repository?\n1. git push\n2. git upload\n3. git send\n4. git commit",
            "Which command is used to pull changes from a remote repository?\n1. git pull\n2. git fetch\n3. git receive\n4. git update",
            "Which command is used to check the status of the working directory and staging area?\n1. git status\n2. git check\n3. git info\n4. git log",
            "Which command is used to create a new branch?\n1. git branch\n2. git create-branch\n3. git new-branch\n4. git checkout",
            "Which command is used to switch to a different branch?\n1. git checkout\n2. git switch\n3. git change-branch\n4. git branch",
            "Which command is used to merge branches?\n1. git merge\n2. git combine\n3. git join\n4. git integrate",
            "Which command is used to view the commit history?\n1. git log\n2. git history\n3. git commits\n4. git show"
          ] 
        }
    }
  

    const sprite_src_robot = path + "/images/gamify/robot.png"; // be sure to include the path
    const sprite_data_robot = {
        id: 'Robot',
        greeting: "Hi I am Robot, the Jupyter Notebook mascot.  I am very happy to spend some linux shell time with you!",
        src: sprite_src_robot,
        SCALE_FACTOR: 10,  // Adjust this based on your scaling needs
        ANIMATION_RATE: 100,
        pixels: {height: 316, width: 627},
        INIT_POSITION: { x: (width * 3 / 4), y: (height * 3 / 4)},
        orientation: {rows: 3, columns: 6 },
        down: {row: 1, start: 0, columns: 6 },  // This is the stationary npc, down is default 
        hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
        // Linux command quiz
        quiz: { 
          title: "Jupyter Notebook Command Quiz",
          questions: [
            "Which shortcut is used to run a cell in Jupyter Notebook?\n1. Shift + Enter\n2. Ctrl + Enter\n3. Alt + Enter\n4. Tab + Enter",
            "Which shortcut adds a new cell above the current cell?\n1. A\n2. B\n3. C\n4. D",
            "Which shortcut adds a new cell below the current cell?\n1. B\n2. A\n3. C\n4. D",
            "Which shortcut changes a cell to Markdown format?\n1. M\n2. Y\n3. R\n4. K",
            "Which shortcut changes a cell to Code format?\n1. Y\n2. M\n3. C\n4. D",
            "Which shortcut deletes the current cell?\n1. D, D\n2. X\n3. Del\n4. Ctrl + D",
            "Which shortcut saves the current notebook?\n1. Ctrl + S\n2. Alt + S\n3. Shift + S\n4. Tab + S",
            "Which shortcut restarts the kernel?\n1. 0, 0\n2. R, R\n3. K, K\n4. Shift + R",
            "Which shortcut interrupts the kernel?\n1. I, I\n2. Ctrl + C\n3. Shift + I\n4. Alt + I",
            "Which shortcut toggles line numbers in a cell?\n1. L\n2. N\n3. T\n4. G"
          ] 
        }
      };

      // NPC data for the quests npc
const SpriteSrcFancyGuy = path + "/images/gamify/stockguy.png"; // be sure to include the path
const SpriteDataFancyGuy = {
    id: 'FancyGuy',
    greeting: "Hey there! I give people stuff to do to make a rich! What can I do for you?",
    src: SpriteSrcFancyGuy,
    SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
    ANIMATION_RATE: 60,
    pixels: { height: 882, width: 1356 },
    INIT_POSITION: { x: (width / 1.15), y: (height / 3) },
    orientation: { rows: 2, columns: 4 },
    down: { row: 0, start: 0, columns: 1 },  // This is the stationary NPC, down is default
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
};
const ScavengerObjectsrc = path + "/images/gamify/stockguy.png"; // be sure to include the path
const ScavengerFindObject = {
    id: 'ScavengerObject',
    src: ScavengerObjectsrc,
    greeting: "You have collected an object",
    SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
    ANIMATION_RATE: 60,
    pixels: { height: 882, width: 1356 },
    INIT_POSITION: { x: (width / 2.), y: (height / 4) },
    orientation: { rows: 2, columns: 4 },
    down: { row: 0, start: 0, columns: 1 },  // This is the stationary NPC, down is default
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
};  

    // List of objects defnitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_Npc },
      { class: Npc, data: sprite_data_octocat },
      { class: Npc, data: sprite_data_robot },
      { class: QuestNpc, data: SpriteDataFancyGuy},
      //{ class: ScavengerObject, data: ScavengerFindObject},
    ];
    this.quests = [
     Quest.createQuest("Talk to my friend", "talktfriend", Quest.npcQuest([`Npc`])),
     Quest.createQuest("Talk to my friends", "talktofriends", Quest.npcQuest([`Npc`,`Robot`])),
     Quest.createQuest("Talk to my uncle", "talktouncle", Quest.npcQuest([`Octocat`])),
    ];
  };

}

export default GameLevelDesert;