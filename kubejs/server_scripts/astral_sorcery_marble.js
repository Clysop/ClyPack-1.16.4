events.listen('recipes', event => {
  event.shapeless("astralsorcery:marble_raw", "quark:marble")
  event.shapeless("quark:marble", "astralsorcery:marble_raw")
})