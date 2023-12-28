module.exports = {
  name: "renamevc", 
  type: "interaction", 
  prototype: "modal", 
  code: `
  $editChannel[$getUserVar[personalvc];$textInputValue[newname]]`
}