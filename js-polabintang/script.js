console.log('1. Nested loop ');

var s = ''; //inisialisasi variabel s
for( var i = 0; i < 5; i++) //loop untuk setiap baris
{
    s += '*'; // '+=' concatenation melakukan penambahan (yang berupa penambahan numerik atau penggabungan string) pada dua operan dan menetapkan hasilnya ke operan kiri.  
}
console.log(s); //menampilkan isi variabel s

console.log('2. Nested loop ');

var s = ''; 
for( var i = 0; i < 5; i++) {
    s += '*'; 
    s += '\n'; //menampilkan baris baru
}
console.log(s);

console.log('3. Nested loop ');

var s = '';
for( var i = 0; i < 5; i++) 
    {
    for( var j = 0; j < 5; j++) //loop untuk setiap kolom bintang
    {
        s += '*'; 
    }
    s += '\n';
}
console.log(s);

console.log('4. Nested loop ');

var s = '';
for( var i = 0; i < 5; i++) {
    for( var j = 0; j < 10; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('5. Nested loop ');

var s = '';
for( var i = 0; i < 5; i++) {
    for( var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('6. Nested loop');

var s = '';
for( var i = 5; i > 0; i--) {
    for( var j = 0; j <= 5; j++){
        if(j >= i){
            s += '*';
        }
        else {
            s += ' ';
        }
    }
    s += '\n';
}
console.log(s);

console.log('7. Nested loop');

var s = '';
for( var i = 0; i < 5; i++){
    for(var j = 0; j < 5 - i; j++){
        s += '*';
    }
        s += '\n';
}
console.log(s);

console.log('8. Nested loop');

var s = '';
for( var i = 5; i > 0; i--){
    for(var j = 5; j > 0; j--){
        if( j > i) {
            s += ' ';
        } else {
            s += '*';
        }
    }
    s += '\n';
}
console.log(s);

console.log('9. Nested loop');

var s = '';
for( var i = 0; i < 5; i++){
    for( var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
for( var i = 0; i < 5; i++){
    for(var j = 0; j < 5 - i; j++){
        s += '*';
    }
    s += '\n';
}

console.log(s);

console.log('10. Nested loop');

var s = '';
for( var i = 1; i <= 5; i++){
    for( var j = 5; j >= i; j--){
        s += ' ';
    }
    for( var k = 1; k <= i + (i - 1); k++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('11. Nested loop');

var s = '';	
for( var i = 1; i <= 5; i++){
    for( var j = 5; j >= i; j--){
        s += ' ';
    }
    for( var k = 1; k <= i + (i - 1); k++){
        s += '*';
    }
    s += '\n';
}
for( var i = 1; i <= 5; i++){
    for( var j = 1; j <= i; j++){
        s += ' ';
    }
    for( var k = 5; k >= (2 * i - 5); k--){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('12. Nested loop');

var s = '';
for( var i = 1; i <= 8; i++){
    for( var j = 1; j <= 8; j++){
        if((i + j) % 2 == 0){
            s += ' ';
        } else {
            s += '#';
        }
    }
    s += '\n';
}
console.log(s);

console.log('13. Nested loop');

var s = '';
var pola = 5;

function pascal(n) {
    var a = 1;
    var i = 1;

    while(i <= n){
        a *= i;
        i++;
    }
    return a;
}
for( var i = 0; i < pola; i++){
    for( var j = pola; j >= i; j--){
        s += ' ';
    }
    for( var j = 0; j <= i; j++) {
         s += pascal(i) / (pascal(j) * pascal(i - j)) + ' ';
    }
    s += '\n';
}
console.log(s);

for(i = 1; i <= 10; i++){
    console.log(i);
}