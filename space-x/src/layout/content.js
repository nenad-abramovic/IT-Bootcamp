import { Missions } from "../components/missions";

class Content {
    constructor() {
        this.node = document.createElement('main');

        this.missions = new Missions();

        this.node.appendChild(this.missions.getNode());
    }

    getNode() {
        return this.node;
    }
}

export {
    Content
};