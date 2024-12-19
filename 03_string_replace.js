/*
  Implement the below function 
  that replaces a character `match` with another character `replacement`
  in a given text and returns a new string.

  Examples:
    replace('hello world', 'l', 'n') => 'henno world'
    replace('no spaces in here', ' ', '_') => 'no_spaces_in_here'
    replace('', 'd', 'e') => ''

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function getReplacement(character, match, replacement) {
  return character === match ? replacement : character;
}

function replace(text, match, replacement) {
  let replacedText = '';

  for (let index = 0; index < text.length; index++) {
    replacedText += getReplacement(text[index], match, replacement);
  }

  return replacedText;
}

function prepMsgForTestCase(text, match, replacement, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const messageSegment1 = isTestPassed + " text:" + text + " match:" + match;
  const messageSegment2 = " replacement:" + replacement + " expected:";
  return messageSegment1 + messageSegment2 + expected + " actual:" + actual;
}

function testReplace(text, match, replacement, expected) {
  const actual = replace(text, match, replacement);
  console.log(prepMsgForTestCase(text, match, replacement, actual, expected));
}

function testCases() {
  testReplace('hello world', 'l', 'n', "henno wornd");
  testReplace('no spaces in here', ' ', '_', "no_spaces_in_here");
  testReplace('no', ' ', '_', 'no');
  testReplace('no spaces in here', ' ', '-', "no-spaces-in-here");
  testReplace('', 'd', 'e', '');
  testReplace('ddddde', 'd', 'e', "eeeeee");
}

testCases();
