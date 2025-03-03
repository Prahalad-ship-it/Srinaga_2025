import Quest from "./Quests.js";
export class QuestSystem {
    static quests = []; // This contains all the quests that are currently active, mainly contains current level quests

    constructor() {}

    static load() {
        // Used for debugging from the Md file
        console.log("Loading quest system");
    }

    static addQuest(questObject) {
        this.quests.push(questObject);
        console.log("Quest added: ", questObject.Name);
        console.log(this.quests);
    }

    static interactionChecks(objectID) {
        // This function gets called repeatedly per second
        for (let i = 0; i < this.quests.length; i++) {
            let quest = this.quests[i];
            if (quest.Activated === false) {
                continue;
            }

            if (quest.Type === "NPCtalks") {
                Quest.updateQuest(quest, objectID);
            }
            if(quest.Type === "Scavenger"){
                Quest.updateQuest(quest, objectID)
            }

        }
    }

    static message(text, goBacktoOGText){
        const TextBox = document.getElementById("questMessage")
        const originalText = TextBox.innerHTML
        TextBox.innerHTML = text
        if(goBacktoOGText){
            setTimeout(() => {
                TextBox.innerHTML = originalText
            }, 2000);
        }
    }

}

export default QuestSystem;