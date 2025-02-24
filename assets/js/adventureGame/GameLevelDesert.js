import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import { Npc } from './Npc.js';
import Compass from './Compass.js';
import Key from './Key.js';

class GameLevelDesert {
  constructor(path) {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    // Use window dimensions if GameEnv does not provide them
    let width = GameEnv.innerWidth || window.innerWidth; 
    let height = GameEnv.innerHeight || window.innerHeight;

    // Background data
    const image_src_desert = `${path}/images/gamify/desert.png`;
    const image_data_desert = {
      name: 'YellowstoneRiver',
      greeting: "Welcome to the Yellowstone River, you are in America's first National Park! Enjoy your adventure!",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 }
    };

    // Compass image incorporation (225x225)
    const compassImg = document.createElement('img');
    compassImg.src = `${path}/images/gamify/compass.png`;
    compassImg.alt = "Compass";
    compassImg.style.position = 'absolute';
    compassImg.style.top = '10px'; // Adjusted top position
    compassImg.style.left = '10px'; // Adjusted left position
    compassImg.style.height = '100px';
    compassImg.style.width = '100px';
    document.body.appendChild(compassImg);

    // Player data for Chillguy
    const sprite_src_chillguy = `${path}/images/gamify/chillguy.png`;
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi, I am Chill Guy, The Yellowstone Ranger. There are so many precious beauties in our Park, please no littering!",
      src: sprite_src_chillguy,
      SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 50, y: height - (height / CHILLGUY_SCALE_FACTOR) }, // Ensure player starts visible
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 3, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    // Key data configuration
    const key_src = `${path}/images/items/key.png`;
    const key_data = {
      id: 'Golden Key',
      greeting: "Restricted access! Get the key to unlock the myth about Yellowstone Park!",
      src: key_src,
      SCALE_FACTOR: 4,
      STEP_FACTOR: 0,
      ANIMATION_RATE: 150,
      INIT_POSITION: { x: 0.8 * width, y: 0.7 * height }, // Position in right-bottom quadrant
      pixels: { height: 502, width: 497 },
      orientation: { rows: 1, columns: 4 },
      animations: { idle: { row: 0, columns: 4 } },
      hitbox: { widthPercentage: 0.3, heightPercentage: 0.3 }
    };

    
  
 // NPC data for Octocat
 const sprite_src_octocat = path + "/images/gamify/octocat.png"; // be sure to include the path
 const sprite_data_octocat = {
   id: 'Octocat',
   greeting: "Hi there I am Octocat the Bear Protecter This bear is kind talk to winnie the pooh and do the quiz and learn about Yellowstone :D",
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
     title: "Yellowstone Quiz",
     questions: [
       "What is the name of the massive volcanic crater found in Yellowstone?\n1. Yellowstone Caldera\n2. Mount St. Helens\n3. Mount Fuji\n4. Crater Lake",
      "Yellowstone is home to which of the following geothermal features?\n1. Hot Springs\n2. Caves\n3. Lava Tubes\n4. Volcanoes",
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
            "What is the name of the massive volcanic crater found in Yellowstone?\n1. Yellowstone Caldera\n2. Mount St. Helens\n3. Mount Fuji\n4. Crater Lake",
      "Yellowstone is home to which of the following geothermal features?\n1. Hot Springs\n2. Caves\n3. Lava Tubes\n4. Volcanoes",
          ] 
        }
      };

    // NPC data for Bear
    const sprite_src_bear = `${path}/images/gamify/bear.png`; 
    const sprite_data_bear = {
      id: 'Bear',
      greeting: "Hello, traveler! Did you know Yellowstone is home to the largest concentration of geysers in the world?",
      src: sprite_src_bear,
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 100,
      pixels: { height: 228, width: 256 },
      INIT_POSITION: { x: width / 4, y: height / 4 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 2, start: 0, columns: 3 },
      left: { row: 3, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 0, start: 3, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
      quiz: {
      title: "Yellowstone Fun Facts Quiz",
      questions: [
        "What is the name of the massive volcanic crater found in Yellowstone?\n1. Yellowstone Caldera\n2. Mount St. Helens\n3. Mount Fuji\n4. Crater Lake",
        "Yellowstone is home to which of the following geothermal features?\n1. Hot Springs\n2. Caves\n3. Lava Tubes\n4. Volcanoes",
      ]
      }
    };

    // Compass data
    const compass_data = {
      id: 'Compass',
      greeting: "I will guide you to the exit, just follow my directions. Talk to the robot NPC and do the quiz.",
      src: compassImg.src,
      SCALE_FACTOR: 1,
      ANIMATION_RATE: 0,
      INIT_POSITION: { x: parseInt(compassImg.style.left), y: parseInt(compassImg.style.top) },
      pixels: { height: parseInt(compassImg.style.height), width: parseInt(compassImg.style.width) },
      hitbox: { widthPercentage: 1, heightPercentage: 1 },
      quiz: {
      title: "Compass Quiz",
      questions: [
      "Which direction does a compass needle point?\n1. North\n2. South\n3. East\n4. West",
      "What is the main use of a compass?\n1. Navigation\n2. Cooking\n3. Writing\n4. Painting"
      ]
      }
    };

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_robot },
      { class: Npc, data: sprite_data_bear },
      { class: Compass, data: compass_data },
      { class: Key, data: key_data },
      { class: Npc, data: sprite_data_octocat },
    ];
  }
}

export default GameLevelDesert;