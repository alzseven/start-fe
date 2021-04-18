/* eslint-disable linebreak-style */
const $btn = document.getElementById('btn');
const $num = document.getElementById('num');
const $result = document.getElementById('result');

function GuGuDan(val) {
  let str = '';
  for (let i = 1; i <= 9; i += 1) {
    str += `<p> ${val} x ${i} = ${val * i} </p>`;
  }
  return str;
}

$btn.addEventListener('click', () => {
  if ($num.value === '') {
    // eslint-disable-next-line no-alert
    alert('숫자를 입력해주세요.');
  } else {
    $result.innerHTML = GuGuDan($num.value);
  }
});
