Game.resources = (function(){

    // Every time perSecond of a material is impacted, run
    // Game.resources.entries[material].ui_perSecond.update(); per material (eg metal when buying a Miner)
    // Or run Templates.uiFunctions.refreshElements('perSecond', 'all') in case of, eg, a power outage
    // Alternatively, run Templates.uiFunctions.refreshElements('persecond', 'metal') for just one material.
    // !!! Update the objects perSecond before calling the update. !!!
    function UpdatePerSecond(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            if (obj.perSecond == previous) {return;}
            var value = Game.settings.doFormat('persecond', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'ps');
            previous = obj.perSecond;
            return true;
        }
    }
    var UpdateCurrent = function(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            if (obj.current == previous) {return;}
            var value = Game.settings.doFormat('current', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'current');
            previous = obj.current;
            return true;
        }
    }
    var UpdateCapacity = function(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.resources.entries[id];
            if (obj.capacity == previous) {return;}
            var value = Game.settings.doFormat('capacity', obj);
            Templates.uiFunctions.setClassText(value[0], obj.htmlId+'capacity');
            Templates.uiFunctions.setClassText(value[1], obj.htmlId+'nextStorage');
            // Storage cost
            if (id in Game.storageData.entries) {
                var cost = Game.storageData.entries[id].cost;
                var value = 0;
                // Find the inflation factor by comparing id's current cost with its base cost
                Object.keys(cost).forEach(c => {if (c == id) {value = cost[c]}});
                value = obj.current/value ; var newcost = {};
                // object with inflated costs
                Object.keys(cost).forEach(c => newcost[c] = cost[c]*value);
                console.log(newcost);
                value = Game.settings.doFormat('cost', {cost: newcost})
                console.log(value);
                Templates.uiFunctions.setClassText(value, obj.htmlId+'storageUpgrade_cost')
            }
            previous = obj.capacity;
            return true;
        }
    }

/*
    Templates.uiFunctions.refreshElements('gain', 'all');   // can get away with only calling after rebirth
    Templates.uiFunctions.refreshElements('nextStorage', 'all');// Can get away with only calling manually after storage bought
    Templates.uiFunctions.refreshElements('stoCount', 'all');   // Can get away with only calling manually after stobld bought
    Templates.uiFunctions.refreshElements('resbldCost', 'all'); // Can get away with only calling manually after building bought
    Templates.uiFunctions.refreshElements('stoCost', 'all');     // Can get away with only calling manually after stobld bought
    Templates.uiFunctions.refreshElements('storageTime', 'all');
    Templates.uiFunctions.refreshElements('storageCost', 'all');  // Can get away with only calling manually after storage bought
*/

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.categoryEntries = {};
    instance.storageUpgrades = {};
    instance.resourceTypeCount = 0;
    instance.resourceCategoryCount = 0;
    instance.storageUpgradeCount = 0;

    instance.initialise = function() {
        for (var id in Game.resourceData) {
            var data = Game.resourceData[id];
            this.resourceTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                resource: id,
                htmlId: 'res_' + id,
                current: 0,
                perSecond: 0,
                perSecondDisplay: 0,
                perClick: 1,
                iconPath: Game.constants.iconPath,
                iconExtension: Game.constants.iconExtension,
                displayNeedsUpdate: true,
                hidden: false,
                ui_persecond: new UpdatePerSecond(id),
                ui_current: new UpdateCurrent(id),
                ui_capacity: new UpdateCapacity(id),

            });
            this.entries[id].capacity = data.baseCapacity;
        }



        for (var id in Game.resourceCategoryData) {
            var data = Game.resourceCategoryData[id];
            this.resourceCategoryCount++;
            this.categoryEntries[id] = $.extend({}, data, {
                id: id
            });
        }

        for (var id in Game.storageData) {
            var data = Game.storageData[id];
            this.storageUpgradeCount++;
            this.storageUpgrades[id] = $.extend({}, data, {
                id: id,
                htmlId: "store_" + id
            });

        }

        console.debug("Loaded " + this.resourceCategoryCount + " Resource Categories");
        console.debug("Loaded " + this.resourceTypeCount + " Resource Types");
    };

    instance.update = function(delta) {
        for (var id in this.entries) {
            var data = this.entries[id];
            var addValue = data.perSecond * delta;
            this.addResource(id, addValue);
            Templates.uiFunctions.refreshElements('current', id);
        }
    };

    instance.save = function(data) {
        data.resources = { v: this.dataVersion, r: {}};
        for(var key in this.entries) {
            data.resources.r[key] = {
                n: this.entries[key].current,
                s: this.entries[key].capacity,
                u: this.entries[key].unlocked
            }
        }
    };

    instance.load = function(data) {
        console.log(data.resources)
        if(data.resources) {
            if(data.resources.v && data.resources.v === this.dataVersion) {
                for(var id in data.resources.r) {
                    if(this.entries[id]) {
                        this.addResource(id, data.resources.r[id].n);
                        this.entries[id].unlocked = data.resources.r[id].u;
                        if(typeof data.resources.r[id].capacity != undefined)
                            console.warn(data.resources.r[id])
                            this.entries[id].capacity = data.resources.r[id].s;
                    }
                }
            }
        } else {
            legacyLoad(data);
        }
    };

	instance.getResource = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].current
	};

	instance.getStorage = function(id) {
		if (id === RESOURCE.Science) {
			// -1 for unlimited storage
			return -1;
		} else if (id === RESOURCE.RocketFuel) {
			return -1;
		} else if (typeof Game.resources.entries[id] === 'undefined') {
			return 0;
		}
		return Game.resources.entries[id].capacity;
	};

	instance.getProduction = function(id) {
        //console.log("Checking: "+id)
		if (typeof this.entries[id] === 'undefined') {
			return 0;
		}
		return this.entries[id].perSecond;
	};

	instance.addResource = function(id, count, manual) {
		if(isNaN(count) || count === null || Math.abs(count) <= 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

        if(manual){
            Game.statistics.add("manualResources", count);
        }

		// Add the resource and clamp
		var newValue = this.entries[id].current + count;
		var storage = this.getStorage(id);
		if (storage >= 0) {
			this.entries[id].current = Math.max(0, Math.min(newValue, storage));
		} else {
			this.entries[id].current = Math.max(0, newValue);
		}
	};

	instance.takeResource = function(id, count) {
		if(isNaN(count) || count === null || Math.abs(count) == 0) {
			return;
		}

		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// Subtract the resource and clamp
		var newValue = this.entries[id].current - Math.abs(count);
		var storage = this.getStorage(id);
		if (storage >= 0) {
			this.entries[id].current = Math.max(0, Math.min(newValue, storage));
		} else {
			this.entries[id].current = Math.max(0, newValue);
		}
	};

	instance.maxResource = function(id) {
		if (typeof this.entries[id] === 'undefined') {
			return;
		}

		// resources without a storage cap will return -1 so do nothing
		if (getStorage(id) < 0) {
			return;
		}

		this.entries[id].current = getStorage(id);
	};

    instance.upgradeStorage = function(id){
        console.log(id)
        var res = this.getResourceData(id);
        var metal = this.getResourceData("metal");
        var lunarite = this.getResourceData("lunarite");
        // Adjust what {{item}}StorageUpgrade_Cost contains after upgrading
        //  Costs 5.033B Oil, 2.013B Metal. 
        // Adjust what <span id="{{item}}NextStorage"></span> contains as well
        if(res.current >= res.capacity*storagePrice){
            if(id == "metal"){
                res.current -= res.capacity*storagePrice;
                res.capacity *= 2;
                res.displayNeedsUpdate = true;
            } else if(id == "lunarite"){
                if(metal.current >= res.capacity*storagePrice*4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'metal');
                }
            } else if(id == "meteorite"){
                if(lunarite.current >= res.capacity*storagePrice*4){
                    res.current -= res.capacity*storagePrice;
                    lunarite.current -= res.capacity*storagePrice*4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'lunarite');
                }
            } else if(id != "oil" && id != "gem" && id != "charcoal" && id != "wood"){
                if(lunarite.current >= res.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    lunarite.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    lunarite.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                    Templates.uiFunctions.refreshElements('current', 'lunarite');
                }
            } else {
                if(metal.current >= res.capacity*storagePrice*0.4){
                    res.current -= res.capacity*storagePrice;
                    metal.current -= res.capacity*storagePrice*0.4;
                    res.capacity *= 2;
                    res.displayNeedsUpdate = true;
                    metal.displayNeedsUpdate = true;
                    Templates.uiFunctions.refreshElements('storage', id);
                    Templates.uiFunctions.refreshElements('current', id);
                }
            }
        }
    };

    instance.refreshStorage = function(resource){
        var res = Game.resources.entries[resource]
        var cap = res.baseCapacity
        for(var id in Game.buildings.storageEntries){
            var data = Game.buildings.storageEntries[id];
            for(var storageResource in data.storage){
                if(storageResource == resource){
                    cap += data.storage[resource] * data.current;
                }
            }
        }
        res.capacity = cap;
        res.displayNeedsUpdate = true;
    };


    instance.calcAllBuildingProduction = function() {
        var energyBonus = 0;
        var productionBonus = 0;
    }

    instance.updateResourcesPerSecond = function(){
        var perSecondMultiplier = 1 + (Game.tech.entries.resourceEfficiencyResearch.current * 0.01)
        var energyDiff = 0;
        var energy = Game.resources.entries.energy;
        for(var resource in this.entries){
            var res = this.entries[resource];
            var ps = 0;
            for(var id in Game.buildings.entries){
                var building = Game.buildings.entries[id];
                if(building.current == 0) {
                    // Nothing to be done
                    continue;
                }
                for(var value in building.resourcePerSecond){
                    if(value == resource){
                        var val = building.resourcePerSecond[value];
                        if(resource != "science" && resource != "rocketFuel" && resource != "energy"){
                            if(energy.current > energy.perSecond*-1 && energy.perSecond < 0){
                                ps += val * building.current * perSecondMultiplier * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                            } else {
                                if(id.indexOf("T1") != -1){
                                    ps += val * building.current * perSecondMultiplier * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                                } else {
                                    energyDiff += building.current * building.resourcePerSecond["energy"];
                                }
                            }
                        } else {
                            ps += val * building.current * (1 + Game.stargaze.entries.darkMatter.current * dmBoost);
                        }
                    }
                }
            }
            res.perSecond = ps;
        }
        energy.perSecond -= energyDiff;
        Templates.uiFunctions.refreshElements('perSecond', 'all');
    };

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
        newUnlock('resources');
    };

    instance.getResourceData = function(id) {
        return this.entries[id];
    };

    instance.getCategoryData = function(id) {
        return this.categoryEntries[id];
    };

    instance.showByCategory = function(category) {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.category === category) {
                data.hidden = false;
            }
        }
    };

    instance.hideByCategory = function(category) {
        for(var id in this.entries) {
            var data = this.entries[id];
            if(data.category === category) {
                data.hidden = true;
            }
        }
    };

    return instance;
}());