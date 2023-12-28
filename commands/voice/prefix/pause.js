module.exports = {
  name: "pause", 
  code: `
  Paused song
  $onlyIf[$queueLength!=0;nothing is playing right now]

  $onlyIf[$hasPlayer==true;nothing is playing right now]

  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am]

$onlyIf[$voiceID[$authorID]!=;join vc to use this]`
}