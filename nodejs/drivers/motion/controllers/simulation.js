'use strict';

class SimulationController {
	constructor(props) {
		this.name = "simulation";
        this.name = "Simulated Treadmill Control";
        this.devicePath = "experience";
        this.description = "A simulated treadmill motion controller for testing";
        this.simulation = true;
        this.devices = [this];
        this.driver = {};
        this.depends = ["motion/controllers"];
	}

	probe() {
		// simulation always available
		return true;
	}

	enable() {
		return true;
	}

	disable() {
		return true;
	}

	// TODO: possibly we should be returning a promise here if actions do not immediately happen. I.e. when we issue a stop the controller
	// begins slowing down and then executes the promise when the machine is completely stopped.

	speed(val) {
        if (val === undefined || val === null || typeof val != "Number") {
            console.trace("invalid speed value given");
    	} else {
            console.log("speed => " + Number(val).toFixed(2));
        }
		return true;
	}

	stop() {
		console.log("stop");
		return true;
	}


};

module.exports = SimulationController;

