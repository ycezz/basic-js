// DOM Selection
// document.getElementById() -> mengembalikkan elemen HTML berdasarkan ID
// const judul = document.getElementById('judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';
// judul.innerHTML = 'Putri';


// document.getElementsByTagName() -> mengembalikkan HTML collection
// const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue'; -> cara mengubah satu array p
// for( let i = 0; i < p.length; i++ ) {
    // p[i].style.backgroundColor = 'lightblue'; // -> cara mengubah semua array p
// }


// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// document.getElementsByClassName() -> mengembalikkan HTML collection
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari Javascript';

// document.querySelector() ->menghasilan sebuah element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

//querySelectorAll() -> menghasilkan node list

// const p = document.querySelectorAll('p');
// for( let i = 0; i < p.length; i++ ) {
//     p[i].style.backgroundColor = 'lightblue';
// }

// node root
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'lightblue';