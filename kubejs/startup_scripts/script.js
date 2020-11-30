// priority: 0


events.listen('item.registry', event => {
  // Register new items here
  // event.create('example_item').displayName('Example Item')
})

events.listen('block.registry', event => {
  // Register new blocks here
  // event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})