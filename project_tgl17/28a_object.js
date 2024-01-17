let karyawan ={
    nama: "rizky",
    jabatan: "manager",
    gaji: 5000,
    absensi: {
        harikerja: 20,
        harilibur: 5,  
    }
};

function hitunggajitotal(karywan) {
    let gajiperhari = karyawan.gaji /
    karywan.absensi.harikerja;
    let gajiharikerja = gajiperhari * 
    karywan.absensi.harikerja;
    let gajiharilibur = gajiperhari / 2 *
    karywan.absensi.harilibur;

    return gajiharikerja + gajiharilibur;
}

let gajitotal =
hitunggajitotal(karyawan);
console.log("gaji total karywan: $" + gajitotal);