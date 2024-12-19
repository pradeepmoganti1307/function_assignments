/*
  Write a function that returns the first prime number above given number
  
  Examples:
    firstPrimeAbove(3) => 5
    firstPrimeAbove(0) => 2
    firstPrimeAbove(15) => 17

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function isDivisible(operand1, operand2) {
  return operand1 % operand2 === 0;
}

function isPrime(number) {
  for (let factor = 2; factor < (number ** 0.5 + 1); factor++) {
    if (isDivisible(number, factor)) {
      return false;
    }
  }

  return true;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  let primeCandidate = number + 1;

  while (!isPrime(primeCandidate)) {
    primeCandidate = primeCandidate + 1;
  }

  return primeCandidate;
}

function prepareMessageForTestCase(number, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " number:" + number + " expected:" + expected;
  return message + " actual:" + actual;
}

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
  console.log(prepareMessageForTestCase(number, actual, expected));
}

function testCases() {
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(15, 17);
  testFirstPrimeAbove(24, 29);
}

testCases();