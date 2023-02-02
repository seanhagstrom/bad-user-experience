let count = 0;
const dodges = getRandomInt(1, 12);

/**DOM SELECTORS**/
const badButton = document.querySelector('#but-why');

/**EVENT LISTENERS**/
badButton.addEventListener('mouseover', () => {
  if (count < dodges) {
    count++;
    console.log(`count is: ${count}`);
    const leftOrRight = whichWay('x');
    const upOrDown = whichWay('y');

    const styleString = `position: relative;
      ${leftOrRight}: ${getRandomInt(0, 45)}vw;
      ${upOrDown}: ${getRandomInt(0, 45)}vh;`;

    console.log(styleString);
    badButton.style = styleString;

    console.dir(badButton);
  }
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
