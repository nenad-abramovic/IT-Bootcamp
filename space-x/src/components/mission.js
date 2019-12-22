class Mission {
    constructor({ mission_name, launch_year, launch_date_local, rocket, launch_site, links }) {
        this.node = document.createElement('mission');
        this.missionName = mission_name;
        this.launchYear = launch_year;
        this.launchDate = launch_date_local;
        this.rocketName = rocket.rocket_name;
        this.launchSite = launch_site.site_name;
        this.image = links.mission_patch;

        this.txtMissionName = document.createElement('label');
        this.txtMissionName.textContent = this.missionName;

        this.txtLaunchYear = document.createElement('label');
        this.txtLaunchYear.textContent = this.launchYear;

        this.txtLaunchDate = document.createElement('label');
        this.txtLaunchDate.textContent = this.launchDate;

        this.txtRocketName = document.createElement('label');
        this.txtRocketName.textContent = this.rocketName;

        this.txtLaunchSite = document.createElement('label');
        this.txtLaunchSite.textContent = this.launchSite;
        
        if (this.image != null) {
            this.imgImage = document.createElement('img');
            this.imgImage.src = this.image;
            this.node.appendChild(this.imgImage);
        }

        this.node.appendChild(this.txtMissionName);
        this.node.appendChild(this.txtLaunchYear);
        this.node.appendChild(this.txtLaunchDate);
        this.node.appendChild(this.txtRocketName);
        this.node.appendChild(this.txtLaunchSite);
    }
    getNode() {
        return this.node;
    }
}

export {
    Mission
};