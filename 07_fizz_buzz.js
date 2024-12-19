/*
  Write a function that takes an integer as input and returns a string.

  If the integer is divisible by 3, return "fizz".
  If the integer is divisible by 5, return "buzz".
  If the integer is divisible by both 3 and 5, return "fizzbuzz".
  Otherwise, return the integer as a string.

  Examples:
    fizzBuzz(3) => "fizz"
    fizzBuzz(5) => "buzz"
    fizzBuzz(15)=> "fizzbuzz"
    fizzBuzz(7) => "7"
  
  **There won't be any negative numbers**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function isDivisible(operand1, operand2) {
  return operand1 % operand2 === 0;
}

function fizzBuzz(number) {
  let fizzBuzzResult = isDivisible(number, 3) ? "fizz" : "" + number;
  fizzBuzzResult = isDivisible(number, 5) ? "buzz" : fizzBuzzResult;
  fizzBuzzResult = isDivisible(number, 15) ? "fizzbuzz" : fizzBuzzResult;
  //change to early exits.
  return fizzBuzzResult;
}

function prepareMessageForTestCase(number, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + " number:" + number + " expected:" + expected;

  return message + " actual:" + actual;
}

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);

  console.log(prepareMessageForTestCase(number, actual, expected));
}

function testCases() {
  testFizzBuzz(3, "fizz");
  testFizzBuzz(5, "buzz");
  testFizzBuzz(15, "fizzbuzz");
  testFizzBuzz(0, "fizzbuzz");
  testFizzBuzz(7, "7");
}

testCases();