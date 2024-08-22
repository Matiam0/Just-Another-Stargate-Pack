ServerEvents.recipes( e => {
    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:spur').withChance(100.0)
    ], 'minecraft:copper_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_spur',['kubejs:incomplete_spur','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_spur','kubejs:incomplete_spur')
    ]).transitionalItem('kubejs:incomplete_spur').loops(5)

    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:bevel').withChance(100.0)
    ], 'create:zinc_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_bevel',['kubejs:incomplete_bevel','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_bevel','kubejs:incomplete_bevel')
    ]).transitionalItem('kubejs:incomplete_bevel').loops(5)

    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:sprocket').withChance(100.0)
    ], 'minecraft:iron_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_sprocket',['kubejs:incomplete_sprocket','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_sprocket','kubejs:incomplete_sprocket')
    ]).transitionalItem('kubejs:incomplete_sprocket').loops(5)

    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:cog').withChance(100.0)
    ], 'create:brass_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_cog',['kubejs:incomplete_cog','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_cog','kubejs:incomplete_cog')
    ]).transitionalItem('kubejs:incomplete_cog').loops(5)

    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:crown').withChance(100.0)
    ], 'minecraft:gold_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_crown',['kubejs:incomplete_crown','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_crown','kubejs:incomplete_crown')
    ]).transitionalItem('kubejs:incomplete_crown').loops(5)

    e.recipes.create.sequenced_assembly([
        Item.of('numismatics:sun').withChance(100.0)
    ], 'minecraft:netherite_ingot', [
        e.recipes.createDeploying('kubejs:incomplete_sun',['kubejs:incomplete_sun','create:cogwheel']),
        e.recipes.createPressing('kubejs:incomplete_sun','kubejs:incomplete_sun')
    ]).transitionalItem('kubejs:incomplete_sun').loops(5)
})