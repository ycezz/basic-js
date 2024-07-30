//Function Declaration

console.log('Menggunakan function decalaration');
function tampilPesan (nama) {
    console.log( 'halo ' + nama);
}
console.log(tampilPesan('putri'));

//Function Expression

console.log('Menggunakan function expression');
var tampilPesan = function (nama) {
    console.log( 'halo ' + nama);
}
console.log(tampilPesan('putri'));

//Function declaration
// - Lebih fleksibel (dapat ditulish di mana saja)
//    - Karena konsep Hoisting
// - Mudah dipahami pemula

//Function Expression
// - Harus didefinisikan terlebih dahulu
// - Lebih powerfull
//   - Sebagai closure
//   - Sebagai argumen untuk function lain
//   - IIFE (Immediately Invoked Function Expression)

console.log('Soal 1. function declaration cetak nama');
function greet(name) {
    return 'Hello ' + name + '!';
}
console.log(greet('Alice'));

console.log('Soal 2. function declaration penambahan dua angka');

function add(a, b) {
    return a + b;
}
console.log(add(3, 5));

console.log('Soal 3. function declaration faktorial');

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(4));

console.log('Soal 4. function expression pengurangan dua angka');

var  subtract = function(a, b){
    return a - b;
}
console.log(subtract(10, 4));

console.log('Soal 5. function expression "is Even" untuk mengecek apakah sebuah angka genap');

var isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(7));