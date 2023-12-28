module.exports = {
  name: "skip", 
  $if: "old", 
  code: `
  $skipTrack
  Skipped song
  $onlyIf[$queueLength!=0;there's nothing to skip]
$onlyIf[$voiceID==$voiceID[$clientID];You must be in the same vc as me]
  $onlyIf[$voiceID!=;join a vc to use this command]
  $onlyIf[$hasPlayer==true;nothing is playing right now!]`
}