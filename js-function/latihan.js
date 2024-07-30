// Latihan Function Declaration

console.log('Soal 1. Function Declaration menggunakan rekursi');

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(2, 3));

console.log('Soal 2. Function Declaration findMax array');

function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
const randomNumbers = [1, 5, 3, 9, 2];
console.log(findMax(randomNumbers));

console.log('Soal 3. Function Expression reverseString');

const reverseString = (str) => {
    return str
        .split('')
        .reverse()
        .join('');
};
console.log(reverseString('hello'));

console.log('Soal 4. Function Expression isPalindrome');

const isPalindrome = (str) => {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('halo'));

console.log('Soal 5. Function Declaration dan Expression');

// Funsi ini menggunakan 'map' untuk menerapkan 'func' ke setiap elemen 'arr'
function processArray(arr, func) {
    return arr.map(func);
}

// Fungsi ini mengembalikan kuadrat dari input
const square = function(num) {
    return num * num;
};

// Panggil processArray dengan square function
const numbers = [1, 2, 3, 4];
const squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers);


