console.log('---latihan 1----')

var s = '';
for( var i = 0; i < 5; i++){
    s += '*';
}
console.log(s);

console.log('---latihan 2----')

var s = '';
for( var i = 0; i < 5; i++){
    s += '*';
    s += '\n';
}
console.log(s);

console.log('---latihan 3----')

var s = '';
for( var i = 0; i < 5; i++){
    for( var j = 0; j < 5; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 4----')

var s = '';
for( var i = 0; i < 7; i++){
    for( var j = 0; j < 10; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 5----')

var s = '';
for( var i = 0; i < 5; i++){
    for( var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 6----')

var s = '';
for( var i = 5; i > 0; i--){
    for( var j = 0; j <= 5; j++){
        if( j >= i ){
            s += '*';
        } else {
            s += ' ';
        }
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 7----')

var s = '';
for( var i = 0; i < 5; i++){
    for( var j = 0; j < 5 - i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 8----')

var s = '';
for( i = 5; i > 0; i--){
    for( j = 5; j > 0; j--){
        if( j <= i ){
            s += '*';
        } else {
            s += ' ';
        }
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 9----')

var s = '';
for( i = 0; i < 5; i++){
    for(var j = 0; j <= i; j++){
        s += '*';
    }
    s += '\n';
    }
    for( var i = 0; i < 5; i++){
        for( var j = 0; j < 5 - i; j++){
            s += '*';
        }
        s += '\n';
    }
console.log(s);

console.log('---latihan 10---') 

var s = '';
for( var i = 1; i <= 5; i++) {
    for( var j = 5; j >= i; j--) {
        s += ' ';
    }
    for( var k = 1; k <= i + (i - 1); k++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 11---') 

var s = '';
for( var i = 1; i <= 5; i++) {
    for( var j = 5; j >= i; j--) {
        s += ' ';
    }
    for( var k = 1; k <= i + (i - 1); k++) {
        s += '*';
    }
    s += '\n';
}
for( var i = 1; i <= 5; i++) {
    for( var j = 1; j <= i; j++) {
        s += ' ';
    }
    for( var k = 5; k >= (2 * i - 5); k--) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 12---') 

var s = '';
for( var i = 1; i <= 8; i++) {
    for( var j = 1; j <= 8; j++) {
        if( (i + j) % 2 == 0) {
            s += ' ';
        } else {
            s += '#';
        }
    }
    s += '\n';
}
console.log(s);

console.log('---latihan 13---') //segitiga pascal

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
for( var i = 0; i < pola; i++) {
    for( var j = pola; j >= i; j--) {
        s += ' ';
    }
    for( var j = 0; j <= i; j++) {
        s += pascal(i) / ( pascal(j) * pascal( i - j)) + ' ';
    }
    s += '\n';
}
console.log(s);

