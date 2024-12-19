/*
  Write a function that tells if a string ends with a specific subString

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

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

function endsWith(string, subString) {
  const indexForSuffix = string.length - subString.length;

  return isSubStringPresentAt(string, subString, indexForSuffix);
}

function prepareMessageForTestCase(string, subString, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + "string:" + string + " subString:" + subString;

  return message + " expected:" + expected + " actual:" + actual;
}

function testEndsWith(string, subString, expected) {
  const actual = endsWith(string, subString);
  
  console.log(prepareMessageForTestCase(string, subString, actual, expected));
}

function testCases() {
  testEndsWith('hello world', 'ld', true);
  testEndsWith('world', 'world', true);
  testEndsWith('hello world', 'world', true);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('', 'wor', false);
  testEndsWith('hello world', '', true);
  testEndsWith('', '', true);
  testEndsWith('hi ', ' ', true);
}

testCases();
