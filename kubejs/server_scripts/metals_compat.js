// priority: 0

onEvent('recipes', event => {
  // Change recipes here
  
  let metals = [
    'copper',
    'tin',
    'lead',
    'silver',
    'nickel',
    'bronze',
    'electrum',
    'constantan',
  ];
  
  metals.forEach(element => {
    event.replaceOutput({}, `#forge:dusts/${element}`, `thermal:${element}_dust`);
    event.replaceOutput({}, `#forge:ingots/${element}`, `thermal:${element}_ingot`);
    event.replaceOutput({}, `#forge:nuggets/${element}`, `thermal:${element}_nugget`);
    event.replaceOutput({}, `#forge:storage_blocks/${element}`, `thermal:${element}_block`);
  });
  
  (['uranium', 'steel']).forEach(element => {
    event.replaceOutput({}, `#forge:dusts/${element}`, `mekanism:dust_${element}`);
    event.replaceOutput({}, `#forge:ingots/${element}`, `mekanism:ingot_${element}`);
    event.replaceOutput({}, `#forge:nuggets/${element}`, `mekanism:nugget_${element}`);
    event.replaceOutput({}, `#forge:storage_blocks/${element}`, `mekanism:block_${element}`);
  });
  
  let other = [
    'sulfur',
    'gold',
    'iron',
    'lapis',
    'diamond',
    'emerald',
    'quartz',
  ];
  
  other.forEach(element => {
    event.replaceOutput({}, `#forge:dusts/${element}`, `thermal:${element}_dust`);
  });
  
  event.replaceOutput({}, '#forge:sawdust', 'thermal:sawdust');
  
});