module.exports = [{
  name: "play", 
  type: "interaction", 
  prototype: "button", 
  $if: "old", 
  code: `
  $if[$playerStatus$suppressErrors==playing]
$interactionDelete
$wait[5s]
  $editMessage[$getGuildVar[messageid];**__SONG QUEUE__** $nonEscape[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$queue[1;5;{position}\) {title} - \`{requester.user.username}\`
\n];\n,;];$queue[1;1;{position}\) {title} - \`{requester.user.username}\`]; ;1];1\);$getVar[song1]];2\);$getVar[song2]];3\);$getVar[song3]];4\);$getVar[song4]];5\);$getVar[song5]]]

{newEmbed:{title:<a:music_disc:1085601835563368458> $songInfo[title]}{url:$songInfo[url]}
{field:$customEmoji[1096883397223264357;1031021022134145095] Artist:$songInfo[artist]:no}
{field:$customEmoji[1096886649067147375;1031021022134145095] Duration:$digitalFormat[$songInfo[duration]]:no}

{author:$songInfo[requester.user.username]:$get[authoricon]}
$let[authoricon;https://cdn.discordapp.com/avatars/$songInfo[requester.user.id]/$songInfo[requester.user.avatar].png?size=256]
{image:$songInfo[thumbnail]}
{color:2b2d30}
{footer:volume $volume}}

{actionRow:{stringInput:other:Other Actions:1:1:false:{option:Save as favorites:1:Save current playing song to your fav list:false:$customEmoji[1085931817430950039;1031021022134145095]}
{option:Queue favorites:2:Queue songs from your favorite list:false:$customEmoji[1085932653418647673;1031021022134145095]}
{option:Shuffle:3:Shuffle the queue:false:$customEmoji[1085932887641174076;1031021022134145095]}
{option:Filter:4:Add filter to the song:false:$customEmoji[1097649042487517194;1031021022134145095]}
{option:Fix player:5:Fix the player if it's not working as expected:false:$customEmoji[1085932953206534235;1031021022134145095]}
}}
{actionRow:
{button::secondary:play:false:$customEmoji[1096716433087528961;1031021022134145095]}
{button::secondary:stop:false:$customEmoji[1096716569024929843;1031021022134145095]}
{button::secondary:loop:false:$customEmoji[1096716504004829194;1031021022134145095]}
{button::secondary:sound:false:$customEmoji[1096716074994651166;1031021022134145095]}
{button::secondary:skip:false:$customEmoji[1096716210177052723;1031021022134145095]}}
{actionRow:
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};$getGuildVar[channelid]]
$pauseTrack
$interactionReply[Paused the song]
$else
$interactionDelete
$wait[5s]
  $editMessage[$getGuildVar[messageid];**__SONG QUEUE__** $nonEscape[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$queue[1;5;{position}\) {title} - \`{requester.user.username}\`
\n];\n,;];$queue[1;1;{position}\) {title} - \`{requester.user.username}\`]; ;1];1\);$getVar[song1]];2\);$getVar[song2]];3\);$getVar[song3]];4\);$getVar[song4]];5\);$getVar[song5]]]

{newEmbed:{title:<a:music_disc:1085601835563368458> $songInfo[title]}{url:$songInfo[url]}
{field:$customEmoji[1096883397223264357;1031021022134145095] Artist:$songInfo[artist]:no}
{field:$customEmoji[1096886649067147375;1031021022134145095] Duration:$digitalFormat[$songInfo[duration]]:no}

{author:$songInfo[requester.user.username]:$get[authoricon]}
$let[authoricon;https://cdn.discordapp.com/avatars/$songInfo[requester.user.id]/$songInfo[requester.user.avatar].png?size=256]
{image:$songInfo[thumbnail]}
{color:2b2d30}
{footer:volume $volume}}

{actionRow:{stringInput:other:Other Actions:1:1:false:{option:Save as favorites:1:Save current playing song to your fav list:false:$customEmoji[1085931817430950039;1031021022134145095]}
{option:Queue favorites:2:Queue songs from your favorite list:false:$customEmoji[1085932653418647673;1031021022134145095]}
{option:Shuffle:3:Shuffle the queue:false:$customEmoji[1085932887641174076;1031021022134145095]}
{option:Filter:4:Add filter to the song:false:$customEmoji[1097649042487517194;1031021022134145095]}
{option:Fix player:5:Fix the player if it's not working as expected:false:$customEmoji[1085932953206534235;1031021022134145095]}
}}
{actionRow:
{button::secondary:play:false:$customEmoji[1096716277923463188;1031021022134145095]}
{button::secondary:stop:false:$customEmoji[1096716569024929843;1031021022134145095]}
{button::secondary:loop:false:$customEmoji[1096716504004829194;1031021022134145095]}
{button::secondary:sound:false:$customEmoji[1096716074994651166;1031021022134145095]}
{button::secondary:skip:false:$customEmoji[1096716210177052723;1031021022134145095]}}
{actionRow:
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};$getGuildVar[channelid]]
$resumeTrack
$interactionReply[Resumed the song]
$endif
$onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

$onlyIf[$voiceID[$authorID]!=;join vc to use this]`
},{
  name: "stop", 
  type: "interaction",
  prototype: "button",
  $if: "old", 
  code: `
  $interactionDelete
  $wait[5s]
  $stopPlayer
  $interactionReply[music stopped]
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

$if[$getTextSplitLength
$textSplit[$usersInChannel[$voiceID;$clientID;, ];, ]<1] $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]
$endif

  $onlyIf[$voiceID[$authorID]!=;join vc to use this {options:{ephemeral}}{extraOptions:{interaction}}]`
},{
  name: "loop", 
  type: "interaction", 
  prototype: "button", 
  $if: "old", 
  code: `
  $if[$getGuildVar[loop]==queue]
  $interactionDelete
  $wait[5s]
  $loopMode[none]
  $interactionReply[loop disabled]
  $setGuildVar[loop;none]
  
  $elseif[$getGuildVar[loop]==song]
  $interactionDelete
  $wait[5s]
  $loopMode[queue]
  $interactionReply[Queue loop enabled] 
  $setGuildVar[loop;queue]
  $endelseIf
  
  $elseif[$getGuildVar[loop]==none]
  $interactionDelete
  $wait[5s]
  $loopMode[song]
  $interactionReply[Song loop enabled]
  $setGuildVar[loop;song]
  $endelseIf
  $endif
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]!=;join vc to use this]`
},{
  name: "sound", 
  type: "interaction", 
  prototype: "button",
  $if: "old", 
  code: `
  $editMessage[$getGuildVar[messageid];**__SONG QUEUE__** $nonEscape[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$queue[1;5;{position}\) {title} - \`{requester.user.username}\`
\n];\n,;];$queue[1;1;{position}\) {title} - \`{requester.user.username}\`]; ;1];1\);$getVar[song1]];2\);$getVar[song2]];3\);$getVar[song3]];4\);$getVar[song4]];5\);$getVar[song5]]]

{newEmbed:{title:<a:music_disc:1085601835563368458> $songInfo[title]}{url:$songInfo[url]}
{field:$customEmoji[1096883397223264357;1031021022134145095] Artist:$songInfo[artist]:no}
{field:$customEmoji[1096886649067147375;1031021022134145095] Duration:$digitalFormat[$songInfo[duration]]:no}

{author:$songInfo[requester.user.username]:$get[authoricon]}
$let[authoricon;https://cdn.discordapp.com/avatars/$songInfo[requester.user.id]/$songInfo[requester.user.avatar].png?size=256]
{image:$songInfo[thumbnail]}
{color:2b2d30}
{footer:volume: $volume}}

{actionRow:{stringInput:other:Other Actions:1:1:false:{option:Save as favorites:1:Save current playing song to your fav list:false:$customEmoji[1085931817430950039;1031021022134145095]}
{option:Queue favorites:2:Queue songs from your favorite list:false:$customEmoji[1085932653418647673;1031021022134145095]}
{option:Shuffle:3:Shuffle the queue:false:$customEmoji[1085932887641174076;1031021022134145095]}
{option:Filter:4:Add filter to the song:false:$customEmoji[1097649042487517194;1031021022134145095]}
{option:Fix player:5:Fix the player if it's not working as expected:false:$customEmoji[1085932953206534235;1031021022134145095]}
}}
{actionRow:
{button::secondary:play:false:$customEmoji[1096716277923463188;1031021022134145095]}
{button::secondary:stop:false:$customEmoji[1096716569024929843;1031021022134145095]}
{button::secondary:loop:false:$customEmoji[1096716504004829194;1031021022134145095]}
{button::secondary:sound:false:$customEmoji[1096716074994651166;1031021022134145095]}
{button::secondary:skip:false:$customEmoji[1096716210177052723;1031021022134145095]}}
{actionRow:
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};$getGuildVar[channelid]]
  $if[$volume==20]
  $volume[40]
  $elseif[$volume==40]
  $volume[60]
  $endelseIf
  $elseif[$volume==60]
  $volume[80]
  $endelseIf
  $elseif[$volume==80]
  $volume[100]
  $endelseif
  $elseif[$volume==100]
  $volume[20]
  $endelseIf
  $endif
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]!=;join vc to use this]`
},{
  name: "skip", 
  type: "interaction", 
  prototype: "button",
  $if: "old", 
  code: `
  $interactionDelete
  $wait[5s]
  $skipTrack
  $interactionReply[skipped song, playing next]
  $onlyIf[$queueLength!=0;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$hasPlayer==true;nothing is playing right now {options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];You are not in the same VC as i am{options:{ephemeral}}{extraOptions:{interaction}}]

  $onlyIf[$voiceID[$authorID]!=;join vc to use this {options:{ephemeral}}{extraOptions:{interaction}}]`
},{
  name: "spotify", 
  type: "interaction", 
  prototype: "button", 
  $if: "old", 
  code: `
  $interactionReply[soon... {options:{ephemeral}}{extraOptions:{interaction}}]
  $onlyIf[$voiceID[$authorID]!=;join vc to use this {options:{ephemeral}}{extraOptions:{interaction}}]`
}]