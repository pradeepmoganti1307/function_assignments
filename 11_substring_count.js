/*
  Write a function that counts the occurrence of a substring in a string

  Examples:
    occurrences('hello world', 'l') => 3
    occurrences('hello world', 'll') => 1
    occurrences('hello world', 'world') => 1
    occurrences('hello world', 'zebra') => 0

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isSubStringPresentAt(string, subString, index) {
  for (let subIndex = 0; subIndex < subString.length; subIndex++) {
    if (string[index] !== subString[subIndex]) {
      return false;
    }

    index += 1;
  }

  return true;
}


function calculateEndIndex(string, subString) {
  return subString === "" ? 0 : string.length - subString.length + 1;
}

function occurrences(string, subString) {
  const endIndex = calculateEndIndex(string, subString);
  let countOfOccurences = 0;

  for (let index = 0; index < endIndex; index++) {
    if (isSubStringPresentAt(string, subString, index)) {
      countOfOccurences = countOfOccurences + 1;
    }
  }

  return countOfOccurences;
}

function prepareMessageForTestCase(string, subString, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " string:" + string + " subString:";
  return message + subString + " expected:" + expected + " actual:" + actual;
}

function testOccurrences(string, subString, expected) {
  const actual = occurrences(string, subString);
  console.log(prepareMessageForTestCase(string, subString, actual, expected));
}

function testCases() {
  testOccurrences('hello world', 'l', 3);
  testOccurrences('hello world', 'll', 1);
  testOccurrences('hello world', 'world', 1);
  testOccurrences('hello world', 'zebra', 0);
  testOccurrences('aaaa', 'aa', 3);
  testOccurrences('', 'aa', 0);
  testOccurrences('aaaa', '', 0);
  testOccurrences('aaaa', 'aaaa', 1);
  testOccurrences('', '', 0);
}

testCases();