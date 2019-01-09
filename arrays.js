var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array,element){
  newArray = [element, ...array]
  return array.unshift(element)
}

function destructivelyAddElementToEndOfArray(array,element){
  return array.unshift(element)
}
