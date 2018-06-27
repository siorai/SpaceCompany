Game.achievementsCategoryData = (function () {

	var instance = {};
		
	instance.resources = {
		title: 'Resources',
		brackets: [50, 5000, 500000, 50000000, 5000000000],
		entries: [
			'resUranium', 'resLava',
			'resOil', 'resMetal', 'resGems', 'resCharcoal', 'resWood', 'resSilicon',
			'resLunarite', 'resMethane', 'resTitanium', 'resGold', 'resSilver',
			'resHydrogen', 'resHelium', 'resIce', 'resMeteorite',
			'resScience', 'resRocketFuel' ]
	};
		
	instance.producers = {
		title: 'Producers',
		brackets: [10, 50, 100, 500, 1000],
		entries: [
			'prodPlasma1', 'prodPlasma2',
			'prodEnergy1', 'prodEnergy2', 'prodEnergy3', 'prodEnergy4', 'prodEnergy5', 'prodEnergy6',
			'prodUranium1', 'prodUranium2', 'prodUranium3', 'prodUranium4',
			'prodLava1', 'prodLava2', 'prodLava3', 'prodLava4',
			
			'prodOil1', 'prodOil2', 'prodOil3', 'prodOil4',
			'prodMetal1', 'prodMetal2', 'prodMetal3', 'prodMetal4',
			'prodGems1', 'prodGems2', 'prodGems3', 'prodGems4',
			'prodCharcoal1', 'prodCharcoal2', 'prodCharcoal3', 'prodCharcoal4',
			'prodWood1', 'prodWood2', 'prodWood3', 'prodWood4',
			'prodSilicon1', 'prodSilicon2', 'prodSilicon3', 'prodSilicon4',
			
			'prodLunarite1', 'prodLunarite2', 'prodLunarite3', 'prodLunarite4',
			'prodMethane1', 'prodMethane2', 'prodMethane3', 'prodMethane4',
			'prodTitanium1', 'prodTitanium2', 'prodTitanium3', 'prodTitanium4',
			'prodGold1', 'prodGold2', 'prodGold3', 'prodGold4',
			'prodSilver1', 'prodSilver2', 'prodSilver3', 'prodSilver4',
			
			'prodHydrogen1', 'prodHydrogen2', 'prodHydrogen3', 'prodHydrogen4',
			'prodHelium1', 'prodHelium2', 'prodHelium3', 'prodHelium4',
			'prodIce1', 'prodIce2', 'prodIce3', 'prodIce4',
			'prodMeteorite1', 'prodMeteorite2', 'prodMeteorite3', 'prodMeteorite4',
			
			'prodScience1', 'prodScience2', 'prodScience3', 'prodScience4',
			'prodRocketFuel1', 'prodRocketFuel2', 'prodRocketFuel3',
			'prodDyson1', 'prodDyson2' ]
			

	};

	return instance;

}());

Game.achievementsData = (function(){

	var instance = {};
	
	/**************
	** Resources **
	**************/

	instance.resUranium = {
		id_v4: 'ach_12',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'uraniumIcon',
		title: 'Collect %s Uranium',
		evaluator: function(x) { return getResource(RESOURCE.Uranium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Uranium) / x }
	};
	
	instance.resLava = {
		id_v4: 'ach_13',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'lavaIcon',
		title: 'Collect %s Lava',
		evaluator: function(x) { return getResource(RESOURCE.Lava) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Lava) / x }
	};
	
	instance.resOil = {
		id_v4: 'ach_5',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'oilIcon',
		title: 'Collect %s Oil',
		evaluator: function(x) { return getResource(RESOURCE.Oil) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Oil) / x }
	};
	
	instance.resMetal = {
		id_v4: 'ach_0',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'metalIcon',
		title: 'Collect %s Metal',
		evaluator: function(x) { return getResource(RESOURCE.Metal) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Metal) / x }
	};
	
	instance.resGems = {
		id_v4: 'ach_1',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'gemIcon',
		title: 'Collect %s Gems',
		evaluator: function(x) { return getResource(RESOURCE.Gem) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Gem) / x }
	};

	instance.resCharcoal = {
		id_v4: 'ach_3',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'charcoalIcon',
		title: 'Collect %s Charcoal',
		evaluator: function(x) { return getResource(RESOURCE.Charcoal) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Charcoal) / x }
	};

	instance.resWood = {
		id_v4: 'ach_2',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'woodIcon',
		title: 'Collect %s Wood',
		evaluator: function(x) { return getResource(RESOURCE.Wood) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Wood) / x }
	};

	instance.resSilicon = {
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'siliconIcon',
		title: 'Collect %s Silicon',
		evaluator: function(x) { return getResource(RESOURCE.Silicon) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Silicon) / x }
	};

	instance.resLunarite = {
		id_v4: 'ach_7',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'lunariteIcon',
		title: 'Collect %s Lunarite',
		evaluator: function(x) { return getResource(RESOURCE.Lunarite) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Lunarite) / x }
	};
	
	instance.resMethane = {
		id_v4: 'ach_8',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'methaneIcon',
		title: 'Collect %s Methane',
		evaluator: function(x) { return getResource(RESOURCE.Methane) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Methane) / x }
	};
	
	instance.resTitanium = {
		id_v4: 'ach_9',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'titaniumIcon',
		title: 'Collect %s Titanium',
		evaluator: function(x) { return getResource(RESOURCE.Titanium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Titanium) / x }
	};
	
	instance.resGold = {
		id_v4: 'ach_10',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'goldIcon',
		title: 'Collect %s Gold',
		evaluator: function(x) { return getResource(RESOURCE.Gold) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Gold) / x }
	};
	
	instance.resSilver = {
		id_v4: 'ach_11',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'silverIcon',
		title: 'Collect %s Silver',
		evaluator: function(x) { return getResource(RESOURCE.Silver) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Silver) / x }
	};
	
	instance.resHydrogen = {
		id_v4: 'ach_14',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'hydrogenIcon',
		title: 'Collect %s Hydrogen',
		evaluator: function(x) { return getResource(RESOURCE.Hydrogen) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Hydrogen) / x }
	};
	
	instance.resHelium = {
		id_v4: 'ach_15',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'heliumIcon',
		title: 'Collect %s Helium',
		evaluator: function(x) { return getResource(RESOURCE.Helium) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Helium) / x }
	};
	
	instance.resIce = {
		id_v4: 'ach_16',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'iceIcon',
		title: 'Collect %s Ice',
		evaluator: function(x) { return getResource(RESOURCE.Ice) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Ice) / x }
	};
	
	instance.resMeteorite = {
		id_v4: 'ach_17',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'meteoriteIcon',
		title: 'Collect %s Meteorite',
		evaluator: function(x) { return getResource(RESOURCE.Meteorite) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Meteorite) / x }
	};
	
	instance.resScience = {
		id_v4: 'ach_4',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'technologyIcon',
		title: 'Collect %s Science',
		evaluator: function(x) { return getResource(RESOURCE.Science) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.Science) / x }
	};

	instance.resRocketFuel = {
		id_v4: 'ach_6',
		categoryInstance: Game.achievementsCategoryData.resources,
		iconName: 'rocketFuelIcon',
		title: 'Collect %s Rocket Fuel',
		evaluator: function(x) { return getResource(RESOURCE.RocketFuel) >= x },
		progressEvaluator: function(x) { return getResource(RESOURCE.RocketFuel) / x }
	};
	
	/**************
	** Producers **
	**************/

	instance.prodEnergy1 = {
		id_v4: 'ach_18',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Charcoal Engines',
		evaluator: function(x) { return charcoalEngine >= x },
		progressEvaluator: function(x) { return charcoalEngine/x }
	};

	instance.prodEnergy2 = {
		id_v4: 'ach_19',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Solar Panels',
		evaluator: function(x) { return solarPanel >= x },
		progressEvaluator: function(x) { return solarPanel/x }
	};

	instance.prodEnergy3 = {
		id_v4: 'ach_20',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Methane Power Stations',
		evaluator: function(x) { return methaneStation >= x },
		progressEvaluator: function(x) { return methaneStation/x }
	};

	instance.prodEnergy4 = {
		id_v4: 'ach_22',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Nuclear Power Stations',
		evaluator: function(x) { return nuclearStation >= x },
		progressEvaluator: function(x) { return nuclearStation/x }
	};

	instance.prodEnergy5 = {
		id_v4: 'ach_23',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Magmatic Dynamos',
		evaluator: function(x) { return magmatic >= x },
		progressEvaluator: function(x) { return magmatic/x }
	};

	instance.prodEnergy6 = {
		id_v4: 'ach_21',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Fusion Reactors',
		evaluator: function(x) { return fusionReactor >= x },
		progressEvaluator: function(x) { return fusionReactor/x }
	};

	instance.prodPlasma1 = {
		id_v4: 'ach_24',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: 'Own %s Super-Heaters',
		evaluator: function(x) { return heater >= x },
		progressEvaluator: function(x) { return heater/x }
	};

	instance.prodPlasma2 = {
		id_v4: 'ach_25',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: 'Own %s Plasmatic Pits',
		evaluator: function(x) { return plasmatic >= x },
		progressEvaluator: function(x) { return plasmatic/x }
	};

	instance.prodPlasma3 = {
		id_v4: 'ach_102',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'plasmaIcon',
		title: 'Own %s Electron Baths',
		evaluator: function(x) { return bath >= x },
		progressEvaluator: function(x) { return bath/x }
	};

	instance.prodUranium1 = {
		id_v4: 'ach_70',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: 'Own %s Grinders',
		evaluator: function(x) { return grinder >= x },
		progressEvaluator: function(x) { return grinder/x }
	};

	instance.prodUranium2 = {
		id_v4: 'ach_71',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: 'Own %s Cubic Teleposers',
		evaluator: function(x) { return cubic >= x },
		progressEvaluator: function(x) { return cubic/x }
	};

	instance.prodUranium3 = {
		id_v4: 'ach_72',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: 'Own %s Uranium Enrichers',
		evaluator: function(x) { return enricher >= x },
		progressEvaluator: function(x) { return enricher/x }
	};

	instance.prodUranium4 = {
		id_v4: 'ach_73',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'uraniumIcon',
		title: 'Own %s Yellowcake Recyclers',
		evaluator: function(x) { return recycler >= x },
		progressEvaluator: function(x) { return recycler/x }
	};

	instance.prodLava1 = {
		id_v4: 'ach_74',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: 'Own %s Heat Resistant Crucibles',
		evaluator: function(x) { return crucible >= x },
		progressEvaluator: function(x) { return crucible/x }
	};

	instance.prodLava2 = {
		id_v4: 'ach_75',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: 'Own %s Lava Extractors',
		evaluator: function(x) { return extractor >= x },
		progressEvaluator: function(x) { return extractor/x }
	};

	instance.prodLava3 = {
		id_v4: 'ach_76',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: 'Own %s Igneous Extruders',
		evaluator: function(x) { return extruder >= x },
		progressEvaluator: function(x) { return extruder/x }
	};

	instance.prodLava4 = {
		id_v4: 'ach_77',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lavaIcon',
		title: 'Own %s Volcanic Veluptuators',
		evaluator: function(x) { return veluptuator >= x },
		progressEvaluator: function(x) { return veluptuator/x }
	};

	instance.prodOil1 = {
		id_v4: 'ach_30',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: 'Own %s Small Pumps',
		evaluator: function(x) { return pump >= x },
		progressEvaluator: function(x) { return pump/x }
	};

	instance.prodOil2 = {
		id_v4: 'ach_31',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: 'Own %s Pumpjacks',
		evaluator: function(x) { return pumpjack >= x },
		progressEvaluator: function(x) { return pumpjack/x }
	};

	instance.prodOil3 = {
		id_v4: 'ach_32',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: 'Own %s Oil Fields',
		evaluator: function(x) { return oilField >= x },
		progressEvaluator: function(x) { return oilField/x }
	};

	instance.prodOil4 = {
		id_v4: 'ach_33',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'oilIcon',
		title: 'Own %s Offshore Rigs',
		evaluator: function(x) { return oilRig >= x },
		progressEvaluator: function(x) { return oilRig/x }
	};

	instance.prodMetal1 = {
		id_v4: 'ach_34',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: 'Own %s Miners',
		evaluator: function(x) { return miner >= x },
		progressEvaluator: function(x) { return miner/x }
	};

	instance.prodMetal2 = {
		id_v4: 'ach_35',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: 'Own %s Heavy Drills',
		evaluator: function(x) { return heavyDrill >= x },
		progressEvaluator: function(x) { return heavyDrill/x }
	};

	instance.prodMetal3 = {
		id_v4: 'ach_36',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: 'Own %s Giga Drills',
		evaluator: function(x) { return gigaDrill >= x },
		progressEvaluator: function(x) { return gigaDrill/x }
	};

	instance.prodMetal4 = {
		id_v4: 'ach_37',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'metalIcon',
		title: 'Own %s Quantum Drills',
		evaluator: function(x) { return quantumDrill >= x },
		progressEvaluator: function(x) { return quantumDrill/x }
	};

	instance.prodGems1 = {
		id_v4: 'ach_38',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: 'Own %s Gem Miners',
		evaluator: function(x) { return gemMiner >= x },
		progressEvaluator: function(x) { return gemMiner/x }
	};

	instance.prodGems2 = {
		id_v4: 'ach_39',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: 'Own %s Advanced Drills',
		evaluator: function(x) { return advancedDrill >= x },
		progressEvaluator: function(x) { return advancedDrill/x }
	};

	instance.prodGems3 = {
		id_v4: 'ach_40',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: 'Own %s Diamond Encrusted Drills',
		evaluator: function(x) { return diamondDrill >= x },
		progressEvaluator: function(x) { return diamondDrill/x }
	};

	instance.prodGems4 = {
		id_v4: 'ach_41',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'gemIcon',
		title: 'Own %s Carbyne Drills',
		evaluator: function(x) { return carbyneDrill >= x },
		progressEvaluator: function(x) { return carbyneDrill/x }
	};

	instance.prodCharcoal1 = {
		id_v4: 'ach_26',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'charcoalIcon',
		title: 'Own %s Woodburners',
		evaluator: function(x) { return woodburner >= x },
		progressEvaluator: function(x) { return woodburner/x }
	};

	instance.prodCharcoal2 = {
		id_v4: 'ach_27',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'charcoalIcon',
		title: 'Own %s Furnaces',
		evaluator: function(x) { return furnace >= x },
		progressEvaluator: function(x) { return furnace/x }
	};

	instance.prodCharcoal3 = {
		id_v4: 'ach_28',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'charcoalIcon',
		title: 'Own %s Industrial Kilns',
		evaluator: function(x) { return kiln >= x },
		progressEvaluator: function(x) { return kiln/x }
	};

	instance.prodCharcoal4 = {
		id_v4: 'ach_29',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'charcoalIcon',
		title: 'Own %s Forest Fryers',
		evaluator: function(x) { return fryer >= x },
		progressEvaluator: function(x) { return fryer/x }
	};

	instance.prodWood1 = {
		id_v4: 'ach_42',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: 'Own %s Woodcutters',
		evaluator: function(x) { return woodcutter >= x },
		progressEvaluator: function(x) { return woodcutter/x }
	};

	instance.prodWood2 = {
		id_v4: 'ach_43',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: 'Own %s Laser Cutters',
		evaluator: function(x) { return laserCutter >= x },
		progressEvaluator: function(x) { return laserCutter/x }
	};

	instance.prodWood3 = {
		id_v4: 'ach_44',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: 'Own %s Mass Deforesters',
		evaluator: function(x) { return deforester >= x },
		progressEvaluator: function(x) { return deforester/x }
	};

	instance.prodWood4 = {
		id_v4: 'ach_45',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'woodIcon',
		title: 'Own %s Biomass Infusers',
		evaluator: function(x) { return infuser >= x },
		progressEvaluator: function(x) { return infuser/x }
	};

	instance.prodSilicon1 = {
		id_v4: 'ach_54',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: 'Own %s Empowered Blowtorches',
		evaluator: function(x) { return blowtorch >= x },
		progressEvaluator: function(x) { return blowtorch/x }
	};

	instance.prodSilicon2 = {
		id_v4: 'ach_55',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: 'Own %s Seaside Scorchers',
		evaluator: function(x) { return scorcher >= x },
		progressEvaluator: function(x) { return scorcher/x }
	};

	instance.prodSilicon3 = {
		id_v4: 'ach_56',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: 'Own %s Beach Annihilators',
		evaluator: function(x) { return annihilator >= x },
		progressEvaluator: function(x) { return annihilator/x }
	};

	instance.prodSilicon4 = {
		id_v4: 'ach_57',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'siliconIcon',
		title: 'Own %s Desert Destroyers',
		evaluator: function(x) { return desert >= x },
		progressEvaluator: function(x) { return desert/x }
	};

	instance.prodLunarite1 = {
		id_v4: 'ach_46',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: 'Own %s Native Moon Workers',
		evaluator: function(x) { return moonWorker >= x },
		progressEvaluator: function(x) { return moonWorker/x }
	};

	instance.prodLunarite2 = {
		id_v4: 'ach_47',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: 'Own %s Low-Gravity Drills',
		evaluator: function(x) { return moonDrill >= x },
		progressEvaluator: function(x) { return moonDrill/x }
	};

	instance.prodLunarite3 = {
		id_v4: 'ach_48',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: 'Own %s Moon Quarries',
		evaluator: function(x) { return moonQuarry >= x },
		progressEvaluator: function(x) { return moonQuarry/x }
	};

	instance.prodLunarite4 = {
		id_v4: 'ach_49',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'lunariteIcon',
		title: 'Own %s Planetary Excavators',
		evaluator: function(x) { return planetExcavator >= x },
		progressEvaluator: function(x) { return planetExcavator/x }
	};

	instance.prodMethane1 = {
		id_v4: 'ach_58',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: 'Own %s Vacuum Cleaners',
		evaluator: function(x) { return vacuum >= x },
		progressEvaluator: function(x) { return vacuum/x }
	};

	instance.prodMethane2 = {
		id_v4: 'ach_59',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: 'Own %s Suction Excavators',
		evaluator: function(x) { return suctionExcavator >= x },
		progressEvaluator: function(x) { return suctionExcavator/x }
	};

	instance.prodMethane3 = {
		id_v4: 'ach_60',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: 'Own %s Space Cow Plantations',
		evaluator: function(x) { return spaceCow >= x },
		progressEvaluator: function(x) { return spaceCow/x }
	};

	instance.prodMethane4 = {
		id_v4: 'ach_61',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'methaneIcon',
		title: 'Own %s Hydrothermal Vents',
		evaluator: function(x) { return vent >= x },
		progressEvaluator: function(x) { return vent/x }
	};

	instance.prodTitanium1 = {
		id_v4: 'ach_50',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: 'Own %s Explorers',
		evaluator: function(x) { return explorer >= x },
		progressEvaluator: function(x) { return explorer/x }
	};

	instance.prodTitanium2 = {
		id_v4: 'ach_51',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: 'Own %s Lunarite Drills',
		evaluator: function(x) { return lunariteDrill >= x },
		progressEvaluator: function(x) { return lunariteDrill/x }
	};

	instance.prodTitanium3 = {
		id_v4: 'ach_52',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: 'Own %s Penta-Drills',
		evaluator: function(x) { return pentaDrill >= x },
		progressEvaluator: function(x) { return pentaDrill/x }
	};

	instance.prodTitanium4 = {
		id_v4: 'ach_53',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'titaniumIcon',
		title: 'Own %s Drills of Titans',
		evaluator: function(x) { return titanDrill >= x },
		progressEvaluator: function(x) { return titanDrill/x }
	};

	instance.prodGold1 = {
		id_v4: 'ach_62',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: 'Own %s Rocket Droids',
		evaluator: function(x) { return droid >= x },
		progressEvaluator: function(x) { return droid/x }
	};

	instance.prodGold2 = {
		id_v4: 'ach_63',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: 'Own %s Asteroid Destroyers',
		evaluator: function(x) { return destroyer >= x },
		progressEvaluator: function(x) { return destroyer/x }
	};

	instance.prodGold3 = {
		id_v4: 'ach_64',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: 'Own %s Death Stars Jr',
		evaluator: function(x) { return deathStar >= x },
		progressEvaluator: function(x) { return deathStar/x }
	};

	instance.prodGold4 = {
		id_v4: 'ach_65',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'goldIcon',
		title: 'Own %s Chronal Actuators',
		evaluator: function(x) { return actuator >= x },
		progressEvaluator: function(x) { return actuator/x }
	};

	instance.prodSilver1 = {
		id_v4: 'ach_66',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: 'Own %s Scout Ships',
		evaluator: function(x) { return scout >= x },
		progressEvaluator: function(x) { return scout/x }
	};

	instance.prodSilver2 = {
		id_v4: 'ach_67',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: 'Own %s Interplanetary Lasers',
		evaluator: function(x) { return spaceLaser >= x },
		progressEvaluator: function(x) { return spaceLaser/x }
	};

	instance.prodSilver3 = {
		id_v4: 'ach_68',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: 'Own %s Big Berthas',
		evaluator: function(x) { return bertha >= x },
		progressEvaluator: function(x) { return bertha/x }
	};

	instance.prodSilver4 = {
		id_v4: 'ach_69',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'silverIcon',
		title: 'Own %s Atomic Cannons',
		evaluator: function(x) { return cannon >= x },
		progressEvaluator: function(x) { return cannon/x }
	};

	instance.prodHydrogen1 = {
		id_v4: 'ach_78',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: 'Own %s Hydrogen Collectors',
		evaluator: function(x) { return collector >= x },
		progressEvaluator: function(x) { return collector/x }
	};

	instance.prodHydrogen2 = {
		id_v4: 'ach_79',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: 'Own %s Gaseous Magnets',
		evaluator: function(x) { return magnet >= x },
		progressEvaluator: function(x) { return magnet/x }
	};

	instance.prodHydrogen3 = {
		id_v4: 'ach_80',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: 'Own %s Electrolytic Cells',
		evaluator: function(x) { return eCell >= x },
		progressEvaluator: function(x) { return eCell/x }
	};

	instance.prodHydrogen4 = {
		id_v4: 'ach_81',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'hydrogenIcon',
		title: 'Own %s Hindenburg Excavations',
		evaluator: function(x) { return hindenburg >= x },
		progressEvaluator: function(x) { return hindenburg/x }
	};

	instance.prodHelium1 = {
		id_v4: 'ach_82',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: 'Own %s Helium Drones',
		evaluator: function(x) { return drone >= x },
		progressEvaluator: function(x) { return drone/x }
	};

	instance.prodHelium2 = {
		id_v4: 'ach_83',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: 'Own %s Helium Tankers',
		evaluator: function(x) { return tanker >= x },
		progressEvaluator: function(x) { return tanker/x }
	};

	instance.prodHelium3 = {
		id_v4: 'ach_84',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: 'Own %s Morphic Compressors',
		evaluator: function(x) { return compressor >= x },
		progressEvaluator: function(x) { return compressor/x }
	};

	instance.prodHelium4 = {
		id_v4: 'ach_85',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'heliumIcon',
		title: 'Own %s Gas Giant Skimmers',
		evaluator: function(x) { return skimmer >= x },
		progressEvaluator: function(x) { return skimmer/x }
	};

	instance.prodIce1 = {
		id_v4: 'ach_86',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: 'Own %s Ice Pickaxes',
		evaluator: function(x) { return icePick >= x },
		progressEvaluator: function(x) { return icePick/x }
	};

	instance.prodIce2 = {
		id_v4: 'ach_87',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: 'Own %s Ice Drills',
		evaluator: function(x) { return iceDrill >= x },
		progressEvaluator: function(x) { return iceDrill/x }
	};

	instance.prodIce3 = {
		id_v4: 'ach_88',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: 'Own %s Ocean Freezers',
		evaluator: function(x) { return freezer >= x },
		progressEvaluator: function(x) { return freezer/x }
	};

	instance.prodIce4 = {
		id_v4: 'ach_89',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'iceIcon',
		title: 'Own %s Mr Freezes',
		evaluator: function(x) { return mrFreeze >= x },
		progressEvaluator: function(x) { return mrFreeze/x }
	};

	instance.prodMeteorite1 = {
		id_v4: 'ach_90',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: 'Own %s Meteorite Printers',
		evaluator: function(x) { return printer >= x },
		progressEvaluator: function(x) { return printer/x }
	};

	instance.prodMeteorite2 = {
		id_v4: 'ach_91',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: 'Own %s Meteorite Webs',
		evaluator: function(x) { return web >= x },
		progressEvaluator: function(x) { return web/x }
	};

	instance.prodMeteorite3 = {
		id_v4: 'ach_103',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: 'Own %s Planet Smashers',
		evaluator: function(x) { return smasher >= x },
		progressEvaluator: function(x) { return smasher/x }
	};

	instance.prodMeteorite4 = {
		id_v4: 'ach_104',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'meteoriteIcon',
		title: 'Own %s Nebulous Synthesizers',
		evaluator: function(x) { return nebulous >= x },
		progressEvaluator: function(x) { return nebulous/x }
	};

	instance.prodScience1 = {
		id_v4: 'ach_92',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologyIcon',
		title: 'Own %s Home Science Kits',
		evaluator: function(x) { return lab >= x },
		progressEvaluator: function(x) { return lab/x }
	};

	instance.prodScience2 = {
		id_v4: 'ach_93',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologyIcon',
		title: 'Own %s High School Sciences',
		evaluator: function(x) { return labT2 >= x },
		progressEvaluator: function(x) { return labT2/x }
	};

	instance.prodScience3 = {
		id_v4: 'ach_94',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologyIcon',
		title: 'Own %s University Laboratories',
		evaluator: function(x) { return labT3 >= x },
		progressEvaluator: function(x) { return labT3/x }
	};

	instance.prodScience4 = {
		id_v4: 'ach_95',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologyIcon',
		title: 'Own %s Scientific Observatories',
		evaluator: function(x) { return labT4 >= x },
		progressEvaluator: function(x) { return labT4/x }
	};

	instance.prodScience5 = {
		id_v4: 'ach_101',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'technologyIcon',
		title: 'Own %s Space Scientific Satellite Stations',
		evaluator: function(x) { return labT5 >= x },
		progressEvaluator: function(x) { return labT5/x }
	};

	instance.prodRocketFuel1 = {
		id_v4: 'ach_98',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Chemical Plants',
		evaluator: function(x) { return chemicalPlant >= x },
		progressEvaluator: function(x) { return chemicalPlant/x }
	};

	instance.prodRocketFuel2 = {
		id_v4: 'ach_99',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Oxidisation Chambers',
		evaluator: function(x) { return oxidisation >= x },
		progressEvaluator: function(x) { return oxidisation/x }
	};

	instance.prodRocketFuel3 = {
		id_v4: 'ach_100',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'rocketFuelIcon',
		title: 'Own %s Hydrazine Catalysts',
		evaluator: function(x) { return hydrazine >= x },
		progressEvaluator: function(x) { return hydrazine/x }
	};

	instance.prodDyson1 = {
		id_v4: 'ach_96',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Dyson Rings',
		evaluator: function(x) { return ring >= x },
		progressEvaluator: function(x) { return ring/x }
	};

	instance.prodDyson2 = {
		id_v4: 'ach_97',
		categoryInstance: Game.achievementsCategoryData.producers,
		iconName: 'energyIcon',
		title: 'Own %s Dyson Swarms',
		evaluator: function(x) { return swarm >= x },
		progressEvaluator: function(x) { return swarm/x }
	};

	return instance;

}());

