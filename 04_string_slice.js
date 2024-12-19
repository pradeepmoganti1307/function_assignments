/*
  Implement the below function that
  creates a slice/substring using start and end indices

  Examples:
    slice('hello world', 0, 4) => 'hello'
    slice('negative start', -1, 8) => 'negative '
    slice('', 0, 10) => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function max(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function min(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function slice(text, start, end) {
  const startingOfText = max(start, 0);
  const endingOfText = min(end, text.length - 1);
  let subText = '';

  for (let index = startingOfText; index <= endingOfText; index++) {
    subText += text[index];
  }

  return subText;
}

function prepareMessageForTestCase(text, start, end, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " text:" + text + " start:" + start + " end:";
  return message + end + " expected: " + expected + " actual:" + actual;
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  console.log(prepareMessageForTestCase(text, start, end, actual, expected));
}

function testCases() {
  testSlice('hello world', 0, 4, 'hello');
  testSlice('', 0, 10, '');
  testSlice('negative start', -1, 8, 'negative ');
  testSlice('starting', 2, 4, 'art');
}

testCases();
