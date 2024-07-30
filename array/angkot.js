//Pengelolaan penumpang
// tambah penumpang

var penumpang = ['Putri', undefined, 'Herman'];
var tambahPenumpang = function(namaPenumpang, penumpang) {

    // jika angkot kosong
    
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);  // tambah penumpang di awal array
        return penumpang;               // kembalikkan isi array & keluar dari function
    } else {
        // else
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {

            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;   // tambah penumpang di kursi tersebut
                return penumpang;               // kembalikkan isi array & keluar dari function           
            }

            // jika sudah ada nama yang sama
            else if (penumpang[i] === namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot.');     //tampilkan pesan kesalahan
                return penumpang;                   // kembalikkan isi array & keluar dari function
            }

            else if ( i == penumpang.length - 1) {

                // jika seluruh kursi terisi
                penumpang.push(namaPenumpang);   // tambah penumpang di akhir array
                return penumpang;               // kembalikkan isi array & keluar dari function
            }

        }

    }
};

// hapus penumpang
// 2 Parameter
  // - nama penumpang
  // - array penumpang
// Rules :
  
  

var hapusPenumpang = function(namaPenumpang, penumpang) {

    if (penumpang.length == 0) {    // - jika angkot kosong, tampilkan pesan bahwa 'angkot kosong'
        console.log('angkot masih kosong');   
        // return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {    // - jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                // return penumpang;
            }

            else if ( i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                // return penumpang;
            }
        }
    }
    return penumpang;
};

