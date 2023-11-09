var min = function(list){
    let minValue = list[0];
    for (let i = 1; i < list.length; i++){
      if (list[i] < minValue){
        minValue = list[i];
      }
    }
    return minValue;
}

var max = function(list){
    let maxValue = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > maxValue) {
        maxValue = list[i];
      }
    }
    return maxValue;
}
