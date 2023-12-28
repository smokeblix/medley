module.exports = ({
  name: 'stop', 
  code: `
Stopped playing the song
$deleteIn[5s]
$stopTrack
$leaveVC
`})