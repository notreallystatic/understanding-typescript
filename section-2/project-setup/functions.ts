function add(num1: number, num2: number): number {
  return num1 + num2;
}

function printResult(num: number): void {
  console.log('Result:', num);
}

printResult(add(10, 20));

let combine: (a: number, b: number) => number;

combine = add;
console.log(combine(10, 20));

// combine = printResult; // will throw error as combine needs to arguments and return type number

function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  let result = num1 + num2;
  cb(result);
}

addAndHandle(100, 200, console.log);