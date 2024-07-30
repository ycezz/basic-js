// membuat object

//cara 1 - function declaration
// function halo() {
//     console.log('halo');
// }
// halo();

//cara 2 - object literal
// var obj = {};
// obj.halo = function() {
//     console.log('halo');
// }
// obj.halo();

//  cara 3 - constructor
// function Halo() {
//     console.log('halo');
// }
// new Halo();

// this (keyword spesial yang didefinisikan secara otomatis setiap function)
// var a = 10;
// console.log(this.a);

// Cara 1
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
// this mengembalikkan object global

// Cara 2
// var obj = {a : 10, nama : 'Putri'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikkan object yang bersangkutan

//Cara 3
// function Halo() {
//     console.log(this);
//     console.log('halo');
// }
// new Halo();

// this mengembalikkan object yang baru dibuat