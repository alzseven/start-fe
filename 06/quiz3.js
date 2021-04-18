const $addRed = document.querySelector('.add-red');
const $addBtn = document.querySelector('.add-btn');
const $deleteBtn = document.querySelector('.delete-btn');
const $textBtn = document.querySelector('.text-btn');
const $resetBtn = document.querySelector('.reset-btn');
const $toggleBtn = document.querySelector('.toggle-btn');
const $imageBtn = document.querySelector('.image-btn');
let isToggled = false;

function GetFirstBox() {
  return document.querySelector('.box');
}

function FindAllBoxesAndDoEach(func) {
  const $boxes = document.querySelectorAll('.box');
  $boxes.forEach(func);
}

function SetFirstBoxRed() {
  GetFirstBox().classList.add('red');
}

function AddNewBox() {
  const $newBox = document.createElement('div');
  $newBox.classList.add('box');
  document.body.appendChild($newBox);
}

function DeleteFirstBox() {
  document.body.removeChild(GetFirstBox());
}

function AddTextToAllBoxes() {
  const $txt = document.querySelector('.txt');
  FindAllBoxesAndDoEach((box) => {
    const $box = box;
    $box.textContent = $txt.value;
  });
}

function DeleteAllBoxes() {
  FindAllBoxesAndDoEach((box) => document.body.removeChild(box));
}

function HideFirstBox() {
  GetFirstBox().classList.add('hidden');
}

function RevealFirstBox() {
  GetFirstBox().classList.remove('hidden');
}

function OnToggle() {
  if (isToggled === true) {
    RevealFirstBox();
    isToggled = false;
  } else {
    HideFirstBox();
    isToggled = true;
  }
}

function AddImageToFirstBox() {
  if (document.querySelectorAll('.box').length === 0) {
    AddNewBox();
  }
  const image = document.createElement('img');
  image.src = 'https://i.imgur.com/69NjYBH.png';
  GetFirstBox().appendChild(image);
}

$addRed.addEventListener('click', SetFirstBoxRed);
$addBtn.addEventListener('click', AddNewBox);
$deleteBtn.addEventListener('click', DeleteFirstBox);
$textBtn.addEventListener('click', AddTextToAllBoxes);
$resetBtn.addEventListener('click', DeleteAllBoxes);
$toggleBtn.addEventListener('click', OnToggle);
$imageBtn.addEventListener('click', AddImageToFirstBox);
