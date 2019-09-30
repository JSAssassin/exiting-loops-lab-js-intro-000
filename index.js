function breakOut(array, changeValue, stopValue){
  array.forEach((element)=> {
    element = changeValue;
    
    if(element === stopValue) {
      break;
    }
    
  })

  return array;
}
