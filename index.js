function breakOut(array, changeValue, stopValue){
  array.forEach((element)=> {
    if(element === stopValue) {
      break;
    } else {
      element = changeValue;
    }
  })
}
