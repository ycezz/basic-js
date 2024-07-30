// DOM Selection
// Soal 1
const menuItem = document.getElementsByClassName('menu-item');

for( let i = 0; i < menuItem.length; i++){
    menuItem[i].style.color = 'red';
}

// Soal 2
const header = document.getElementById('header');
header.innerHTML = 'Selamat Datang di Website Kami!';

//Soal 3
const active = document.getElementsByClassName('active');
active[0].style.backgroundColor = 'yellow';

//Soal 4
const content = document.getElementById('content');
const p = content.getElementsByTagName('p');
for( let i = 0; i < p.length; i++){
    p[i].innerHTML = 'ini content';
}

//Soal 5
function btn() {
    const form = document.getElementById('form-container');
    const btn = form.getElementsByTagName('button');
    const textBtn = document.createTextNode('Kirim');
    form.appendChild(textBtn);
}













//Soal 5
function addClass() {
    const highlight = document.getElementById('content');
    highlight.classList.add('highlight');
}
addClass();

