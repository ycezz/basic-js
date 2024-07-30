//Membuat object literal
var mhs1 = {
    nama : "Rizki",
    nrp : "0123456789",
    email : "R7KcX@example.com",
    jurusan : "Teknik Informatika"
}

var mhs2 = {
    nama : "Aldo",
    nrp : "033456789",
    email : "asdas@asdasd.com",
    jurusan : "Teknik Informatika"
}

//Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {

    var mhs = {};

    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Reza', '123456789', 'reza@reza', 'Teknik Informatika');

// Constructor 
function Mahasiswa(nama, nrp, email, jurusan) {

    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Erick', '0922131', '9f9g9@example.com', 'Teknik Informatika');