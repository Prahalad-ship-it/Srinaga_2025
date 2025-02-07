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
    let width = GameEnv.innerWidth; // Make sure GameEnv is correctly imported and has innerWidth
    let height = GameEnv.innerHeight; // Same here for height

    // Background data
    const image_src_desert = path + "/images/gamify/Yellowstone.png"; 
    const image_data_desert = {
      name: 'YellowstoneRiver',
      greeting: "Welcome to the Yellowstone River, you are in America's first National Park! Enjoy your adventure!",
      src: image_src_desert,
      pixels: { height: 580, width: 1038 }
    };

    // Compass image incorporation (225x225)
    const compassImg = document.createElement('img');
    compassImg.src = path + "/images/gamify/compass.png"; // Ensure the path is correct
    compassImg.alt = "Compass";
    compassImg.style.position = 'absolute';
    compassImg.style.top = '-5px'; // Adjusted top position
    compassImg.style.left = '0px'; // Adjusted left position
    compassImg.style.height = '100px'; // Set the height
    compassImg.style.width = '100px'; // Set the width
    document.body.appendChild(compassImg); // Add the compass to the document body

    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png";
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
      id: 'Chill Guy',
      greeting: "Hi, I am Chill Guy, The Yellowstone Ranger. There are so many precious beauties in our Park, please no littering!",
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

    // Key data configuration
    const key_src = path + "/images/items/key.png";
    const key_data = {
      id: 'Golden Key',
      greeting: "Restricted access! Get the key to unlock the myth about Yellowstone Park!",
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

    // NPC data for Bear (Modified questions to Yellowstone-related)
    const sprite_src_tux = path + "/images/gamify/chillguy.png"; // Fix source path if different image
    const sprite_data_tux = {
      id: 'Bear',
      greeting: "Greetings, traveler! I am a Yellowstone Park Ranger, here to share the story of this incredible land.",
      src: sprite_src_tux,
      SCALE_FACTOR: 10,
      ANIMATION_RATE: 50,
      pixels: { height: 384, width: 512},
      INIT_POSITION: { x: (width / 2), y: (height / 2) },
      orientation: { rows: 8, columns: 11 },
      down: { row: 5, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
      quiz: {
        title: "Yellowstone Quiz",
        questions: [
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
        ]
      }
    };

    // NPC data for Octocat
    const sprite_src_octocat = path + "/images/gamify/npc3.png"; // Fix source path if different image
    const sprite_data_octocat = {
      id: 'Octocat',
      greeting: "Hello, traveler! Did you know Yellowstone is home to the largest concentration of geysers in the world?",
      src: sprite_src_octocat,
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 100,
      pixels: { height: 149, width: 538 },
      INIT_POSITION: { x: (width / 4), y: (height / 4) },
      orientation: { rows: 1, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
      quiz: {
        title: "Yellowstone Fun Facts Quiz",
        questions: [
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
        ]
      }
    };

    // List of objects definitions for this level
    this.objects = [
      { class: Background, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_tux },
      { class: Npc, data: sprite_data_octocat },
      { class: Key, data: key_data } // Only adding the key once
    ];
  }
}

export default GameLevelDesert;
