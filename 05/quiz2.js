let $select = null;

function printBoards() {
  const $board = document.getElementById('board');
  const boardCount = 16;
  const boardLineCount = 4;
  let isWhite = false;
  let className = '';
  let str = '';

  for (let i = 0; i < boardCount; i += 1) {
    className = isWhite ? 'black' : 'white';

    str += `<span class="${className}"></span>`;

    isWhite = !isWhite;

    if (i % boardLineCount === boardLineCount - 1) {
      isWhite = !isWhite;
    }
  }
  $board.innerHTML = str;
}

function select(event) {
  if ($select) {
    $select.className = $select.className.replace(' select', '');
  }
  const el = event.currentTarget;
  el.className += ' select';
  $select = el;
}

function addEvent() {
  const $boards = document.querySelectorAll('span');
  const boardsLength = $boards.length;
  for (let i = 0; i < boardsLength; i += 1) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();
