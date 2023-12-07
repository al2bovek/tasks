function getInputsValueSum(inputsArr) {
    let sum = 0;
    for(let el of inputsArr) {
        sum += +el.value;
    }
    return sum;
}

function getInputValueElSum(str, arr, sum = 0) {
    arr = [...str];
    for(let el of arr)
        sum += +el;
    return sum;
}

function getInputStrValueElSum(str, arr, sum = 0) {
    arr = str.split(',');
    for(let el of arr)
        sum += +el;
    return sum / arr.length;
}
function getValueToInput(inputValue, inputValuesArr) {
    let arr = inputValue.value.split(' ');
   for(i = 0; i < arr.length; i++) {
       inputValuesArr[i].value = arr[i];
   }
}

function getWordFirstLetterToUpperCase(inputValue) {
  let arr = inputValue.value.split(' ');
     for(i = 0; i < arr.length; i++) {
       arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
   }
    return arr.join(' ');
}