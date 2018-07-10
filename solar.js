Game.solar = (function(){

    var instance = {};

    instance.entries = {};
    instance.categoryEntries = {};
    instance.solarTypeCount = 0;
    instance.tabUnlocked = false;

    instance.initialise = function(){
    	for (var id in Game.solarData) {
            var data = Game.solarData[id];
            this.solarTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                htmlId: 'solar_' + id,
                current: 0,
                perSecond: 0,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false
            });
        }
    };

    instance.update = function(){

    };

    instance.save = function(){

    };

    instance.load = function(){
    	
    };

    instance.explore = function(location){
    	var data = this.entries[location];
    	if(Game.resources.entries.rocketFuel.current >= data.cost.rocketFuel && !data.explored){
    		Game.resources.entries.rocketFuel.current -= data.cost.rocketFuel;
    		data.explored = true;
    		if(data.resource){
    			for(var i = 0; i < data.resource.length; i++){
    				Game.resources.unlock(data.resource[i]);
    			}
    		}
    		if(data.location){
    			for(var i = 0; i < data.location.length; i++){
    				this.unlock(data.location[i]);
    			}
    		}
    		if(location == "wonderStation"){
    			Game.wonder.tabUnlocked = true;
    			newUnlock("wonder");
				Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
    		}
    		if(location == "solCenter"){
    			Game.solCenter.tabUnlocked = true;
    			newUnlock("solCenter");
				Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
    		}
    	}
    };

    instance.unlock = function(location){
    	this.entries[location].unlocked = true;
    	this.entries[location].displayNeedsUpdate = true;
    }

    return instance;
}());


// Solar System Tab

function updateFuelProductionCost(){
    chemicalPlantOilCost = Math.floor(500 * Math.pow(1.1,chemicalPlant));
    chemicalPlantGemCost = Math.floor(750 * Math.pow(1.1,chemicalPlant));
    chemicalPlantMetalCost = Math.floor(1000 * Math.pow(1.1,chemicalPlant));

    oxidisationOilCost = Math.floor(6800 * Math.pow(1.1,oxidisation));
    oxidisationGemCost = Math.floor(8300 * Math.pow(1.1,oxidisation));
    oxidisationMetalCost = Math.floor(12000 * Math.pow(1.1,oxidisation));

    hydrazineGoldCost = Math.floor(78600 * Math.pow(1.1,hydrazine));
    hydrazineSiliconCost = Math.floor(96300 * Math.pow(1.1,hydrazine));
    hydrazineTitaniumCost = Math.floor(140000 * Math.pow(1.1,hydrazine));
}

function getRocket(){
	if(metal >= 1200 && gem >= 900 && oil >= 1000){
		metal -= 1200;
		gem -= 900;
		oil -= 1000;
		rocket = 1;
		document.getElementById("rocket").innerHTML = "Built";
		document.getElementById("rocketRocketCost").className = "";
		document.getElementById("solarRocket").className = "hidden";
	}
}

function launchRocket(){
	if(rocket >= 1 && getResource(RESOURCE.RocketFuel) >= 20){
		Game.resources.takeResource(RESOURCE.RocketFuel, 20);
		rocket -= 1;
		document.getElementById("spaceRocket").className = "hidden";
		document.getElementById("collapseInner").className ="collapseInner";
		document.getElementById("moon").className = "inner";
		document.getElementById("mercury").className = "inner";
		document.getElementById("venus").className = "inner";
		document.getElementById("mars").className = "inner";
		document.getElementById("asteroidBelt").className = "inner";
		rocketLaunched = true;
	}
}

function explore(planet){
	var planetsData = {
		Moon: {fuel: 20, area: "innerPlanet", resource: "lunarite"},
		Venus: {fuel: 50, area: "innerPlanet", resource: "methane"},
		Mars: {fuel: 80, area: "innerPlanet", resource: "titanium,silicon"},
		AsteroidBelt: {fuel: 200, area: "innerPlanet", resource: "gold,silver"},
		WonderStation: {fuel: 500},
		Jupiter: {fuel: 1000, area: "outerPlanet", resource: "hydrogen"},
		Saturn: {fuel: 2000, area: "outerPlanet", resource: "helium"},
		Pluto: {fuel: 5000, area: "outerPlanet", resource: "ice"},
		KuiperBelt: {fuel: 6000, area: "outerPlanet"},
		SolCenter: {fuel: 7000}
	};

	if(!planetsData[planet]) return console.error("Cannot explore \"" + planet + "\", data not found.");
	if (getResource(RESOURCE.RocketFuel) >= planetsData[planet].fuel) {
		Game.resources.takeResource(RESOURCE.RocketFuel, planetsData[planet].fuel);
		document.getElementById("explore" + planet).className = "hidden";
		buttonsHidden.push("explore" + planet);
		explored.push(planet.substring(0, 1).toLowerCase() + planet.substring(1));

		// Planet/Area specific code
		switch(planet) {
			case "Moon":
				document.getElementById("collapseInnerPlanet").className = "collapseInnerPlanet";
				resourcesUnlocked.push("collapseInnerPlanet");
				break;
			case "Venus":
				document.getElementById("methanePower").className = "";
				resourcesUnlocked.push("methanePower");
				break;
			case "AsteroidBelt":
				document.getElementById("wonderStation").className = "inner";
				document.getElementById("collapseOuter").className = "collapseOuter";
				document.getElementById("jupiter").className = "outer";
				document.getElementById("saturn").className = "outer";
				document.getElementById("uranus").className = "outer";
				document.getElementById("neptune").className = "outer";
				document.getElementById("pluto").className = "outer";
				document.getElementById("kuiperBelt").className = "outer";
				break;
			case "WonderStation":
				document.getElementById("wonderTab").className = "";
				tabsUnlocked.push("wonderTab");
				Game.statistics.add('tabsUnlocked');
				newUnlock("wonder");
				Game.notifySuccess("New Tab!", "You've unlocked the Wonders Tab!");
				break;
			case "Jupiter":
				document.getElementById("collapseOuterPlanet").className = "collapseOuterPlanet";
				document.getElementById("fusionPower").className = "";
				resourcesUnlocked.push("collapseOuterPlanet", "fusionPower");
				break;
			case "KuiperBelt":
				document.getElementById("solCenter").className = "outer";
				resourcesUnlocked.push("solCenter");
				refreshResources();
				break;
			case "SolCenter":
				document.getElementById("solCenterTopTab").className = "";
				resourcesUnlocked.push("solCenterTopTab");
				refreshResources();
				Game.statistics.add('tabsUnlocked');
				newUnlock("solCenter");
				Game.notifySuccess("New Tab!", "You've unlocked the Sol Center Tab!");
				break;
		}

		// Resource(s)
		if (planetsData[planet].resource) {
			var toAdd = planetsData[planet].resource.split(',');
			for(var i = 0; i < toAdd.length; i++) {
				switch(Game.resourceData[toAdd[i]].category) {
					case "earth":
						document.getElementById(toAdd[i] + "Nav").className = "earth";
						break;
					case "innerSol":
						document.getElementById(toAdd[i] + "Nav").className = "innerPlanet";
						break;
					case "outerSol":
						document.getElementById(toAdd[i] + "Nav").className = "outerPlanet";
						break;
					default:
						// Should never happen
						throw new Error("Invalid resource area: \"" + Game.resourceData[toAdd[i]].category + "\" while unlocking resource \"" + toAdd[i] + "\"");
				}
				resourcesUnlocked.push(toAdd[i] + "Nav");
			}
			refreshResources();
			newUnlock("resources");
			Game.statistics.add('resourcesUnlocked', toAdd.length);
		}
		Game.statistics.add('placesExplored');
	}
}
