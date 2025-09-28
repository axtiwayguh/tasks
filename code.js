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
