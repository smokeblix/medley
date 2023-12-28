module.exports = {
  name: "seek",
  code: `
  $seek[$get[parse]]
  $onlyIf[$get[parse]<$songInfo[duration]]
  $let[parse;$parseTime[$get[time]s]]
$onlyIf[$isNumber[$get[time]]==true;usage]
  $let[time;$message[1]]
  $argsCheck[<=1;Usage here]`
}