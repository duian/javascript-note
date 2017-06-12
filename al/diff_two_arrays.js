function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // if a element searched twice in newArray
  // for(var i = 0, len = newArray.length; i < len; i++) {
  //   var newArray2 = newArray.slice(0, i).concat(newArray.slice(i + 1));
  //   if (newArray2.indexOf(newArray[i]) === -1) {
  //     newArr.push(newArray[i]);
  //   }
  // }
  newArray = newArray.filter((number) => {
    var i = newArray.indexOf(number);
    var newArrayWithoutI = newArray.slice(0, i).concat(newArray.slice(i + 1));
    return newArrayWithoutI.indexOf(number) === -1;
  });

  return newArray;
}

function diffArray(arr1, arr2) {
  var newArr = [];

  var newArr1 = arr1.filter((i) => arr2.indexOf(i) === -1 );
  var newArr2 = arr2.filter((i) => arr1.indexOf(i) === -1 );

  return newArr = [...newArr1, ...newArr2];
}

function diffArray(arr1, arr2) {
  var newArr = [];

  for(var i = 0, len = arr1.length; i < len; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for(var j = 0, len2 = arr2.length; j < len2; j++) {
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}