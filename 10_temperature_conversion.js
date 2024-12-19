/*
  Write a function that converts temperature from one unit to another

  Function takes three arguments: `from`, `to`, `value`
  
  `from` and `to` can have following values:
    - C
    - F
    - K

  Here C means Celsius, K is Kelvin and F is Fahrenheit

  Examples:
    convert('C', 'K', 0) => 273.15
    convert('C', 'F', 37) => 98.6
    convert('F', 'K', 98.6) => 310.15
    convert('F', 'C', -40) => -40
    convert('K', 'C', 100) => -173.15
    convert('K', 'F', 100) => -279.67

  Here are the conversion formulae in case you wonder how it is done :)
    - F to C:
      (F − 32) × 5/9 = C
    - K to C:
      K − 273.15 = C

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/

function celsiusToKelvin(value) {
  return value + 273.15;
}

function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32;
}

function kelvinToFahrenheit(value) {
  return ((value - 273.15) * 9) / 5 + 32;
}

function kelvinToCelsius(value) {
  return value - 273.15;
}

function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

function fahrenheitToKelvin(value) {
  return ((value - 32) * 5) / 9 + 273.15;
}

function toCelsius(from, value) {
  if (from === 'K') {
    return kelvinToCelsius(value);
  }

  if (from === 'F') {
    return fahrenheitToCelsius(value);
  }

  return value;
}

function toKelvin(from, value) {
  if (from === 'C') {
    return celsiusToKelvin(value);
  }

  if (from === 'F') {
    return fahrenheitToKelvin(value);
  }

  return value;
}

function toFahrenheit(from, value) {
  if (from === 'C') {
    return celsiusToFahrenheit(value);
  }

  if (from === 'K') {
    return kelvinToFahrenheit(value);
  }

  return value;
}

function convertingToRequiredUnit(from, to, value) {
  switch (to) {
    case 'C':
      return toCelsius(from, value);
    case 'K':
      return toKelvin(from, value);
    case 'F':
      return toFahrenheit(from, value);
  }
}

function isValidUnit(unit) {
  if (unit !== 'C' && unit !== 'F' && unit !== 'K') {
    return false;
  }

  return true;
}

function convert(from, to, value) {
  if (!isValidUnit(from) || !isValidUnit(to)) {
    return NaN;
  }

  if (from === to) {
    return +value;
  }

  return convertingToRequiredUnit(from, to, +value);
}

function prepareMessageForTestCase(from, to, value, actual, expected) {
  const isTestPassed = actual === expected ? "✅" : "❌";
  const message = isTestPassed + "from:" + from + " to:" + to + " value:";
  return message + value + " expected:" + expected + " actual:" + actual;
}

function testConvert(from, to, value, expected) {
  const actual = convert(from, to, value);
  console.log(prepareMessageForTestCase(from, to, value, actual, expected));
}

function testAll() {
  testConvert("C", "K", 0, 273.15);
  testConvert("C", "F", 37, 98.6);
  testConvert("K", "C", 0, -273.15);
  testConvert("K", "F", 100, -279.66999999999996);
  testConvert("F", "C", -40, -40);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert("C", "C", "100", 100);
  testConvert("K", "K", 100, 100);
  testConvert("g", "g", 100, NaN);
  testConvert("C", "C", "10Z", NaN);
  testConvert('C', 'K', 0, 273.15);
  testConvert('C', 'C', 0, 0);
  testConvert('C', 'C', "sdfd", NaN);
  testConvert('C', 'F', 37, 98.6);
  testConvert('F', 'K', 98.6, 310.15);
  testConvert('K', 'C', 100, -173.15);
  testConvert('a', 'K', 0, NaN);
  testConvert('s', 's', 100, NaN);
  testConvert('C', 'C', "0", 0);
  testConvert("", "", "10Z", NaN);
}

testAll();