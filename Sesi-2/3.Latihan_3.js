/*

*/

//
let umur1 = 17;

if (umur1 <= 17){
    console.log("Bisa bikin KTP");
}else{
    console.log("Belum bisa bikin KTP");
}

// 2.Buat pilih kopi atau teh secara switch case
let minum = "kopi";
switch (minum){
    case 'kopi':
        console.log("Kamu pilih kopi");    
    break;
    case 'teh':
        console.log("Kamu pilih teh");
    break;
}

// 3.Kondisi Bersarang
let umurAnak = 17;
let tinggiCm = 150;

if (umurAnak < 17){
    if (tinggiCm < 150){
        console.log("Tidak boleh masuk");
    } else {
        console.log("Boleh Masuk");
    } 
}

// 4. kondisi genap atau ganjil
let nomor = 5;
if (nomor % 2 == 0){
    console.log("Nomor Genap");
}else {
    console.log("Nomor Ganjil");
}

//  5. pilihan minuman secara switch case dengan kondisi default
let drink = "Choose Ice";

switch (drink){
    case "Sweet Tea":
        console.log("You Choose Sweet Tea" );
    case "Plain Tea":
        console.log("You Choose Plain Tea" );
    case "Boba":
        console.log("You Choose Boba" );
    case "Milk Coffee":
        console.log("You Choose Milk Coffee" );
    case "Choose Ice":
        console.log("You Choose Ice" );
}

// Srudy Case 4
/*
Ada 3 jenis access : Public, Protected, Private.
Jika access kosong, maka tampilan "Input access"

Access Publik, Jika level di bawah 5 maka tampilkan "Public di bawah 5"
Access Public, Jika level di atas 5 maka tampilkan "Public di atas 5"
Access Public, Jika level di sama dengan 5 maka tampilkan "Public Five"

Access Private, Jika level di bawah 5 maka tampilkan "Private di bawah 5"
Access Private, Jika level di atas 5 maka tampilkan "Private di atas 5"
Access Private, Jika level di sama dengan 5 maka tampilkan "Private Five"

Access Protected, Jika level di bawah 5 maka tampilkan "Protected di bawah 5"
Access Protected, Jika level di atas 5 maka tampilkan "Protected di atas 5"
Access Protected, Jika level di sama dengan 5 maka tampilkan "Protected Five"

Jika access salah, tampilkan "Access defined"
Buat Coding menggunakan Nested Conditional : Switch case dan if else
*/
let access = "Public";
let level = 5;

if (access === "" || access === null || access === undefined) {
    console.log("Input access");
} else {
    switch (access){
        case "Public":
            if(level < 5){
                 console.log("Public di bawah 5");
            }else if(level > 5){
                 console.log("Public di atas 5");
            }else{
                 console.log("Public Five");
            }break;

        case "Private":
            if(level < 5){
                 console.log("Private di bawah 5");
            }else if(level > 5){
                 console.log("Private di atas 5");
            }else{
                 console.log("Private Five");
            }break;

        case "Protected":
            if(level < 5){
                 console.log("Protected di bawah 5");
            }else if(level > 5){
                 console.log("Protected di atas 5");
            }else{
                 console.log("Protected Five");
            }break;
        default:
            console.log("Access defined"); 
    }
}



//Study Case 5
/*
Sebuah Lembaga layanan IT services yang bergerak di bidang perbaikian 
laptop dan  gadget memberikan layanan khusus dri status pembeli.

Pembeli merupakan penduduk WNA, darei memiliki ketentuan berikut:
Lama tinggal di Indonesia 3 tahun kurang, maka Tidak dapat Diskon.
Lama tinggal di Indonesia 3 hingga 5 tahun , maka dapat Diskon. Jika memiliki syaarat:
   1. usia di Bawah 21 tahun , maka diskon 10%
   2. usia di atas 21 tahun, maka diskon 5%
Lama tinggal di Indonesia lebih dari 5 tahun, maka dapat Diskon. Jika memiliki syarat:
   1. usia di Bawah 21 tahun , maka diskon 5%
   2. usia di atas 21 tahun, maka diskon 2.5%
Pembili merupakan penduduk WNI, dari memiliki ketentuan berikut:
   1. WNI tinggal di daerah Barat Indonesia, mendapatkan diskon 10%
   2. WNI tinggal di daerah Tengah Indonesia, mendapatkan diskon 15%
   3. WNI tinggal di daerah Timur Indonesia, mendapatkan diskon 17.5%
   
Contoh perhitungan:
warga merupakan WNA, lama tinggal 3 tahun dan umur 27 tahun. Total pembelian : Rp. 100.000
Maka perhitungan diskon adalah 5%, sehingga total yang di bayar adalah Rp. 95.000

PSEUDOCODE

BEGIN
STORE status WITH ANY STRING
*/

// Program Hitung Diskon Layanan IT Services

let status = "WNA";          // WNA atau WNI
let lamaTinggal = 3;         // tahun
let umur = 27;               // usia pembeli
let wilayah = "";            // Barat, Tengah, Timur (jika WNI)
let totalPembelian = 100000; // rupiah

let diskon = 0;

// Jika WNA
if (status === "WNA") {

    if (lamaTinggal < 3) {
        diskon = 0;

    } else if (lamaTinggal >= 3 && lamaTinggal <= 5) {
        if (umur < 21) {
            diskon = 10;
        } else {
            diskon = 5;
        }

    } else { // lebih dari 5 tahun
        if (umur < 21) {
            diskon = 5;
        } else {
            diskon = 2.5;
        }
    }

}
// Jika WNI
else if (status === "WNI") {

    if (wilayah === "Barat") {
        diskon = 10;
    } 
    else if (wilayah === "Tengah") {
        diskon = 15;
    } 
    else if (wilayah === "Timur") {
        diskon = 17.5;
    } 
    else {
        console.log("Wilayah tidak valid");
    }
}
else {
    console.log("Status tidak valid");
}

// Hitung total bayar
let totalBayar = totalPembelian - (totalPembelian * diskon / 100);

console.log("Diskon :", diskon + "%");
console.log("Total bayar :", totalBayar);
