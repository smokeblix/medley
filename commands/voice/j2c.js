module.exports = {
  type: "voiceStateUpdate", 
  channel: "1097277416419885186", 
  $if: "old", 
  code: `
  
  $moveUser[$guildID;$authorID;$getUserVar[personalvc]]

$if[$getUserVar[personalvc]==]
$setUserVar[personalvc;$createChannel[$guildID;$username[$authorID]'s VC;Voice;true]]
$endif
  $onlyIf[$newState[channelId]==$getGuildVar[tempvc];new channel: $newState[channelId]
Expected channel: $getGuildVar[tempvc]]
$onlyIf[$oldState[channelID]==;1]
$onlyIf[$getGuildVar[tempvc]!=;]`
}