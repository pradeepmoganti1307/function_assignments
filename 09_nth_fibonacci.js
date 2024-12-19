/*
  Write a function that returns the nth fibonacci term
  
  Examples:
    nthFibonacciTerm(1) => 0
    nthFibonacciTerm(4) => 2
    nthFibonacciTerm(6) => 5

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function nthFibonacciTerm(nthTerm) {
  let currentTerm = 0;
  let nextTerm = 1;

  for (let counter = 1; counter < nthTerm; counter++) {
    const sumOf2Terms = currentTerm + nextTerm;
    currentTerm = nextTerm;
    nextTerm = sumOf2Terms;
  }

  return currentTerm;
}

function prepareMessageForTestCase(nthTerm, actualTerm, expectedTerm) {
  const isTestPassed = actualTerm === expectedTerm ? "✅" : "❌";
  const message = isTestPassed + " input:" + nthTerm + " actual:" + actualTerm;
  return message + " expected:" + expectedTerm;
}

function testnthFibonacciTerm(nthTerm, expectedTerm) {
  const actualTerm = nthFibonacciTerm(nthTerm);
  console.log(prepareMessageForTestCase(nthTerm, actualTerm, expectedTerm));
}

function testCases() {
  testnthFibonacciTerm(0, 0);
  testnthFibonacciTerm(1, 0);
  testnthFibonacciTerm(2, 1);
  testnthFibonacciTerm(3, 1);
  testnthFibonacciTerm(4, 2);
  testnthFibonacciTerm(5, 3);
  testnthFibonacciTerm(6, 5);
}

testCases();