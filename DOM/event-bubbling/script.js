// Event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none'; // Tutup kartu saat tombol close diklikiner.style.display = 'none'; // Tutup kartu saat tombol close diklikiner.style.display = 'none'; // Tutup kartu saat tombol close diklik
// });


// DOM Traversal
// const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Prevent Default
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); // Mencegah link yang di-click langsung melakukan navigasi ke alamat yang dituju.
        // e.stopPropagation(); // => method mencegah event bubbling
//     });
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click',function(e) {
//         alert('ok');
//     });
// });


// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling.nextElementSibling);

const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});