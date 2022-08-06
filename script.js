function computeStringEquality(stringA, stringB) {
  const isValidInput = (stringA, stringB) => {
    return (
      Object.prototype.toString.call(stringA) === '[object String]' &&
      Object.prototype.toString.call(stringB) === '[object String]' &&
      stringA?.length > 0 &&
      stringB?.length > 0
    );
  };

  if (!isValidInput(stringA, stringB)) {
    // return 'FALSE' if input is falsy
    return 'FALSE';
  }

  let conditionSatisfied = false; // as soon as first occurance is found, break
  let outputString = '';

  const isCharInTheInput = (character, charCode) => {
    if (stringB.includes(character)) {
      outputString += character;
    } else if (
      charCode >= 97 &&
      stringB.includes(String.fromCharCode(charCode - 32))
    ) {
      // capitalize and check
      outputString += String.fromCharCode(charCode - 32);
    }
  };

  for (let i = 0; i < stringA.length && !conditionSatisfied; i++) {
    isCharInTheInput(stringA[i], stringA.charCodeAt(i));
    conditionSatisfied = outputString === stringB;
  }

  return conditionSatisfied ? 'TRUE' : 'FALSE';
}

console.log('Test Case 1: ', computeStringEquality('ebCde', 'BCD'));
console.log('Test Case 2: ', computeStringEquality('eCB', 'ECB'));
console.log('Test Case 3: ', computeStringEquality('BcdEF', 'BCEF'));
console.log('Test Case 4: ', computeStringEquality('BCD', 'BcD'));
console.log('Test Case 5: ', computeStringEquality(['eCB'], 'ECB'));
console.log('Test Case 6: ', computeStringEquality('', 'BCEF'));
console.log('Test Case 7: ', computeStringEquality('', ''));
console.log('Test Case 8: ', computeStringEquality(undefined, null));
console.log('Test Case 9: ', computeStringEquality('bcdebCdeBCD', 'BCD')); // <- won't compute till end of string, will break after first occurance is found
