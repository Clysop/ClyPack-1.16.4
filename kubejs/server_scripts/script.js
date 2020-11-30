// priority: 0

events.listen('recipes', event => {
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
  ]
  
  metals.forEach(item => {
    event.replaceInput({}, '#forge:dusts/' + item, 'thermal:' + item + '_dust')
    event.replaceOutput({}, '#forge:dusts/' + item, 'thermal:' + item + '_dust')
    
    event.replaceInput({}, '#forge:ingots/' + item, 'thermal:' + item + '_ingot')
    event.replaceOutput({}, '#forge:ingots/' + item, 'thermal:' + item + '_ingot')
    
    event.replaceInput({}, '#forge:nuggets/' + item, 'thermal:' + item + '_nugget')
    event.replaceOutput({}, '#forge:nuggets/' + item, 'thermal:' + item + '_nugget')
    
    event.replaceInput({}, '#forge:storage_blocks/' + item, 'thermal:' + item + '_block')
    event.replaceOutput({}, '#forge:storage_blocks/' + item, 'thermal:' + item + '_block')
    
    event.replaceInput({}, '#forge:plates/' + item, 'thermal:' + item + '_plate')
    event.replaceOutput({}, '#forge:plates/' + item, 'thermal:' + item + '_plate')
  })
  
  event.replaceInput({}, '#forge:dusts/uranium', 'mekanism:dust_uranium')
  event.replaceOutput({}, '#forge:dusts/uranium', 'mekanism:dust_uranium')
  event.replaceInput({}, '#forge:dusts/steel', 'mekanism:dust_steel')
  event.replaceOutput({}, '#forge:dusts/steel', 'mekanism:dust_steel')
  
  event.replaceInput({}, '#forge:ingots/uranium', 'mekanism:ingot_uranium')
  event.replaceOutput({}, '#forge:ingots/uranium', 'mekanism:ingot_uranium')
  event.replaceInput({}, '#forge:ingots/steel', 'mekanism:ingot_steel')
  event.replaceOutput({}, '#forge:ingots/steel', 'mekanism:ingot_steel')
  
  event.replaceInput({}, '#forge:nuggets/uranium', 'mekanism:nugget_uranium')
  event.replaceOutput({}, '#forge:nuggets/uranium', 'mekanism:nugget_uranium')
  event.replaceInput({}, '#forge:nuggets/steel', 'mekanism:nugget_steel')
  event.replaceOutput({}, '#forge:nuggets/steel', 'mekanism:nugget_steel')
  
  event.replaceInput({}, '#forge:storage_blocks/uranium', 'mekanism:block_uranium')
  event.replaceOutput({}, '#forge:storage_blocks/uranium', 'mekanism:block_uranium')
  event.replaceInput({}, '#forge:storage_blocks/steel', 'mekanism:block_steel')
  event.replaceOutput({}, '#forge:storage_blocks/steel', 'mekanism:block_steel')
  
  
  let onlyDusts = [
    'sulfur',
    'gold',
    'iron',
    'lapis',
    'diamond',
    'emerald',
    'quartz',
  ]
  
  onlyDusts.forEach(item => {
    event.replaceInput({}, '#forge:dusts/' + item, 'thermal:' + item + '_dust')
    event.replaceOutput({}, '#forge:dusts/' + item, 'thermal:' + item + '_dust')
  })
  
  event.replaceInput({}, '#forge:sawdust', 'thermal:sawdust')
  event.replaceOutput({}, '#forge:sawdust', 'thermal:sawdust')
  
})

events.listen('item.tags', event => {
  // Change item tags here
})