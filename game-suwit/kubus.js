// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);


function jumlahVolumeDuaKubus(a, b){
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(8, 3)); //baru di esekusi di sini
console.log(jumlahVolumeDuaKubus(12, 5));

console.log('Dibawah ini contoh code program menggunakan refactoring');

function jumlahVolumeDuaKubus(a, b){
    return (a * a * a) + (b * b * b);
}
console.log(jumlahVolumeDuaKubus(8, 3)); 