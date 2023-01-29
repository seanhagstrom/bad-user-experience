let count = 0;

const badButton = document.querySelector('#but-why');

badButton.addEventListener('mouseover', () => {
  if (count < 5) {
    count++;
    console.log(`count is: ${count}`);
    badButton.style.position = 'relative';
    badButton.style.left = `${getRandomInt(0, 45)}vw`;
    badButton.style.top = `${getRandomInt(0, 45)}vh`;
    console.dir(badButton.style);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
