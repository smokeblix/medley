module.exports = [{
  name: "other", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  $interactionReply[saved this song to your favorite list;;;;everyone;true]

  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]!=;join vc to use this{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$interactionData[values[0]]==1;]`
},{
  name: "other", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
  
  $interactionReply[soon...;;;;everyone;true]
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]!=;join vc to use this{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$interactionData[values[0]]==2;]`
},{
  name: "other", 
  type: "interaction",
  prototype: "selectMenu", 
  $if: "old", 
  code: `
  $if[$getGuildVar[shuffle]==off]
  $interactionDelete
  $wait[5s]
  $shuffleQueue
  $interactionReply[shuffle enabled]
  $setGuildVar[shuffle;on]
  $else
  $interactionDelete
  $wait[5s]
  $unShuffleQueue
  $interactionReply[shuffle disabled] 
  $resetGuildVar[shuffle]
  $endif

  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]!=;join vc to use this{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$interactionData[values[0]]==3;]`
},{
  name: "other", 
  type: "interaction", 
  prototype: "selectMenu", 
  code: `
    $interactionReply[select the filters you want;;{actionRow:{stringInput:filter:Filter:0:13:false:{option:Night Core:nightcore}
    {option:Echo:echo}
    {option:Pulsator:pulsator}
    {option:Pitch:pitch}
    {option:Karoake:karoake}
    {option:Slowed:slowed}
    {option:Deep:deep}
    {option:Bass Boost:bassboost}
    {option:Gate:gate}
    {option:Vibrato:vibrato}
    {option:Flanger:flanger}
    {option:Phaser:phaser}
    {option:Vaporwave:vaporwave}}};;everyone;true]
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]!=;join vc to use this{options:{ephemeral}}{extraOptions:{interaction}}]
$onlyIf[$interactionData[values[0]]==4;]`
  }]