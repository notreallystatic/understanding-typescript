var userInput;
var userName;
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
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('Access denied.', 403);
