let userInput: unknown;
let userName: string;

userInput = 'something here';

/*
userName = userInput; 
// can't assign unknown to a string or any such variable
// however, we type of userInput is set to 'any' then we can assign it.
// TypeScript is more strict when we use 'unknown' instead of 'any'
*/
if (typeof userInput === 'string') {
  userName = userInput;
}
console.log(userInput);
console.log(userName);
userInput = 123;

// functions like this or with infinite loops which never really return anything, should be assigned a return-type of 'never'
function generateError(message: string, code :number): never {
  throw {message, code};
}

generateError('Access denied.', 403);
