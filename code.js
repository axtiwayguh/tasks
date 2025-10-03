"use strict";
let h = 0;
let f = 0
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        h++   
    }
    else {
        f++;
    }
}
console.log(h); 
console.log(f);

let l = 0;
let p = parseInt(prompt("Введите число:"));

for (let i = p; i >= 1; i--) {
    l = i * i;   
    console.log(l);
}

let d = parseInt(prompt("Введите число:"));

for (let i = 1; i <= 10; i++) {
    let s = d * i;
    console.log(s);
}




let m = parseInt(prompt("Введите число:"));
let sum = 0;
let i = 1;

while (i <= m) {
    sum += i;
    i++;
}

console.log("Сумма:", sum);
 

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

 

let count = parseInt(prompt("Введите количество чисел Фибоначчи:"));
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= count; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

 

let secret = Math.floor(Math.random() * 100) + 1; // число от 1 до 100
let guess;

do {
    guess = parseInt(prompt("Угадай число от 1 до 100:"));
    if (guess > secret) {
        console.log("Загаданное число меньше");
    } else if (guess < secret) {
        console.log("Загаданное число больше");
    } else {
        console.log("Поздравляю! Ты угадала число 🎉");
    }
} while (guess !== secret);
