import Character from "./Character.js";
import GameEnv from "./GameEnv.js";
import Player from './Player.js';
import GameControl from "./GameControl.js";
import QuestSystem from "./QuestSystem.js";
import GameLevelDesert from "./GameLevelDesert.js";

class ScavengerObject extends Character{
    constructor(data = null) {
        super(data);
        
    }

    update() {
        this.draw();
        //destorys object when colliding with the player
        let touchingPlayer = this.isPlayerNear();
     
        if(touchingPlayer == true){
            this.destroy();
            console.log("Scavenger Object destroyed");
            console.log(GameEnv.gameObjects);
        }
            
    }

    isPlayerNear() {
        let objects = GameEnv.gameObjects
        for (let i = 0; i < objects.length; i++) {
            let object = objects[i];
            if (object instanceof Player) {
                this.isCollision(object);
                return this.collisionData.hit;
            }
            
        }

        const player = GameEnv.gameObjects.player; 
        return this.isCollision(player);
    }

    //stores the values for the scavenger objects and spawns in the object
   static getRandomObject(objectIDs){
        let width = GameEnv.innerWidth;
        let height = GameEnv.innerHeight;

        const path = GameControl.path;
        const soupObjectSrc = path + "/images/gamify/soup.png";//
        const rockObjectSrc = path + "/images/gamify/Rock.png";

for(let i = 0; i < objectIDs.length; i++){

    switch(objectIDs[i]){
        case "Soup":
            const Soup = new ScavengerObject({
                id: 'Soup',
                src: soupObjectSrc,
                greeting: "You have collected some soup",
                SCALE_FACTOR: 6,  // Adjust this based on your scaling needs
                ANIMATION_RATE: 60,
                pixels: { height: 882, width: 1356 },
                INIT_POSITION: { x: (width / 3.5), y: (height / 1.5) },
                orientation: { rows: 2, columns: 4 },
                down: { row: 0, start: 0, columns: 1 },  // This is the stationary NPC, down is default
                hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            });
            break;
        case "Rock":
            const Rock = new ScavengerObject({
                id: 'Rock',
                src: rockObjectSrc,
                greeting: "You have collected a cool rock!",
                SCALE_FACTOR: 8,  // Adjust this based on your scaling needs
                ANIMATION_RATE: 60,
                pixels: { height: 882, width: 1356 },
                INIT_POSITION: { x: (width / 2), y: (height / 4) },
                orientation: { rows: 2, columns: 4 },
                down: { row: 0, start: 0, columns: 1 },  // This is the stationary NPC, down is default
                hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
            });
            break;
            }
        }
    }
}

export default ScavengerObject;