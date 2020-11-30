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
  
  metals.forEach(element => {
    event.replaceOutput({}, '#forge:dusts/' + element, 'thermal:' + element + '_dust')
    event.replaceOutput({}, '#forge:ingots/' + element, 'thermal:' + element + '_ingot')
    event.replaceOutput({}, '#forge:nuggets/' + element, 'thermal:' + element + '_nugget')
    event.replaceOutput({}, '#forge:storage_blocks/' + element, 'thermal:' + element + '_block')
  })
  
  event.replaceOutput({}, '#forge:dusts/uranium', 'mekanism:dust_uranium')
  event.replaceOutput({}, '#forge:dusts/steel', 'mekanism:dust_steel')
  
  event.replaceOutput({}, '#forge:ingots/uranium', 'mekanism:ingot_uranium')
  event.replaceOutput({}, '#forge:ingots/steel', 'mekanism:ingot_steel')
  
  event.replaceOutput({}, '#forge:nuggets/uranium', 'mekanism:nugget_uranium')
  event.replaceOutput({}, '#forge:nuggets/steel', 'mekanism:nugget_steel')
  
  event.replaceOutput({}, '#forge:storage_blocks/uranium', 'mekanism:block_uranium')
  event.replaceOutput({}, '#forge:storage_blocks/steel', 'mekanism:block_steel')
  
  
  let other = [
    'sulfur',
    'gold',
    'iron',
    'lapis',
    'diamond',
    'emerald',
    'quartz',
  ]
  
  other.forEach(element => {
    event.replaceOutput({}, '#forge:dusts/' + element, 'thermal:' + element + '_dust')
  })
  
  event.replaceOutput({}, '#forge:sawdust', 'thermal:sawdust')
  
})

events.listen('element.tags', event => {
  // Change element tags here
})