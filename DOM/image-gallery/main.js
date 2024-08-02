const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e) {

  // cek apakah yang di klik adalah thumb
  if( e.target.className == 'thumb' ) {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');

  }
});


// document.addEventListener('DOMContentLoaded', () => {
//   const jumbo = document.getElementById('jumbo');
//   const thumbnails = document.querySelectorAll('.thumb');

//   thumbnails.forEach(thumbnail => {
//       thumbnail.addEventListener('click', function() {
//           jumbo.src = this.src;
//       });
//   });
// });
