"use strict";

/*-----------------------------------------------------------------------------------*/

/*        1         */

let a = prompt("input");
a = +a;
alert(typeof a);

if (a % 2 === 0) {
  alert("четное");
} else if (a % 1 === 0) {
  alert("нечетное");
} else {
  alert("Упс, кажется вы ошиблись");
}

if (a > 0) {
  alert(true);
} else if (a < 0) {
  alert(false);
} else {
  alert(false);
}

/*-----------------------------------------------------------------------------------*/

/*        2        */

let x = NaN;

if (typeof x === "number" && !isNaN(x)) {
  console.log("value is Number");
} else if (typeof x === "string") {
  console.log("is string");
} else if (typeof x === "boolean") {
  console.log("is Boolean");
} else {
  console.log("x type is undefined");
}

/*-----------------------------------------------------------------------------------*/

/*        3        */

let string = prompt("Введите слово или число");
function reverse(string) {
  return string.split("").reverse().join("");
}
console.log(reverse(string));
/*-----------------------------------------------------------------------------------*/

/*        4        */

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min));
}

console.log(getRandomRange(0, 100));

/*-----------------------------------------------------------------------------------*/

/*        5        */

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

/*-----------------------------------------------------------------------------------*/

/*        6        */

let arr1 = [1, 2, 3];

arr1.forEach(function (item, index, array) {
  console.log(item);
});
/*-----------------------------------------------------------------------------------*/

/*        7        */

let y = ["a", "b", "c", "d", "e", "f", "g", "s"];

let theSame = true;
for (let i = 0; i < y.length - 1; i++) {
  for (let j = i + 1; j < y.length; j++) {
    if (typeof y[i] !== typeof y[j]) {
      theSame = false;
    }
  }
}
if (theSame) {
  console.log("array is the same");
} else {
  console.log("array is not the same");
}

/*-----------------------------------------------------------------------------------*/

/*        7        */

let q = [10, 5, 0.4, null, 2, 0.8, 67, undefined, "1"];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
function sortArr() {
  for (let i = 0; i < q.length; i++) {
    if (typeof q[i] === "number" || !isNaN(q[i])) {
      numbercount += 1;
      if (q[i] === 0) {
        zerocount += 1;
      } else if (q[i] % 2 === 0) {
        evencount += 1;
      } else {
        oddcount += 1;
      }
    }
  }
  console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей,
 ${evencount} чётных, ${oddcount} нечётных.`);
}
sortArr();
/*-----------------------------------------------------------------------------------*/

/*        8       */

let animals = new Map([
  ["dog", "good"],
  ["cat", "bad"],
  ["parrot", "kind"],
]);
animals.forEach((value, key) => {
  console.log(`${key} - x  ${value} - y`);
});
