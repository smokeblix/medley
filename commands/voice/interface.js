module.exports = [{
  name: "name", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $interactionModal[rename vc;renamevc;{actionRow:
  {textInput:new name:1:newname:true::1:20}}]
  $onlyIf[$getUserVar[personalvc]!=;you do not own a vc, join <#$getGuildVar[tempvc]> to create your own temporary vc{options:{ephemeral}}{extraOptions:{interaction}}]`
},{
  name: "limit", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $interactionModal[limit;modallimit;{actionRow:
  {textInput:User Limit:1:newuserlimit:false:keep it empty if you want unlimited user limit:1:2}}]
  
  $onlyIf[$getUserVar[personalvc]!=;you do not own a vc, join <#$getGuildVar[tempvc]> to create your own temporary vc{options:{ephemeral}}{extraOptions:{interaction}}]`
},{
  name: "trust", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $interactionReply[select the user to whitelist;;{userInput:selecttrust:Select users to be whitelisted:1:1:no};;;yes]`
},{
  name: "untrust", 
  type: "interaction", 
  prototype: "button", 
  code: ``
},{
  name: "invite", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $interactionReply[select the user you want to invite;;{userInput:selectinvite:Select users to invite:1:1:no};;;yes]`
},{
  name: "lock", 
  type: "interaction", 
  prototype: "button", 
  code: `
$modifyChannelPerms[$getUserVar[personalvc];$guildID;-connect]`
},{
  name: "hide", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $modifyChannelPerms[$getUserVar[personalvc];$guildID;-viewchannel]`
},{
  name: "server", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $interactionReply[select the region from below;;{actionRow:{stringInput:regionmenu:Regions:1:1:false:{option:Automatic:sautomatic:Let discord choose best server for you:false:$customEmoji[1085931817430950039;1031021022134145095]}
{option:Brazil:sbrazil::false:$customEmoji[1085932653418647673;1031021022134145095]}
{option:Hong Kong:shongkong::false:$customEmoji[1085932887641174076;1031021022134145095]}
{option:India:sindia::false:$customEmoji[1085932953206534235;1031021022134145095]}
{option:Japan:sjapan::false:}
{option:Rotterdam:srotterdam::false:}
{option:Rusia:srussia::false:}
{option:Singapore:ssingapore::false:}
{option:South Africa:ssouthafrica::false:}
{option:Sydney:ssydney::false:}
{option:US Central:suscentral::false:}
{option:US East:suseast::false:}
{option:US South:sussouth::false:}
{option:US West:suswest::false:}}};;;yes]`
},{
  name: "kick", 
  type: "interaction", 
  prototype: "button", 
  code: ``
},{
  name: "unlock", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $modifyChannelPerms[$getUserVar[personalvc];$guildID;+connect]`
},{
  name: "unhide", 
  type: "interaction", 
  prototype: "button", 
  code: `
  $modifyChannelPerms[$getUserVar[personalvc];$guildID;+viewchannel]`
},{
  name: "leave", 
  type: "interaction", 
  prototype: "button", 
  code: `
$resetUserVar[personalvc]
$deleteChannel[$getUserVar[personalvc]]
  $interactionReply[are you sure?;;components?;;;yes]`
}]