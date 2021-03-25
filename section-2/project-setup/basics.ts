function add(n1: number, n2: number, checkResult: boolean, phrase: string) {
  let result = n1 + n2;
  if (checkResult)
    console.log(phrase + result);
  else 
    return n1 + n2;
}

let num1: number;
num1 = 100;
const num2 = 90;
const printResult = true;
const resultPhrase = 'Result :';
add(num1, num2, printResult, resultPhrase);
