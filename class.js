const book = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
 console.log(book.getSummary());

 const array = [1, 92, 23, 4, 59, 1, 12, 29, 34, 5];

 function getMax(arr) {
     let max = arr[0]; // начинаем с первого элемента
     for (let i = 1; i < arr.length; i++) {
         if (arr[i] > max) {
             max = arr[i];
         }
     }
     console.log(max);
 }
 
 getMax(array); // вызов функции
 

const user ={
    username: 'Hehehe',
    email: 'heheh.gmail.com'
}
const jsonString = JSON.stringify(user);
console.log(jsonString);