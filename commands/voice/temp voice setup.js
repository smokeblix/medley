module.exports = [{
  name: "tempVoice", 
  code: `

  $channelSendMessage[$getGuildVar[interface];{newEmbed:
  {title:Interface}
  {description:controller}}
  {actionRow:
{button:name:secondary:name:false}
{button:limit:secondary:limit:false}
{button:trust:secondary:trust:false}
{button:untrust:secondary:untrust:false}}
{actionRow:
{button:invite:secondary:vcinvite:false}
{button:lock:secondary:lock:false}
{button:hide:secondary:hide:false}
{button:server:secondary:server:false}}
{actionRow:
{button:kick:secondary:kick:false}
{button:unlock:secondary:unlock:false}
{button:unhide:secondary:unhide:false}
{button:leave:secondary:leave:false}}]
  $setGuildVar[tempvc;$createChannel[$guildID;➕ JOIN TO CREATE;Voice;true]]
  $setGuildVar[interface;$createChannel[$guildID;🔴|interface;Text;true]]

  Created temp vc 
`
}]