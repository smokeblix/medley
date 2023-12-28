module.exports = {
  type : "trackEnd",
  channel : "$getGuildVar[channelid]",
  $if: "old", 
  code: `
  $editMessage[$getGuildVar[messageid];**__SONG QUEUE__**
If you add songs, the list of songs will be listed here.

{newEmbed:{title:<a:music_disc:1085601835563368458> Medley}{url:https://youtu.be/mv0JRTqBvm0}
{description:> <:play:1085578212064641044> **How to play song**
 > After and creating the voice channel, enter the URL or song title in the chat box and add the song to the queue.

**[Website](https://discord.gg/Q6kgZhc8nr)** | **[Bot Discord](https://discord.gg/Q6kgZhc8nr)** | **[Guide Docs](https://discord.gg/Q6kgZhc8nr)** | **[Privacy policy](https://discord.gg/Q6kgZhc8nr)**}


{image:https://cdn.discordapp.com/attachments/1031021022746509425/1085629134627156104/music-listening-to-music.gif}
{color:2b2d30}}

{actionRow:{stringInput:other:Other Actions:1:1:false:{option:Auto Play:1:toggles autoplay:false:$customEmoji[1085931817430950039;1031021022134145095]}
{option:Queue favorites:2:Queue songs from your favorite list:false:$customEmoji[1085932653418647673;1031021022134145095]}
{option:Shuffle:3:Shuffle the queue:false:$customEmoji[1085932887641174076;1031021022134145095]}
{option:Filter:4:Add filter to the song:false:$customEmoji[1097649042487517194;1031021022134145095]}
{option:Fix player:5:Fix the player if it's not working as expected:false:$customEmoji[1085932953206534235;1031021022134145095]}
}}
{actionRow:
{button: :secondary:play:false:$customEmoji[1096716277923463188;1031021022134145095]}
{button: :secondary:stop:false:$customEmoji[1096716569024929843;1031021022134145095]}
{button: :secondary:loop:false:$customEmoji[1096716504004829194;1031021022134145095]}
{button: :secondary:sound:false:$customEmoji[1096716074994651166;1031021022134145095]}
{button: :secondary:skip:false:$customEmoji[1096716210177052723;1031021022134145095]}}
{actionRow:
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};$getGuildVar[channelid]]
$setGuildVar[shuffle;off]
$setGuildVar[loop;none]
$onlyIf[$queueLength==0;]
$log[ended]
`
 }