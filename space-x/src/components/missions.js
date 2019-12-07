import { getAllLaunches } from "../utilities/space-x-service";
import { Mission } from "./mission";

class Missions {
    constructor() {
        this.node = document.createElement('missions');

        getAllLaunches()
        .then(missions => {
            missions =  missions.filter(elem => {
                return elem.links.mission_patch != null;
            })
            missions.forEach( mission => {
                let msn = new Mission(mission);
                this.node.appendChild(msn.getNode());
            })
        })
    }
    getNode() {
        return this.node;
    }
}

export {
    Missions
};