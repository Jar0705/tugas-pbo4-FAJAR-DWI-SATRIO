// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang biasa");
    }
}

// Definisi kelas turunan Mahasiswa
class Mahasiswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Mahasiswa");
    }
}

// Definisi kelas turunan Dosen
class Dosen extends Orang {
    tampilkanPeran() {
        console.log("Peran: Dosen");
    }
}

// Definisi kelas turunan ob
class Ob extends Orang {
    tampilkanPeran() { // Fixed typo in method name
        console.log("Peran: OB");
    }
}

// Menggunakan polimorfisme
const orang1 = new Orang();
const mahasiswa1 = new Mahasiswa();
const dosen1 = new Dosen();
const ob1 = new Ob();

orang1.tampilkanPeran();    // Output: Peran: Orang biasa
mahasiswa1.tampilkanPeran(); // Output: Peran: Mahasiswa
dosen1.tampilkanPeran();     // Output: Peran: Dosen
ob1.tampilkanPeran();        // Output: Peran: OB
