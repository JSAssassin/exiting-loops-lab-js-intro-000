function breakOut(array, changeValue, stopValue){
  array.forEach((element,index )=> {
    element = changeValue;
    if(index === stopValue) {
      break;
    }
  })
}
