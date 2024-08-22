PlayerEvents.loggedIn( e => {
    // Check if player doesn't have "starting_items" stage yet
    if (!e.player.stages.has('starting_items')) {
      // Add the stage
      e.player.stages.add('starting_items')
      // Give some items to player
      e.player.give(Item.of('projecte:transmutation_tablet').enchant('soulbound:soulbound', 1))
      e.player.give(Item.of(Item.of('projecte:philosophers_stone').enchant('soulbound:soulbound', 1)))
      e.player.give('sgjourney:zpm_hub')
      e.player.give('sgjourney:zero_point_module')
    }
  })