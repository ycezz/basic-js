//Belajar Array

// var binatang = ['kucing', 'sapi', 'kambing', 'ayam'];

// console.log(binatang[1]);

//Array diddalam array (array multidimensi/ array bersarang)
// var myFunc = function() {
//     alert('Hello World');
// };

// var myArr3 = ['teks', 2, false, myFunc, [4, 5 ,6]];

// console.log(myArr3[4][1]);

//Manipulasi Array

//1. Menambah isi array
// var arr = [];
// arr[0] = 'satu';
// arr[1] = 'dua';
// arr[2] = 'tiga';

// console.log(arr);

//2. Menghapus isi array
// var arr = ["Putri", "Mila", "Indra",];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi Array
// var arr = ["Putri", "Mila", "Indra", "Herman"];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' +arr[i]);
// }

//Method pada Array
// 1. Join
// var arr = ['Putri', 'Mila', 'Indra'];
// console.log(arr.join(' - '));

//2. push (menambah element baru di akhir arraynya)
// var arr = ['Putri', 'Mila', 'Indra'];
// arr.push('Herman');
// console.log(arr.join(' - '));

//3. pop (menghilangkan element terakhir)
// var arr = ['Putri', 'Mila', 'Indra'];
// arr.pop();
// console.log(arr.join(' - '));

//4. Unshift (menambah element baru di awal arraynya)

// var arr = ['Putri', 'Mila', 'Indra'];
// arr.unshift('Herman');
// console.log(arr.join(' - '));

//5. Shift (menghilangkan element pertama)
// arr.shift();
// console.log(arr.join(' - '));

//6. splice (menyisipkan atau menambahkan element ditengah element array)
//cara menambahkan element di tengah

// var arr = ['Putri', 'Mila', 'Indra'];
// arr.splice(1, 2, 'Herman', 'Jiji');
// console.log(arr.join(' - '));

//7. slice (mengiris sebuah array menjadi array yang baru)
// var arr = ['Putri', 'Mila', 'Indra', 'Herman'];
// var arr2 = arr.slice(1, 3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

//8. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// angka.forEach(function(e) {
//     console.log(e);
// });

// var nama = ['Putri', 'Mila', 'Indra', 'Herman'];
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i + 1) + ' : ' + e);
// });

//9. map (mengembalikkan nilai array)
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '));

//10. Sort
// var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));

//11. Filter (mencari nilai pada array dan mengembalikkannya dalam bentuk array)
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join(' - '));

//NB joun fungsinya untuk menggabungkan array

//12. Find (untuk menemukan satu nilai)
var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);

 