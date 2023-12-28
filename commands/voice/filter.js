module.exports = [{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"atempo": "1.06", "asetrate": "44100*1.25"}]
  $onlyIf[$interactionData[values[0]]==nightcore;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"aecho": "0.6:0.3:1000:0.5"}]
  $onlyIf[$interactionData[values[0]]==echo]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"apulsator": "1"}]
  $onlyIf[$interactionData[values[0]]==pulsator;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"asetrate": "2*44100"}]
  $onlyIf[$interactionData[values[0]]==pitch;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter([{stereotools: "mpan='mono|c0=c1'"}])
  $onlyIf[$interactionData[values[0]]==karoake;]
  `
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{atempo: 0.5}]
  $onlyIf[$interactionData[values[0]]==slowed;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"atempo": "1.15", "asetrate": "48000*0.8"}]
  $onlyIf[$interactionData[values[0]]==deep;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{equalizer: 'f=80:width_type=h:width=50:g=6'}, {bass: 'gain=6'}]

  $onlyIf[$interactionData[values[0]]==bassboost;]` 
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"agate": "1"}]
  $onlyIf[$interactionData[values[0]]==gate;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"vibrato": "2"}]
  $onlyIf[$interactionData[values[0]]==vibrato;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"FLANGER": "1"}]
  $onlyIf[$interactionData[values[0]]==flanger;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"aphaser": "1"}]
  $onlyIf[$interactionData[values[0]]==phaser;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"tremolo": "1"}]
  
$onlyIf[$interactionData[values[0]]==tremolo;]`
},{
  name: "filter", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $addFilter[{"asetrate": "48000*0.8"}]
  
  $onlyIf[$interactionData[values[0]]==vaporwave]`
}]