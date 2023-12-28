module.exports = {
  name: "<@1085282775654998109> say", 
  nonPrefixed: true, 
  $if: "old", 
  code: `
  $sendMessage[$nonEscape[$get[message]];no]
  $let[message;$argsSlice[$message;2;35]]
  $onlyForIDs[935082817224859659;493675724985860096;$randomText[Nope;No thanks;beep...beop..declined;I refuse to say that;I only talk to one i like;Rejected]]

$onlyIf[$getUserVar[say]<=5;]
$if[$getUserVar[say]==6]
$sendMessage[$username[$authorID] will you stop pinging me. I'M not interested.;no]
$endif
$if[$getUserVar[say]==7]
$sendMessage[That's it. I'm gonna ignore you now, bye;no]
$reply[$messageID;true]
$endif

  $if[$checkContains[$authorID;493675724985860096;935082817224859659]==false]
  $setUserVar[say;$sum[$getUserVar[say];1]]
  $endif
  `
}