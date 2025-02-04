import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Npc from './Npc.js';
import Compass from './compass.js';
import Key from './Key.js';

class GameLevelDesert {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    let width = GameEnv.innerWidth;
    let height = GameEnv.innerHeight;

    // Background data
    const image_src_desert = path + "/images/gamify/YellowstoneRiver.png"; 
    const image_data_desert = {
      name: 'YellowstoneRiver',
      greeting: "Welcome to the Yellowstone River you are in America's first National Park so slay enjoy!",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 }
    };

    // Compass image incorporation (225x225)
    const compassImg = document.createElement('img');
    compassImg.src = path + "/images/gamify/compass.png"; // Make sure the path is correct
    compassImg.alt = "Compass";
    compassImg.style.position = 'absolute';
    compassImg.style.top = '20px'; // Adjust top position
    compassImg.style.left = '20px'; // Adjust left position
    compassImg.style.height = '100px'; // Set the height
    compassImg.style.width = '100px'; // Set the width
    document.body.appendChild(compassImg); // Add the compass to the document body

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi I am Chill Guy, The Yellowstone Ranger. There are so many precious beauties in our Park, please no littering!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / CHILLGUY_SCALE_FACTOR) },
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // Key data configuration (maintains existing code structure)
    const key_src = path + "/images/items/key.png";
    const key_data = {
      id: 'Golden Key',
      greeting: "A shimmering park maintenance key!",
      src: key_src,
      SCALE_FACTOR: 4,
      STEP_FACTOR: 0,
      ANIMATION_RATE: 150,
      INIT_POSITION: { x: 0.8, y: 0.7 }, // Position in right-bottom quadrant
      pixels: { 
        height: 502,
        width: 497 
      },
      orientation: {
        rows: 1,
        columns: 4
      },
      animations: {
        idle: { row: 0, columns: 4 }
      },
      hitbox: {
        widthPercentage: 0.3,
        heightPercentage: 0.3
      }
    };

    // NPC data for Bear
    const sprite_src_tux = path + "/images/gamify/bear.png";
    const sprite_data_tux = {
      id: 'Bear',
      greeting: "Hi, I am Bear! Ready for an adventure?",
      src: sprite_src_tux,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 20,
      pixels: { height: 216, width: 396 },
      INIT_POSITION: { x: (width / 2), y: (height / 2) },
      orientation: { rows: 8, columns: 11 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
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
    const sprite_src_octocat = path + "/images/gamify/octocat.png";
    const sprite_data_octocat = {
      id: 'Octocat',
      greeting: "Hi I am Octocat! I am the GitHub code collaboration mascot",
      src: sprite_src_octocat,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 50,
      pixels: { height: 301, width: 801 },
      INIT_POSITION: { x: (width / 4), y: (height / 4) },
      orientation: { rows: 1, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
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
    };

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat },  // Adding Octocat NPC here
      { class: Key, data: key_data },
      { class: Key, data: key_data } 
    ];
  }
}

export default GameLevelDesert;
