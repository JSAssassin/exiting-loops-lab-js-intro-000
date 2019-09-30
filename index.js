function breakOut(array, changeValue, stopValue){
  array.forEach((element, i, arr) => {
    arr[i] = changeValue;

    if(arr[i] === stopValue) {
      break;
    }

  })

  return array;
}
