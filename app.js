// Masalalar

// 1-masala

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getStudentsGrade(students, grade) {
//   students.map((el) => {
//     if (el.percent > 85) {
//       el.grade = 5;
//     } else if (el.percent < 85 && el.percent > 70) {
//       el.grade = 4;
//     } else if (el.percent < 70 && el.percent > 60) {
//       el.grade = 3;
//     }
//   });
//   let filteredStudents = students
//     .filter((ball) => ball.grade == grade)
//     .map((el) => el.name);
//   return filteredStudents;
// }
// console.log(getStudentsGrade(students, 5));

// 2-masala

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// let obj = {};
// animals.forEach((curVal) => {
//   if (obj[curVal] == undefined) {
//     obj[curVal] = 1;
//   } else {
//     obj[curVal] += 1;
//   }
// });
// console.log(obj);

// ////////////////////////////////

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const wordCount = animals.reduce((countObj, animal) => {
//   if (!countObj[animal]) {
//     countObj[animal] = 1;
//   } else {
//     countObj[animal]++;
//   }
//   return countObj;
// }, {});
// console.log(wordCount);

// 3-masala

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((el) => el ** 2);
// console.log(newArr);

// 4-masala

// let arr = [1, -4, 12, 0, -3, 29, -150];
// let newArr = arr
//   .filter((num) => num > 0)
//   .reduce((acc, curVal) => {
//     return acc + curVal;
//   });
// console.log(newArr);

// 5-masala

// let str = "George Raymond Richard Martin";
// let result = str
//   .split(" ")
//   .map((words) => words[0])
//   .join("");
// console.log(result);

// 6-masala

// let arr = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 97 },
//   { name: "Jeniffer", age: 65 },
// ];
// let result = arr.sort((el1, el2) => {
//   return el1.age - el2.age;
// });
// let javob = result[result.length - 1].age - result[0].age;
// console.log(javob);

// 7-masala

// let arr = [1, 4, 9, 16, 7, 8, 2, 3, 25];
// let juft = arr.filter((el) => el % 2 == 0);
// let toq = arr.filter((el) => el % 2 == 1);
// console.log("juft", juft);
// console.log("toq", toq);

// 8-masala

// let arr = [1, 4, 9, 16, , 4, 6, 7, 6, 4, 25];
// let result = arr.reduce((acc, curVal) => {
//   if (!acc.includes(curVal)) {
//     acc.push(curVal);
//   }
//   return acc;
// }, []);
// console.log(result);

// 9-masala

import products from "./data.js";

// let sortedById = products.sort((el1, el2) => {
//   return el1.id - el2.id;
// });
// console.log(sortedById);
// let sortedByPrice = products.sort((el1, el2) => {
//   return el1.price - el2.price;
// });
// console.log(sortedByPrice);

// 10-masala

// let sortedByRating = products.sort((el1, el2) => {
//   return el2.rating - el1.rating;
// });
// console.log("Best product:", sortedByRating[0]);

// 11-masala

// let sortedByPrice = products.sort((el1, el2) => {
//   return el1.price - el2.price;
// });
// console.log("Cheapest product:", sortedByPrice[0]);

// 12-masala

// let costOfAlProducts = products.reduce((acc, curVal) => {
//   return acc + curVal.price;
// }, 0);
// console.log(costOfAlProducts + "$");

// 13-masala

// const nameOfProducts = products.map((product) => product.title);
// console.log(nameOfProducts);

// 14-masala

// const nameOfProduct = products.find((product) => product.id == 5);
// console.log(nameOfProduct.title);

// 15-masala

// let filteredProducts = products.filter((product) => product.id != 4);
// console.log(filteredProducts);

// 16-masala

// function isOnlyLetters(str) {
//   const lowercaseRange = "abcdefghijklmnopqrstuvwxyz";
//   const uppercaseRange = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const letters = str.split("");
//   return letters.every(
//     (char) => lowercaseRange.includes(char) || uppercaseRange.includes(char)
//   );
// }
// const text1 = "HelloWorld";
// console.log(isOnlyLetters(text1));

// 17-masala

// let obj = {};
// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// function getTruthyFalsy(arr) {
//   let truthy = arr.filter((el) => Boolean(el) == true);
//   let falsy = arr.filter((el) => Boolean(el) == false);
//   obj.truthy = truthy;
//   obj.falsy = falsy;
//   return obj;
// }
// console.log(getTruthyFalsy(arr));

// 18-masala

// let str = "Men eng zo'r Programmerman";
// let arr = str.split(" ").map((word) => word.length);
// console.log(arr);

// 19-masala

// let str = "Men eng zo'r Programmerman";
// let arr = str.split("").some((el) => el == " ");
// console.log(arr);

// 20-masala

// const obj = { a: 2, b: 5, c: 7 };
// let result = Object.entries(obj).map((el) => el.join(""));
// console.log(result);

// 21-masala

// function digitSum(num) {
//   if (num <= 0) {
//     return 0;
//   }
//   let lastDigit = num % 10;
//   let otherDigits = Math.floor(num / 10);
//   return lastDigit + digitSum(otherDigits);
// }
// console.log(digitSum(1239));

// 22-masala

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

// 22-masala

// let result = pupils.reduce((acc, curVal) => {
//   return acc + curVal.protcent;
// }, 0);
// console.log((result / pupils.length).toFixed(1) + "%");

// 23-masala

// let result = pupils.map((pupil) => {
//   if (pupil.protcent >= 90) {
//     return {
//       name: pupil.name,
//       protcent: pupil.protcent,
//       grade: 5,
//     };
//   } else if (pupil.protcent >= 80) {
//     return {
//       name: pupil.name,
//       protcent: pupil.protcent,
//       grade: 4,
//     };
//   } else if (pupil.protcent >= 70) {
//     return {
//       name: pupil.name,
//       protcent: pupil.protcent,
//       grade: 3,
//     };
//   } else {
//     return {
//       name: pupil.name,
//       protcent: pupil.protcent,
//       grade: 2,
//     };
//   }
// });
// console.log(result);

// 24-masala

// let result = pupils.map((pupil) => {
//   if (pupil.protcent > 70) {
//     return { name: pupil.name, protcent: pupil.protcent, isPassed: true };
//   } else {
//     return { name: pupil.name, protcent: pupil.protcent, isPassed: false };
//   }
// });
// console.log(result);

// 25-masala

// let result = pupils
//   .map((pupil) => {
//     if (pupil.protcent > 70) {
//       return { name: pupil.name, protcent: pupil.protcent, isPassed: true };
//     } else {
//       return { name: pupil.name, protcent: pupil.protcent, isPassed: false };
//     }
//   })
//   .reduce((acc, val) => {
//     return acc + val.isPassed;
//   }, 0);
// let failed = pupils.length - result;
// console.log(`${result} ta o'tgan ${failed} ta yiqilgan`);

// Qo'shimcha masalalar
// 7-dars uyga vazifasi 21-masaladan boshlab

// 1-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 5;
// let result = arr.map((el) => el + k);
// console.log(result);

// 2-masala

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let halfLength = arr.length / 2;
// let firstHalf = arr.slice(0, halfLength);
// let secondHalf = arr.slice(halfLength);
// let result = secondHalf.concat(firstHalf);
// console.log(result);

// 3-masala

// function reverseArray(arr) {
//   const n = arr.length;
//   const halfLength = Math.floor(n / 2);
//   for (let i = 0; i < halfLength; i++) {
//     const k = arr[i];
//     arr[i] = arr[n - 1 - i];
//     arr[n - 1 - i] = k;
//   }
//   return arr;
// }
// const array = [1, 2, 3, 4, 5];
// console.log(reverseArray(array));

// 4-masala

// let arr = [17, 4, 9, 16, 77, 8, 2, 3, 25];
// let result = arr.sort((num1, num2) => {
//   return num1 - num2;
// });
// for (let i = 1; i < result.length - 1; i++) {
//   result[i] = 0;
// }
// console.log(result);

// 5-masala
// let arr = [17, 4, 9, 16, 77, 8, 2, 3, 25];
// let j = arr[0];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[n - 1] = j;
// console.log(arr);
