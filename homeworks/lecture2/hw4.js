// Below are some JavaScript scope related questions.

// 1. When executed, what value will be output?
function f() {
  var a = 10;
  if (a > 5) {
    a = 7;
  }
  console.log(a); // 7
}

// 2. When executed, what value will be output?
function f() {
  if (true) {
    var a = 5;
  }
  console.log(a); // 5
}

// 3. When executed, what value will be output?
function f() {
  a = 3;
}
f();
console.log(a); // 3

// 4.
var a = 5;
function first() {
  a = 6;
}

function second() {
  console.log(a);
}
first();
second(); // 6

// 5.
var a = 5;
function f() {
  var a = 7;
  console.log(a); //7
}

// 6.
var a = 1;
function b() {
  a = 10;
  return;
  function a() {} // a is hoisted on the top
}
b();
console.log(a); // 1
