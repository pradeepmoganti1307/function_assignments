/*
  Implement the below function that tells if a given year is leap or not.
  Examples:
    isLeapYear(1900) => false
    isLeapYear(2020) => true
    isLeapYear(2001) => false

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return !isDivisible(year, 100) && isDivisible(year, 4);
}

function prepareMessageForTestCase(year, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " year:" + year + " expected:" + expected;

  return message + " actual:" + actual;
}

function testIsLeapYear(year, expected) {
  const actual = isLeapYear(year);
  
  console.log(prepareMessageForTestCase(year, actual, expected));
}

function testCases() {
  testIsLeapYear(1900, false);
  testIsLeapYear(2020, true);
  testIsLeapYear(2001, false);
  testIsLeapYear(1994, false);
  testIsLeapYear(1996, true);
  testIsLeapYear(9999, false);
  testIsLeapYear(1000, false);
  testIsLeapYear(-1, false);
}

testCases();