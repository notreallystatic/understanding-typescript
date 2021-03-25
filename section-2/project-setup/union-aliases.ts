type Combinable = number | string;  // UNION_TYPES
type ConversionDescriptor = 'as-number' | 'as-text'; // LITERAL_TYPEs

function combine(
  num1: Combinable,
  num2: Combinable,
  resultConversion: ConversionDescriptor
  ) {
  let result;
  if (typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === 'as-number') {
    result = +num1 + +num2;
  } else {
    result = num1.toString() + num2.toString();
  }
  return result;
}

const phineas = {
  name: 'Phineas',
  age: 10
};

const ferb = {
  name: 'Ferb',
  age: 12
};

let combinedNames = combine(phineas.name, ferb.name, 'as-text');
console.log(combinedNames);

let combinedAges = combine(phineas.age, ferb.age, 'as-number');
console.log(combinedAges);

let combinedAgesFromStrings = combine(phineas.age.toString(), ferb.age.toString(), 'as-number');
console.log(combinedAgesFromStrings);