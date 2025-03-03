import Character from "./Character.js";
import GameEnv from "./GameEnv.js";
import Player from './Player.js';
import GameControl from "./GameControl.js";
import QuestSystem from "./QuestObject.js";
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
        const rockObjectSrc = path + "/images/gamify/stone.png";

for(let i = 0; i < objectIDs.length; i++){

    switch(objectIDs[i]){
            }
        }
    }
}

export default ScavengerObject;