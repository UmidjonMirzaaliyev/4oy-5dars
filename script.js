// 1-masala

// let n = 20; 

// for (let i = 1; i <= n; i++) {
//     console.log(i);
// }

// 2-masala

// let n = 10;
// for (let i = n; i >= 1; i--) {
//     console.log(i);
// }

// 3-masala

// let n = 10;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

// 4-masala
// let n = 7;
// let sum = 0;

// for (let i = 1; i <= n; i += 2) {
//     sum += i;
// }

// console.log(sum); 

// 5-masala

// let n = 5; 

// let oddSum = 0;
// for (let i = 1; i <= n; i += 2) {
//     console.log(i);
//     oddSum += i;
// }

// console.log("Toqlar yig'indisi:", oddSum);

// 6-masala

// let n = 10; 

// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         console.log(i);
//     }
// }

// 7-masala

// let n = 10, sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 8-masala

// let n = 17;

// let tub = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         tub = false;
//         break;
//     }
// }

// if (n <= 1) {
//     tub = false;
// }

// console.log(n + (tub ? " tub" : " tub emas"));

// 9-masala

// let k = 5; 
// let n = 4; 
// let result = 1;

// for (let i = 0; i < n; i++) {
//     result *= k;
// }

// console.log(result); 

// 10-masala

// let a = 3; 
// let b = 10;
// let count = 0;

// console.log("Berilgan oraliqdagi sonlar:");
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;
// }

// console.log("Olishilgan sonlar soni:", count); 


// 11-masala

// let a = 3; 
// let b = 10; 
// let count = 0; 

// console.log("Berilgan oraliqdagi sondan o'ng: ");
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     count++;
// }

// console.log("Chiqarilgan sonlar soni: ", count); 


// 12-masala

// let narx_bir_kg = 15000; // 1 kilogram konfetning narxi

// console.log("1 kilogramdan 10 kilogramgacha konfet narxlari:");
// for (let i = 1; i <= 10; i++) {
//     let umumiyNarx = narx_bir_kg * i;
//     console.log(i + " kilogram: " + umumiyNarx + " so'm");
// }

// 13-masala

// let narx_bir_kg = 15000; 

// console.log("1 kilogramdan 2 kilogramgacha konfet narxlari:");
// for (let i = 1; i <= 2; i = i + 0.2) {
//     let umumiyNarx = narx_bir_kg * i;
//     console.log(i + " kilogram: " + umumiyNarx + " so'm");
// }

// 14-masala

// let narx_bir_kg = 15000; 

// console.log("1 kilogramdan 2 kilogramgacha konfet narxlari:");
// for (let i = 1; i <= 2; i = i + 0.2) {
//     let umumiyNarx = narx_bir_kg * i;
//     console.log(i + " kilogram: " + umumiyNarx + " so'm");
// }

// 15-masala

// let a = 1;
// let b = 7;
// let sum = 0;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         sum += i;
//     }
//     console.log(a + " dan " + b + " gacha bo'lgan butun sonlarning yig'indisi: " + sum);
// } else {
//     console.log("Xato: a b dan kichik bo'lishi kerak");
// }


// 16-masala

// let a = 1;
// let b = 8;
// let product = 1;

// if (a < b) {
//     for (let i = a; i <= b; i++) {
//         product *= i;
//     }
//     console.log(a + " dan " + b + " gacha bo'lgan butun sonlarning ko'paytmasi: " + product);
// } else {
//     console.log("Xato: a b dan kichik bo'lishi kerak");
// }

// 17- masala

// let a = 3;
// let b = 9;
// let sum = 0;

// for (let i = a; i <= b; i++) {
//     sum += i ** 2;
// }

// console.log("Yig'indi:", sum);

// 18-masala

// let n = 10;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }

// console.log("Sum:", sum);

// 19-masala

let n = 20;
let totalSum = 0;

for (let i = 0; i <= 2 * n; i++) {
    totalSum += (i+n) ** 2;
}
console.log("Yig'indi:", totalSum);

