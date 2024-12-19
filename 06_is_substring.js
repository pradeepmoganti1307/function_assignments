/*
  Implement the below function that tells if a string is substring of
  another string

  Usage:
    isSubstring('hello world', 'worl') => true
    isSubstring('repeating iiiiiiii', 'iii') => true
    isSubstring('not found', 'for') => false

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

function isSubstring(string, subString) {
  const endIndex = calculateEndIndex(string, subString);

  for (let index = 0; index < endIndex; index++) {
    if (isSubStringPresentAt(string, subString, index)) {
      return true;
    }
  }

  return false;
}

//--------------------TEST FRAGMENT-------------------------------//
function prepareMessageForTestCase(string, substring, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " string:" + string + " substring:";
  return message + substring + " expected:" + expected + " actual:" + actual;
}

function testIsSubstring(string, substring, expected) {
  const actual = isSubstring(string, substring);
  console.log(prepareMessageForTestCase(string, substring, actual, expected));
}

function testCases() {
  testIsSubstring('hello world', 'worl', true);
  testIsSubstring('', 'a', false);
  testIsSubstring('aaaa', '', false);
  testIsSubstring('', '', false);
  testIsSubstring('repeating iiiiiiii', 'iii', true);
  testIsSubstring('not found', 'for', false);
  testIsSubstring('pradeep', 'deepz', false);
  testIsSubstring('pradeek', 'k', true);
}

testCases();