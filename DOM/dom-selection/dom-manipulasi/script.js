// Soal 1. Menambahkan Elemen ke halaman
const pBaru = document.createElement('p');
pBaru.innerHTML = 'Hello World!';

const content = document.querySelector('#content');
content.appendChild(pBaru);

// Soal 2. Mengubah Teks elemen
const judul = document.getElementById('title');
const h1 = judul.querySelector('h1');
h1.innerHTML = 'Welcome to My Website!';

//Soal 3. Menghapus Elemen
const removeMe = document.getElementById('remove-me');
if(removeMe) {
    removeMe.remove();
}

//Soal 4. Menambahkan Kelas CSS ke Elemen
const list = document.getElementById('list');
const listItems = list.querySelectorAll('li');
listItems.forEach(item => item.classList.add('highlight'));

//Soal 5. Mengganti Gambar 
const gantiGambar = document.getElementById('profile-pic');
if(gantiGambar) {
    gantiGambar.src = './avatar-3.png?v=' + new Date().getTime();
}

//Soal 6. Ubah warna background
const ubahWarna = document.getElementById('box');
ubahWarna.style.backgroundColor = 'darkblue';

//Soal 7. Tambah elemen baru di akhir daftar
const ul = document.getElementById('item-list');
const liBaru = document.createElement('li');
liBaru.innerHTML = 'Item baru';
ul.appendChild(liBaru);

//Soal 8. Ubah teks dari semua elemen dengan kelas tertentu
const updateText = document.getElementsByClassName('update-text');
for(let i = 0; i < updateText.length; i++) {
    updateText[i].innerHTML = 'Teks Baru';
}

//Soal 9. Hapus elemen berdasarkan kelas
const deleteMe = document.getElementsByClassName('delete-me');
for(let i = 0; i < deleteMe.length; i++) {
    deleteMe[i].remove();
}

//Soal 10. Ganti attribut pada elemen gambar
const gantiElemenImg = document.getElementById('profile-picture');
gantiElemenImg.setAttribute('alt', 'Gambar Profil Baru');


