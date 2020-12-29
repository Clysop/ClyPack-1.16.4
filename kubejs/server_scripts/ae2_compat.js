// priority: 0

onEvent('recipes', event => {
  // Change recipes here
  
  event.recipes.immersiveengineering.crusher("appliedenergistics2:certus_quartz_dust", "#forge:gems/certus_quartz");
  event.recipes.immersiveengineering.crusher("appliedenergistics2:fluix_dust", "appliedenergistics2:fluix_crystal");
  
  event.recipes.thermal.pulverizer("appliedenergistics2:certus_quartz_dust", "#forge:gems/certus_quartz");
  
  
  function addGrinderRecipe(input, output, doubleOutput) {
    customRecipe = {
      type: "appliedenergistics2:grinder",
      input: {
        tag: input
      },
      result: {
        primary: {
          item: output
        }
      },
      turns: 4
    };
    
    if (doubleOutput) {
      customRecipe.result.optional = [
        {
          item: output
        }
      ]
    };
    
    event.custom(customRecipe);
  };
  
  let ores = [
    'copper',
    'tin',
    'lead',
    'silver',
    'nickel',
  ];
  
  ores.forEach(element => {
    addGrinderRecipe(`forge:ingots/${element}`, `thermal:${element}_dust`, false);
    addGrinderRecipe(`forge:ores/${element}`, `thermal:${element}_dust`, true);
  });
  
  let ingots = [
    'bronze',
    'electrum',
    'invar',
    'constantan',
    'signalum',
    'lumium',
    'enderium'
  ]
  
  ingots.forEach(element => {
    addGrinderRecipe(`forge:ingots/${element}`, `thermal:${element}_dust`, false);
  });
  
  let gems = [
    'apatite',
    'cinnabar',
    'niter',
    'sulfur',
    'lapis',
    'diamond',
    'emerald'
  ];
  
  gems.forEach(element => {
    addGrinderRecipe(`forge:gems/${element}`, `thermal:${element}_dust`, false);
  });
  
  addGrinderRecipe(`forge:ingots/aluminum`, `immersiveengineering:dust_aluminum`, false);
  addGrinderRecipe(`forge:ores/aluminum`, `immersiveengineering:dust_aluminum`, true);
  
  (['uranium', 'osmium']).forEach(element => {
    addGrinderRecipe(`forge:ingots/${element}`, `mekanism:dust_${element}`, false);
    addGrinderRecipe(`forge:ores/${element}`, `mekanism:dust_${element}`, true);
  });
});
