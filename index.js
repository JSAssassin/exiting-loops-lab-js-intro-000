function breakOut(array, changeValue, stopValue){
  for(let i = 0; i < array.length; i++) {
    if(array[i] === stopValue){
      break;
    } else {
      array[i] = changeValue;
    }
  }

  return array;
}


function keepGoing(array, changeValue, skipValue) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === skipValue){
      continue;
    } else {
      array[i] = changeValue;
    }
  }

  return array;
}

function findBy(array, findFn) {
  for(let i = 0; i < array.length; i++) {
    let element = array[i];
    if(findFn(element)){
      return element;
    }
  }

  return null;
}
