function tampilAngka(n) {
    if( n === 0){
        return; //menuggunakan if return (base case) fungsi untuk berhenti looping di nilai 0
    }
    console.log(n);
    return tampilAngka(n-1)
}
tampilAngka(10);

console.log('====factorial menggunakan rekursif===');

function faktorial(n) {
    if ( n === 0 ) return 1;
    return n * faktorial(n-1);
}
console.log(faktorial(5));

// semua looping bisa menggunakan rekursif, namun tidak sebaliknya
// Implmentasi rekursif
// - Menggantikan looping
// - Fibonacci
// - Pencarian dan penelusuran pada struktur data list dan tree
// dll.