const $btn = document.getElementById("btn");
const $num = document.getElementById("num");
const $result = document.getElementById("result");

$btn.addEventListener("click", (event) => {
  if ($num.value === "") {
    alert("숫자를 입력해주세요.");
  } else {
    $result.innerHTML = GuGuDan($num.value);
  }
});

function GuGuDan(val) {
  let str = "";
  for (let i = 1; i <= 9; i++) {
    str += `<p> ${val} x ${i} = ${val * i} </p>`;
  }
  return str;
}
