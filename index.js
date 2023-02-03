let count = 0;
const dodges = getRandomInt(5, 12);
const encouragingMessages = [
  'Oh, soooo close that time!',
  "Don't give up! You can click that button!",
  'Just keep trying :)',
];

/**DOM SELECTORS**/
const root = document.querySelector('#root');
const badButton = document.createElement('button');
const message = document.createElement('h1');
badButton.innerText = 'Click To Start';
root.appendChild(badButton);
root.appendChild(message);

/**EVENT LISTENERS**/
badButton.addEventListener('mouseover', () => {
  if (count < dodges) {
    assignStyle();
    message.innerText =
      encouragingMessages[getRandomInt(0, encouragingMessages.length - 1)];
    count++;
  }
});
badButton.addEventListener('click', () => {
  message.innerText = `Hurray it took you ${count} tries to click the button!`;
});

/**HELPER FUNCTIONS**/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function whichWay(axis) {
  if (axis === 'x') {
    return getRandomInt(0, 1) === 0 ? 'left' : 'right';
  }
  if (axis === 'y') {
    return getRandomInt(0, 1) === 0 ? 'top' : 'bottom';
  }
}

function assignStyle() {
  const leftOrRight = whichWay('x');
  const upOrDown = whichWay('y');

  const styleString = `position: relative;
    ${leftOrRight}: ${getRandomInt(0, 30)}vw;
    ${upOrDown}: ${getRandomInt(0, 30)}vh;`;

  console.log(styleString);
  badButton.style = styleString;
}
