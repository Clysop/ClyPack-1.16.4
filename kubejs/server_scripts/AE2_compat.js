// priority: 0

events.listen('recipes', event => {
  // Change recipes here
  
  event.recipes.immersiveengineering.crusher("appliedenergistics2:certus_quartz_dust", "#forge:gems/certus_quartz")
  event.recipes.immersiveengineering.crusher("appliedenergistics2:fluix_dust", "appliedenergistics2:fluix_crystal")
  
  event.recipes.thermal.pulverizer("appliedenergistics2:certus_quartz_dust", "#forge:gems/certus_quartz")
  
  
  let ores = [
    'copper',
    'tin',
    'lead',
    'silver',
    'nickel',
  ]
  
  ores.forEach(element => {
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:ingots/" + element
      },
      "result": {
        "primary": {
          "item": "thermal:" + element + "_dust"
        }
      },
      "turns": 4
    })
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:ores/" + element
      },
      "result": {
        "primary": {
          "item": "thermal:" + element + "_dust"
        },
        "optional": [
          {
            "item": "thermal:" + element + "_dust"
          }
        ]
      },
      "turns": 4
    })
  })
  
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
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:ingots/" + element
      },
      "result": {
        "primary": {
          "item": "thermal:" + element + "_dust"
        }
      },
      "turns": 4
    })
  })
  
  let gems = [
    'apatite',
    'cinnabar',
    'niter',
    'sulfur',
    'lapis',
    'diamond',
    'emerald'
  ]
  
  gems.forEach(element => {
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:gems/" + element
      },
      "result": {
        "primary": {
          "item": "thermal:" + element + "_dust"
        }
      },
      "turns": 4
    })
  })
  
  event.recipes.appliedenergistics2.grinder({
    "input": {
      "tag": "forge:ingots/aluminum"
    },
    "result": {
      "primary": {
        "item": "immersiveengineering:dust_aluminum"
      }
    },
    "turns": 4
  })
  event.recipes.appliedenergistics2.grinder({
    "input": {
      "tag": "forge:ores/aluminum"
    },
    "result": {
      "primary": {
        "item": "immersiveengineering:dust_aluminum"
      },
      "optional": [
        {
          "item": "immersiveengineering:dust_aluminum"
        }
      ]
    },
    "turns": 4
  })
  
  let temp = ['uranium', 'osmium']
  
  temp.forEach(element => {
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:ingots/" + element
      },
      "result": {
        "primary": {
          "item": "mekanism:dust_" + element
        }
      },
      "turns": 4
    })
    event.recipes.appliedenergistics2.grinder({
      "input": {
        "tag": "forge:ores/" + element
      },
      "result": {
        "primary": {
          "item": "mekanism:dust_" + element
        },
        "optional": [
          {
            "item": "mekanism:dust_" + element
          }
        ]
      },
      "turns": 4
    })
  })
})

events.listen('item.tags', event => {
  // Change item tags here
})