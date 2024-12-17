// number 5 point 1 bullet 1/1

// let nama = "Rizki Al Fadil";

// console.log(nama);

// number 5 point 1 bullet 1/4

// nama = nama.toUpperCase();

// console.log(nama);

// number 5 point 1 bullet 2/4

// namaNew = nama.slice(0, 5);

// console.log(namaNew);

// number 5 point 1 bullet 3/4

// namaReplace = nama.replace("Fadil", "Johnson");

// console.log(namaReplace);

// number 5 point 1 bullet 4/4

// hitung = nama.length;
// console.log(hitung);

// number 5 point 2

// function isPalindrome(word) {
//   let rev = word.length - 1; // untuk menyamakan agar length sama dengan nilai index array i
//   for (let i = 0; i < word.length; i++) {
//     // word length di loop, makanya jadi angka
//     if (word[i] != word[rev]) {
//       return false;
//     }
//     rev--;
//     // console.log(rev);
//   }
//   return true;
// }

// let word = "civic";
// let word1 = "radar";
// let word2 = "level";
// let word3 = "hello";

// console.log(isPalindrome(word));
// console.log(isPalindrome(word1));
// console.log(isPalindrome(word2));
// console.log(isPalindrome(word3));

// number 5 point 3

// function checkType(value) {
//   return typeof value;
// }

// console.log(checkType("Java Script"));
// console.log(checkType(42));
// console.log(checkType(true));
// console.log(checkType({}));
// console.log(checkType(null));
// console.log(checkType(undefined));

// number 5 point 4

// concept

// function checkPassword(pass) {
//   let value = /^(?=.*\d)(?=.*[A-Z]).{6,20}$/;
//   return value.test(pass);
// }

// console.log(checkPassword("Asdasdsad12"));

// function checkPassword(password) {
//   if (password.length < 8) {
//     return "Weak";
//   }

//   let hasNumber = false;
//   let hasLowercase = false;
//   let hasUppercase = false;

//   for (let i = 0; i < password.length; i++) {
//     var value = password[i];

//     if (/[0-9]/.test(value)) {
//       hasNumber = true;
//     } else if (/[a-z]/.test(value)) {
//       hasLowercase = true;
//     } else if (/[A-Z]/.test(value)) {
//       hasUppercase = true;
//     }

//     if (hasNumber && hasLowercase && hasUppercase) {
//       return "Strong";
//     }
//   }
//   return "Weak";
// }
// console.log(checkPassword("aaaa"));
// console.log(checkPassword("Jjl1"));

// number 5 point 5
// function deret(n) {
//   let text = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       text.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       text.push("Fizz");
//     } else if (i % 5 === 0) {
//       text.push("Buzz");
//     } else {
//       text.push(i);
//     }
//   }

//   console.log(text.join(" , "));
// }
// deret(20);

// number 5 point 6

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     let spaces = "";
//     let stars = "";

//     for (let baris = 0; baris <= n - i; baris++) {
//       spaces += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//       stars += "*";
//     }

//     console.log(spaces + stars);
//   }
// }

// pyramid(5);

// number 5 point 7

// function revPyramid(n) {
//   for (let i = n; i >= 1; i--) {
//     let spaces = "";
//     let stars = "";

//     for (let baris = 0; baris <= n - i; baris++) {
//       spaces += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//       stars += "*";
//     }

//     console.log(spaces + stars);
//   }
// }

// revPyramid(5);

// number 5 point 8

// let number = [];

// function fibo(n) {
//   let a = 0;
//   let b = 1;
//   let c;

//   for (let i = 0; i < n; i++) {
//     number.push(a);
//     // console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   console.log(number.join(" , "));
// }

// fibo(10);
