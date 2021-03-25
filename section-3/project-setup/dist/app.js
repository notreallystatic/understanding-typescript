'use strict';
const button = document.querySelector('button');
function clickHandler(message) {
  console.log('hello... ', message);
}
if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Phineas'));
}
