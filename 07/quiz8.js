const $box = document.getElementById('box');
const $max = document.getElementById('max');
const $min = document.getElementById('min');
const $createBtn = document.getElementById('btn');
let targetNumber = 0;
let currentNumber = 0;
let interval = null;

function printNumber() {
  $box.textContent = parseInt(currentNumber, 10);
  if (currentNumber > targetNumber) {
    currentNumber -= 1;
  } else if (currentNumber < targetNumber) {
    currentNumber += 1;
  } else {
    clearInterval(interval);
  }
}

function getRandomBetweenTwo(val1, val2) {
  let big = 0;
  let small = 0;
  if (val1 > val2) {
    big = val1;
    small = val2;
  } else {
    big = val2;
    small = val1;
  }
  const result =
    parseInt(Math.random() * (big - small), 10) + parseInt(small, 10);
  return result;
}

function onClickCreateBtn() {
  targetNumber = getRandomBetweenTwo($max.value, $min.value);
  currentNumber = parseInt($min.value, 10);
  interval = setInterval(printNumber, 1);
}

$createBtn.addEventListener('click', onClickCreateBtn);
