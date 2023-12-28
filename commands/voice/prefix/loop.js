module.exports = {
  name: "loop", 
  code: `
  $loopMode[$message]
$onlyIf[$checkContains[$message;song;queue;off]
$argsCheck[1;Usage: loop song/queue/off]`
}