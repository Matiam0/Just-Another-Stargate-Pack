ServerEvents.recipes( e => {
    e.shapeless(Item.of('sgjourney:milky_way_dhd', '{BlockEntityTag:{Energy:0L,Inventory:{Items:[{Count:1b,Slot:0,id:"sgjourney:large_control_crystal"},{Count:1b,Slot:1,id:"sgjourney:energy_crystal",tag:{Energy:0}},{Count:1b,Slot:2,id:"sgjourney:communication_crystal",tag:{Frequency:0}},{Count:1b,Slot:3,id:"sgjourney:energy_crystal",tag:{Energy:0}},{Count:1b,Slot:5,id:"sgjourney:energy_crystal",tag:{Energy:0}},{Count:1b,Slot:7,id:"sgjourney:transfer_crystal",tag:{TransferLimit:2500}}],Size:9},id:"sgjourney:milky_way_dhd"}}'),[
        'sgjourney:classic_dhd',
        Item.of('sgjourney:stargate_upgrade_crystal', 
            '{Type:"sgjourney:milky_way_stargate"}')
    ])

    e.shapeless(Item.of('sgjourney:pegasus_dhd', '{BlockEntityTag:{Energy:0L,Inventory:{Items:[{Count:1b,Slot:0,id:"sgjourney:advanced_control_crystal"},{Count:1b,Slot:1,id:"sgjourney:advanced_energy_crystal",tag:{Energy:0}},{Count:1b,Slot:2,id:"sgjourney:advanced_communication_crystal",tag:{Frequency:0}},{Count:1b,Slot:3,id:"sgjourney:advanced_energy_crystal",tag:{Energy:0}},{Count:1b,Slot:6,id:"sgjourney:advanced_communication_crystal",tag:{Frequency:0}},{Count:1b,Slot:7,id:"sgjourney:advanced_transfer_crystal",tag:{TransferLimit:5000}}],Size:9},id:"sgjourney:pegasus_dhd"}}'),[
        'sgjourney:classic_dhd',
        Item.of('sgjourney:stargate_upgrade_crystal', '{Type:"sgjourney:pegasus_stargate"}')
    ])

    

    e.recipes.create.deploying(Item.of('sgjourney:zero_point_module', '{Energy:1000000000L,Entropy:0}'), [Item.of('sgjourney:zero_point_module', '{Energy:0L,Entropy:1000}'),'ae2:singularity'])

    e.shaped('sgjourney:call_forwarding_device',[
        'ILI',
        'IBI',
        'ICD'
    ],{
        I:'minecraft:iron_ingot',
        C:'ae2:calculation_processor',
        L:'ae2:logic_processor',
        B:'sgjourney:communication_crystal',
        D:'create_new_age:copper_circuit'
    })

    e.shaped(Item.of('sgjourney:personal_shield_emitter', '{Energy:0L}'),[
        'NEN',
        'MCM',
        'PAP'
    ],{
        N:'sgjourney:naquadah_alloy',
        E:'sgjourney:advanced_energy_crystal',
        M:'sgjourney:advanced_materialization_crystal',
        C:'sgjourney:advanced_control_crystal',
        P:'sgjourney:pure_naquadah',
        A:'sgjourney:advanced_memory_crystal'
    })

    e.shaped(Item.of('sgjourney:zero_point_module', '{Energy:0L,Entropy:1000}'),[
        'TCT',
        'MSM',
        'TCT'
    ],{
        T:'sgjourney:advanced_memory_crystal',
        M:'sgjourney:advanced_materialization_crystal',
        C:'sgjourney:advanced_control_crystal',
        S:'ae2:singularity'
    })

    e.shaped(Item.of('sgjourney:zpm_hub'),[
        'T T',
        'N N',
        'TCT'
    ],{
        T:'sgjourney:advanced_transfer_crystal',
        N:'sgjourney:naquadah_block',
        C:'sgjourney:advanced_control_crystal'
    })
    e.recipes.create.mixing([Fluid.of('sgjourney:liquid_naquadah')],['4x sgjourney:raw_naquadah']).heated()
    e.recipes.create.mixing([Fluid.of('sgjourney:heavy_liquid_naquadah', 250)],['4x sgjourney:pure_naquadah',Fluid.of('sgjourney:liquid_naquadah', 500)]).superheated()
    e.recipes.create.mixing([Fluid.of('sgjourney:heavy_liquid_naquadah', 250)],['4x sgjourney:pure_naquadah','2x sgjourney:raw_naquadah']).superheated()
    e.remove('sgjourney:naquadah_liquidizer')
    e.remove('sgjourney:heavy_naquadah_liquidizer')
})