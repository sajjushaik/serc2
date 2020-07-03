function dis(val) {
  document.getElementById("result").value += val;
}
function clr() {
  document.getElementById("result").value = "";
}
function solve() {
  let x = document.getElementById("result").value;
  var n = x.includes("√");
  var n1 = x.includes("%");
  var n2 = x.includes("+");
  var n3 = x.includes("-");
  var n4 = x.includes("*");
  var n5 = x.includes("/");
  if (n2 == true) {
    add(x);
  }
  if (n3 == true) {
    sub(x);
  }
  if (n4 == true) {
    mul(x);
  }
  if (n5 == true) {
    div(x);
  }
  if (x < 0) {
    abs(x);
  }
  if (n == true) {
    sqrt(x);
  }
  if (n1 == true) {
    per(x);
  }
}
function add() {
  var x = document.getElementById("result").value;
  var res = x.split("+");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 + num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function sub() {
  var x = document.getElementById("result").value;
  var res = x.split("-");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 - num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function mul() {
  var x = document.getElementById("result").value;
  var res = x.split("*");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 * num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function div() {
  var x = document.getElementById("result").value;
  var res = x.split("/");

  var num1 = parseInt(res[0]);
  var num2 = parseInt(res[1]);
  ans = num1 / num2;

  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function sqrt() {
  var x = document.getElementById("result").value;
  var r1 = Number.isInteger(x);
  if (r1 == false) {
    x = r1.toFixed(3);
  } else {
    x = x;
  }
  y = x.replace("√", "");
  ans = Math.sqrt(y);

  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}

function per() {
  var x = document.getElementById("result").value;
  var res = x.split("%");

  var num1 = res[0];
  var num2 = res[1];
  ans = (num1 / 100) * num2;
  ans = ans.toString();
  document.getElementById("result").value = ans;
  document.getElementById("result").disabled = true;
}
function abs() {
  let x = document.getElementById("result").value;
  if (x < 0) {
    x = x * -1;
  }
  document.getElementById("result").value = x;
  document.getElementById("result").disabled = true;
}

/* validation */

function validate() {
  var no = document.getElementById("no").value;
  var phoneno = /^\d{10}$/;
  if (no.match(phoneno)) {
  } else {
    alert("Not a valid Phone Number");
    return false;
  }
  var x = document.getElementById("email").value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    alert("Please enter a valid e-mail address:");
    return false;
  }

  var name = document.getElementById("name").value;
  if (!isNaN(name.charAt(0))) {
    alert("First Character Cant be number in Name.");
  }
}
/*palindrome*/
function pali() {
  var string = document.getElementById("pali").value;
  var i,
    st = "";
  for (i = string.length - 1; i >= 0; i--) {
    st += string[i];
  }
  var n = st.localeCompare(string);
  if (n == 0) {
    alert("Palindromic String");
    return true;
  } else {
    alert("Not Palindromic String");
    return false;
  }
}
