// Event handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none'; // Tutup kartu saat tombol close diklikiner.style.display = 'none'; // Tutup kartu saat tombol close diklikiner.style.display = 'none'; // Tutup kartu saat tombol close diklik
// });


// DOM Traversal
const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none';
//         e.target.parentElement.style.display = 'none';
//     });
// }

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    });
});




const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.nextElementSibling);