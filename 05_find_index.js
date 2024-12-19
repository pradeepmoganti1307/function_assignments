/*
  Implement the below function to find the first index of a character
  Return -1 if the target character is absent 

  Examples:
    findIndex('hello world', 'o') => 4
    findIndex('repeating iiiiiiii', 'i') => 6
    findIndex('not found', 'z') => -1

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function findIndex(text, target) {
  for (let index = 0; index < text.length; index++) {
    if (text[index] === target) {
      return index;
    }
  }

  return -1;
}

function prepareMessageForTestCase(text, target, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " text:" + text + " target:" + target;
  return message + " expected:" + expected + " actual:" + actual;
}

function testFindIndex(text, target, expected) {
  const actual = findIndex(text, target);
  console.log(prepareMessageForTestCase(text, target, actual, expected));
}

function testCases() {
  testFindIndex('', '', -1);
  testFindIndex('o', 'o', 0);
  testFindIndex('hello world', 'w', 6);
  testFindIndex('not found', 'd', 8);
  testFindIndex('repeating iiiiii', 'i', 6);
  testFindIndex('not found', 's', -1);
  testFindIndex('hello ', '', -1);
  testFindIndex('', 'j', -1);
}

testCases();