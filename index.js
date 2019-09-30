function breakOut(array, changeValue, stopValue){
  array.forEach((element,index )=> {
    if(index === stopValue) {
      break;
    } else {
      element = changeValue;
    }
  })
}
