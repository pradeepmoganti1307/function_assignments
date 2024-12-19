/*
  Implement the below function to calculate the factorial of `number`.
  Examples:
    factorial(3) => 6
    factorial(5) => 120
    factorial(0) => 1

  *Your function must return a value*

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function factorial(number) {
  let result = 1;

  for (let factor = 1; factor <= number; factor++) {
    result = result * factor;
  }

  return result;
}

function prepareMessageForTestCase(number, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " number:" + number + " expected:" + expected;
  return message + " actual:" + actual;
}

function testFactorial(number, expected) {
  const actual = factorial(number);
  console.log(prepareMessageForTestCase(number, actual, expected));
}

function testCases() {
  testFactorial(0, 1);
  testFactorial(1, 1);
  testFactorial(2, 2);
  testFactorial(3, 6);
  testFactorial(4, 24);
  testFactorial(5, 120);
  testFactorial(6, 720);
}

testCases();