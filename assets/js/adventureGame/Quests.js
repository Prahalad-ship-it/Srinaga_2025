import GameEnv from "./GameEnv.js";
import { QuestSystem } from './QuestSystem.js';

class Quest {
    constructor(name, id, values) {
        this.Name = name;
        this.ID = id;
        this.Type = values.Type;
        this.TypeOValues = values;
        this.Completed = false;
        this.Activated = false;
    }

    static createQuest(name, id, values) {
        return new Quest(name, id, values);
    }

    static updateQuest(quest, objectID) {
        // this function gets called repeatedly
        if (quest.Type === "NPCtalks") {
            for (let j = 0; j < quest.TypeOValues.NPCsToTalkTo.length; j++) {
                const npcID = quest.TypeOValues.NPCsToTalkTo[j];
                if (npcID === objectID) {
                    // add logic for when the quest is completed
                    quest.TypeOValues.NPCsToTalkTo.splice(j, 1);
                    console.log(`NPC ${npcID} was talked to. Quest progress updated`);
                    console.log(quest);

                    if (quest.TypeOValues.NPCsToTalkTo.length === 0) {
                        quest.Completed = true;
                        quest.Activated = false;
                        console.log(`Quest completed ${quest.Name}`);
                        QuestSystem.message(`Quest completed ${quest.Name}`);
                    }
                }
            }
        }

        if (quest.Type === "Scavenger") {
            for (let jj = 0; jj < quest.TypeOValues.itemsToFind.length; jj++) {
                const itemID = quest.TypeOValues.itemsToFind[jj];
                if (itemID === objectID) {
                    // add logic for when the quest is completed
                    quest.TypeOValues.itemsToFind.splice(jj, 1);
                    console.log(`Item ${itemID} was found. Quest progress updated`);
                    if (quest.TypeOValues.itemsToFind.length === 0) {
                        quest.Completed = true;
                        quest.Activated = false;
                        console.log(`Quest completed ${quest.Name}`);
                        QuestSystem.message(`Quest completed ${quest.Name}`);
                    }
                }
            }
        }
    }

    static scavengerQuest(itemsToFind) {
        const values = {
            Type: "Scavenger",
            itemsToFind: itemsToFind
        };

        return values;
    }

    static npcQuest(NPCsToTalkTo) {
        const values = {
            Type: "NPCtalks",
            NPCsToTalkTo: NPCsToTalkTo,
        };
        return values;
    }
}

export default Quest;