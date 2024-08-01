// DOM Selection
// Soal 1
const menuItem = document.getElementsByClassName('menu-item');

for( let i = 0; i < menuItem.length; i++){
    menuItem[i].style.color = 'red';
}

// // Soal 2
const header = document.getElementById('header');
header.innerHTML = 'Selamat Datang di Website Kami!';

// //Soal 3
const active = document.getElementsByClassName('active');
active[0].style.backgroundColor = 'yellow';

// //Soal 4
const content = document.getElementById('content');
const p = content.getElementsByTagName('p');
for( let i = 0; i < p.length; i++){
    p[i].innerHTML = 'ini content';
}

// //Soal 5

const formContainer = document.getElementById('form-container');
const btn = formContainer.getElementsByTagName('button');

for ( let i = 0; i < btn.length; i++ ) {
    btn[i].innerHTML = 'Kirim';
}

// // DOM Manipulation
// // Soal 1
const newItem = document.createElement('li');
newItem.appendChild(document.createTextNode('Item Baru'));
const list = document.getElementById('list');
list.appendChild(newItem);

// // Soal 2
const removeMe = document.getElementById('remove-me');
if (removeMe) {
    removeMe.parentNode.removeChild(removeMe);
}

// // Soal 3 menggandakan elemen dengan class duplicate-me

const elementDuplicate = document.querySelector('.duplicate-me');
const duplicatedElement = elementDuplicate.cloneNode(true);
const container = document.getElementById('container');
container.appendChild(duplicatedElement);

// // Soal 4
const gantiAtribut = document.getElementById('image');

if (gantiAtribut) {
    gantiAtribut.setAttribute('src', 'new-image.jpg');
}

// //Soal 5
function addHighlightClass() {
    const divs = document.getElementsByTagName('div');
    for ( let i = 0; i < divs.length; i++ ) {
        divs[i].classList.add('highlight');
    }
}
addHighlightClass();

// // DOM Events
// Soal 1
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});

// // Soal 2
const input = document.getElementById('myInput');
input.addEventListener('input', function(event) {
    console.log(event.target.value);
});

// // Soal 3
const clickAble = document.querySelectorAll('.clickable');

for (let i = 0; i < clickAble.length; i++ ) {
    clickAble[i].addEventListener('click', function() {
        clickAble[i].innerHTML = 'Clicked';
    });
}

// // Soal 4
const hoverMe = document.getElementById('hover-div');

hoverMe.addEventListener('mouseover', function() {
    hoverMe.style.backgroundColor = 'yellow';
});

hoverMe.addEventListener('mouseout', function() {
    hoverMe.style.backgroundColor = 'white';
});

// // Soal 5
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form tidak dapat dikirim');
});

