//variable var
var namaLengkap = "Najwa Fauziah";

console.log("Halo " + namaLengkap + ", selamat datang di javascript");

namaLengkap = "Najwa";

console.log("Halo " + namaLengkap + ", selamat datang di javascript");

//variabel let
let alamat = "Bandung";

console.log("Alamat saya di " + alamat);

// variabel const konstan tidak bisa diubah
const PI = 3.14;
console.log("Nilai PI adalah " + PI);

const harga = 1000;
console.log("Harga adalah " + harga);

// tipe data string
let nama = "Najwa Fauziah";
let pekerjaan = 'Mahasiswa';

console.log(nama);
console.log(pekerjaan);

// tipe data number
let angka1 = 10;
let angka2 = 20;

console.log(angka1+angka2);

//tipe data booelan
let isAuth = true;

if (isAuth){
    console.log("User sudah login");
} else{
    console.log("User belum login");
}

//tipe data array

let hewan = ["Kucing", "Kambing", "Kelinci"];
//mengakses semua data
console.log(hewan);

//mengakses data tertentu
console.log(hewan[1]);

//menambahkan data baru
hewan.push("Ayam");
console.log(hewan);

// tipe data object
let user = {
    nama: "Najwa",
    umur: 19,
    pekerjaan: "Mahasiswa",
};

console.log(user);

//mengakses data tertentu
console.log(user.nama);

//menambah data baru
user.alamat = "bandung";

console.log(user);