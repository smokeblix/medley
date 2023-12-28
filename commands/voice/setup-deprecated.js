module.exports = ({
  name: 'despr',
  $if: "old", 
  code: `
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.

        $getVar[tick] Creating private playlist

        $getVar[tick] Saving changes...}{footer:successfully created}}]
  $wait[1s]
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.

        $getVar[tick] Creating private playlist

        $getVar[load] Saving changes...}}]
  $wait[1s]

$djsEval[try {
$setGuildVar[messageid;$channelSendMessage[$get[channel];**__SONG QUEUE__**
If you add songs, the list of songs will be listed here.

{newEmbed:{title:<a:music_disc:1085601835563368458> Medley}{url:https://youtu.be/mv0JRTqBvm0}
{description:> <:play:1085578212064641044> **How to play song**
 > After and creating the voice channel, enter the URL or song title in the chat box and add the song to the queue.

**[Website](https://www.gcmproject.net/)** | **[ Bot Discord](https://discord.gg/U5YVGBCjnz)** | **[Guide Docs](https://clover-documentation.gitbook.io/basicguide/)** | **[Privacy policy](https://clover-documentation.gitbook.io/privacy_policy/)**}


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
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};true]]
$wait[2s]
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.
        
        $getVar[load] Creating private playlist}}]}
catch (error) {
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[wrong] Creating music controller.
  
  >      oops something went wrong, something is preventing me from completing request channel setup, if you have any automod enabled pls disable it.}
}]}]

$djsEval[try {
  $let[attachment;$channelSendMessage[$get[channel];{attachment:Medley.png:https://media.discordapp.net/attachments/1049202067199246410/1085571654752677968/1678890804685.jpg};true]] 
} catch (error) {
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[wrong] Creating music controller.
  
  >      oops something went wrong, something is preventing me from completing request channel setup, if you have any automod enabled pls disable it.}}]
}]

$if[$getGuildVar[channelid]!=]
$onlyIf[$getGuildVar[channelid]==;]
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[wrong] Checking for existing channels.

>      A music request channel already exist <#$getGuildVar[channelid]>, if you want to recreate a new music request channel click the button below }}]
$else
$djsEval[let channel;
try {
channel = $createChannel[$guildID;medley-music;text;true] 
channel.send("channel created");
channel.send("channel set as" + channel + "ok");
$setGuildVar[test;yes]
channel.send("variable unsure");
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[tick] Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[load] Creating music controller.}}]
channel.send("message edited");
} catch (error) {
channel.send("catch executed unsure why");
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[load] Checking for existing channels.
  
  >      oops something went wrong, something is blocking me from creating a new channel, if you have any automod enabled pls disable it.}}]
}

channel.send(channel.id);

if (channel) {
  $setGuildVar[channelid;\${channel.id}]; // Set the server variable with the channel ID
}]
$endif
$wait[2s]
$let[message;$sendMessage[{newEmbed:{title:Medley Setup}{description:$getVar[load] Checking for existing channels.}};true]]
$onlyForIDs[935082817224859659;only for beta users]
   `
})