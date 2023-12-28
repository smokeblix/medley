module.exports = {
  name: "stop", 
  $if: "old", 
  code: `
  $stopPlayer
  Player Stopped 
  $onlyIf[$queueLength!=0;nothing is playing right now!]
$onlyIf[$voiceID==$voiceID[$clientID];You must be in the same vc as me]
  $onlyIf[$voiceID!=;join a vc to use this command]
  $onlyIf[$hasPlayer==true;nothing is playing right now!]
`
}