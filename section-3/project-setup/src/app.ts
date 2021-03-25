const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log('hello... ', message);
}


if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'Phineas'));
}