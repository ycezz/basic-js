// DOM Manipulation
// Cara membuat elemet baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru diakhir session A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liBaru, li2);

ul.insertBefore(liBaru, li2);


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'salmon';
liBaru.style.backgroundColor = 'salmon';
h2Baru.style.backgroundColor = 'salmon';