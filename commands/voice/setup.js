module.exports = ({
  name: "setup",
  $if: "old", 
  code: `
  $editMessage[$get[message];{newEmbed:{title:Medley}{description:> Yay! music setup has been successfully completed ✨, you may now go to <#$get[channel]> and type the name/URL of the song you wish to play. **Happy Listening** 💖}{color:f9cee7}{thumbnail:$userAvatar[$clientID]}}]
  $wait[2s]
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.

        $getVar[tick] Creating private playlist

        $getVar[tick] Saving changes...}{color:2b2d30}{footer:successfully created}}]
  $wait[1s]
  $editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.

        $getVar[tick] Creating private playlist

        $getVar[load] Saving changes...}{color:2b2d30}}]
  $wait[1s]
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:<:tick:1106939097483853925> Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[tick] Creating music controller.
        
        $getVar[load] Creating private playlist}{color:2b2d30}}]
$setGuildVar[messageid;$channelSendMessage[$get[channel];**__SONG QUEUE__**
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
{button:Spotify:success:spotify:false:$customEmoji[1097634406367244439;1031021022134145095]}};true]]
$let[attachment;$channelSendMessage[$get[channel];{attachment:Medley.png:https://media.discordapp.net/attachments/1049202067199246410/1085571654752677968/1678890804685.jpg};true]]

$if[$guildChannelExists[$guildID;$getGuildVar[channelid]]==true]
$onlyIf[$guildChannelExists[$guildID;$getGuildVar[channelid]]==false;]
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[wrong] Checking for existing channels.

>      A music request channel already exist <#$getGuildVar[channelid]>, if you want to recreate a new music request channel click the button below }{color:2b2d30}}]
$else
$editMessage[$get[message];{newEmbed:{title:Medley Setup}{description:$getVar[tick] Checking for existing channels.

        $getVar[tick] Creating song request channel.
        
        $getVar[load] Creating music controller.}{color:2b2d30}}]
$wait[1s]
$slowmode[5s;$get[channel]]
$setGuildVar[channelid;$get[channel]]
$let[channel;$createChannel[$guildID;medley-music;text;true]]
$endif
$wait[2s]
$if[$guildChannelExists[$guildID;$getGuildVar[channelid]]==false]
$resetGuildVar[channelid]
$endif
$onlyClientPerms[administrator;]
$if[$hasPerms[$guildID;$clientID;administrator]==false]
$editMessage[$get[message];{newEmbed:
{title:Medley Setup}
{description:$getVar[wrong] Checking Bot perms.

>     I don't have \`admin\` perms to complete this setup.}{color:2b2d30}}]
$endif
$guildCooldown[10;Please wait **%time%** to use this command again.]
$onlyPerms[administrator;manageguild;]
$if[$hasPerms[$guildID;$authorID;administrator;manageguild]==false]
$editMessage[$get[message];{newEmbed:
{title:Medley Setup}
{description:$getVar[wrong] Checking User perms.

>     You don't have \`admin\`,\`manageserver\` permission to use this command.}{color:2b2d30}}]
$endif
$let[message;$sendMessage[{newEmbed:{title:Medley Setup}{description:$getVar[load] Checking for existing channels.}{color:2b2d30}};true]]
   `
})