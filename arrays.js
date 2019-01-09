var chocolateBars = ['snickers','hundred grand','kitkat','skittles']
function addElementToBeginningOfArray(array,element){
  newArray = [element, ...array]
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element){
  return array.unshift(element)
}
