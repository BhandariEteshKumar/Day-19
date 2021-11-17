let tem;
function text() {
  let inputtext = document.getElementById("text").value;
  let len = inputtext.length;
  if (
    inputtext.charCodeAt(len - 1) < 48 ||
    inputtext.charCodeAt(len - 1) > 57
  ) {
    alert("Only Numbers are allowed");
    document.getElementById("text").value = tem;
  } else tem = inputtext;
}

function enteredVal(text) {
  document.getElementById("text").value += text;
}

function cleartext() {
  document.getElementById("text").value = "";
}

function result() {
  let input = document.getElementById("text");
  let ans = eval(input.value);
  input.value = ans;
}
