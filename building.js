Game.buildings = (function(){

    function UpdateCurrent(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.buildings.entries[id];
            if (obj.current == previous) {return;}
            var value = Game.settings.doFormat('current', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'current');
            previous = obj.current;
            return true;
        }
    }

    function UpdateCost(id) {
        var previous = -1;
        var id = id;
        this.update = function() {
            var obj = Game.buildings.entries[id];
            if (obj.cost == previous) {return;}
            var value = Game.settings.doFormat('cost', obj);
            Templates.uiFunctions.setClassText(value, obj.htmlId+'cost');
            previous = obj.cost;
            return true;
        }
    }

    var instance = {};

    instance.dataVersion = 1;
    instance.entries = {};
    instance.storageEntries = {};
    instance.updatePerSecondProduction = true;
    instance.buildingTypeCount = 0;
    instance.researchBuildingTypeCount = 0;
    instance.storageTypeCount = 0;

    instance.initialise = function() {
        for (var id in Game.buildingData) {
            var data = Game.buildingData[id];
            this.buildingTypeCount++;
            this.entries[id] = $.extend({}, data, {
                id: id,
                category: 'buildings',
                htmlId: 'resbld_'+id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true,
                ui_current: new UpdateCurrent(id),
                ui_cost: new UpdateCost(id),
            });            
        }

        for (var id in Game.storageBuildingData) {
            var data = Game.storageBuildingData[id];
            this.storageTypeCount++;
            this.storageEntries[id] = $.extend({}, data, {
                id: id,
                category: 'storageBuildings',
                htmlId: 'sto_'+id,
                current: 0,
                iconPath: Game.constants.iconPath,
                iconName: data.icon,
                iconExtension: Game.constants.iconExtension,
                max: data.maxCount,
                displayNeedsUpdate: true
            });
        }

        // this can be removed if rocketfuel producers get moved to buildings
        for(var id in Game.otherBuildingsData){
            var data = Game.otherBuildingsData[id];
        }

        console.debug("Loaded " + this.buildingTypeCount + " Building Types");
        console.debug("Loaded " + this.storageTypeCount + " Storage Types");
    };

    instance.update = function(delta) {};

    instance.save = function(data) {
        data.buildings = { v: this.dataVersion, i: {}};
        for(var key in this.entries) {
            data.buildings.i[key] = this.entries[key].current;
        }
    };

    instance.load = function(data) {
        if(data.buildings) {
            if(data.buildings.v && data.buildings.v === this.dataVersion) {
                for(var id in data.buildings.i) {
                    if(this.entries[id]) {
                        this.constructBuildings(id, data.buildings.i[id]);
                    }
                }
            }
        }
    };

    instance.buyStorageBuilding = function(id){
        var data = this.storageEntries[id];
        var resourcePass = 0;
        for(var resource in data.cost){
            var res = Game.resources.getResourceData(resource);
            if(res.current >= this.calcCost(data, resource, "storageBuildingData")){
                resourcePass += 1;
            }
        }
        if(resourcePass === Object.keys(data.cost).length){
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                res.current -= this.calcCost(data, resource, "storageBuildingData");
            }
            for(var resource in data.storage){
                Game.resources.entries[resource].capacity += data.storage[resource];
            }
            data.displayNeedsUpdate = true;
            Templates.uiFunctions.refreshElements('current', 'all');
            Templates.uiFunctions.refreshElements('capacity', resource);
        }
    }

    instance.updateCosts = function(id) {
        var cost = {};
        var obj = Game.buildingData[id].cost
        Object.keys(obj).forEach(function(c) {
            cost[c] = Math.floor(obj[c] * Math.pow(1.1, Game.buildings.entries[id].current))
        })
        Game.buildings.entries[id].cost = cost;
        Templates.uiFunctions.refreshElements('cost', id);
    }

    instance.buyBuildings = function(id, count){
        if (typeof id === 'undefined' || !(id in Game.buildings.entries)) {return false;}
        var data = Game.buildings.getBuildingData(id);
        for(var i = 0; i < (count || 1); i++){
            var resourcePass = 0;
            for(var resource in data.cost){
                var res = Game.resources.getResourceData(resource);
                if(res.current >= this.calcCost(data, resource, "buildingData")){
                    resourcePass += 1;
                }
            }
            if(resourcePass === Object.keys(data.cost).length){
                for(var resource in data.cost){
                    var res = Game.resources.getResourceData(resource);
                    res.current -= this.calcCost(data, resource, "buildingData");
                }
                this.updatePerSecondProduction = true;
                Templates.uiFunctions.refreshElements('persecond', 'all');
                if(data.onApply) {data.onApply();}
                this.constructBuildings(id, 1);
                this.updateCosts(id);
            } else {

                return;
            }
        }
        // Recalculate the cost for id
        
    };

    instance.calcCost = function(self, resource, data){
        return Math.floor(Game[data][self.id].cost[resource.toString()] * Math.pow(1.1,self.current));
    };

    instance.constructBuildings = function(id, count) {
        // Add the buildings and clamp to the maximum
        if(count == 0)
            return;
        count = count || 1;
        var newValue = Math.floor(this.entries[id].current + count);
        this.entries[id].current = Math.min(newValue, this.entries[id].max);
        Templates.uiFunctions.refreshElements('current', 'all');
        Templates.uiFunctions.refreshElements('persecond', 'all');
    };

    instance.destroyBuildings = function(id, count) {
        // Remove the buildings and ensure we can not go below 0
        count = count || 1;
        var newValue = Math.floor(this.entries[id].current - count);
        this.entries[id].current = Math.max(newValue, 0);
        this.entries[id].displayNeedsUpdate = true;
        this.updatePerSecondProduction = true;
        Templates.uiFunctions.refreshElements('current', id);
        Templates.uiFunctions.refreshElements('persecond', id);
    };

    instance.refreshBuildingCost = function(data){
        var segmentsCost = [];
        for(var resource in data.cost){
            if(data.storage != undefined)
                var segmentX = {n: Game.utils.capitaliseFirst(resource), p: Game.settings.format(this.calcCost(data, resource, "storageBuildingData"))};
            else var segmentX = {n: Game.utils.capitaliseFirst(resource), p: Game.settings.format(this.calcCost(data, resource, "buildingData"))};
            segmentsCost.push(segmentX);
        }
        var costHtml = "<span>Costs </span>";
        for(var i = 0; i < segmentsCost.length; i++){
            var segmentData = segmentsCost[i];
            var html = '<span>' + segmentData.p + " " + segmentData.n + '</span>';
            costHtml += html;
            if(i < segmentsCost.length - 1) {
                costHtml += '<span>, </span>';
            }
        }
        var target = $('#' + data.htmlId + '_cost');
        target.empty()
        target.append(costHtml);
        data.displayNeedsUpdate = false;
    }

    instance.unlock = function(id) {
        this.entries[id].unlocked = true;
        this.entries[id].displayNeedsUpdate = true;
    };

    instance.unlockStorage = function(id){
        this.storageEntries[id].unlocked = true;
        this.storageEntries[id].displayNeedsUpdate = true;
    }

    instance.refreshUnlock = function(data){
/* Handled by Templates.uiFunctions
        if(data.id.indexOf("rocketFuel") == -1){
            if(data.unlocked)
                $('#' + data.htmlId)[0].className = "";
            else
                $('#' + data.htmlId)[0].className = "hidden";
        } else {
            //console.log("rocketFuel")
        }
*/
    }

    instance.getBuildingData = function(id) {
        return this.entries[id];
    };

    return instance;
}());
