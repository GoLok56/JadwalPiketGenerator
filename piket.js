/**
 * Variabel yang harus diubah.
 *
 * numOfDay: Jumlah hari yang mau digenerate. Misal bulan agustus berarti 31. Kalau misal mau bikin dari tanggal 24-30,
 * berarti hitung aja 30 - 24 + 1.
 *
 * anggota: id anak cl dari database. Kalau misal dari database dapetnya array of object, dimapping jadi array of int
 * isinya id anak cl
 *
 * Hasilnya array 3 dimensi sejumlah numOfDay. Di dalem array yang sejumlah numOfDay ada 3 array lagi, yang berurutan
 * isinya array pertama anggota yang cuci piring, array kedua anggota yang sedot debu, array terakhir isinya
 * anggota yang bersihin meja.
 */
function generateJadwalPiket(anggota, numOfDay) {
    const copyArray = arrToCopy => arrToCopy.map(el => el);
    const udahPiketMingguIni = namaOrang => !orangBelumPiket.mingguIni.includes(namaOrang);
    const refillOrangBelumPiket = () => {
        if (orangBelumPiket.mingguIni.length === 0)
            orangBelumPiket.mingguIni = copyArray(anggota);
    };

    const containSubArray = (arrToCheck, subArray) => {
        for (let element of subArray) {
            if (arrToCheck.includes(element)) return true;
        }
        return false;
    };

    const getRandomCuciPiring = () => {
        refillOrangBelumPiket();
        
        if (orangBelumPiket.cuciPiring.length === 0) orangBelumPiket.cuciPiring = copyArray(anggota);
        if (!containSubArray(orangBelumPiket.mingguIni, orangBelumPiket.cuciPiring)) {
            orangBelumPiket.cuciPiring = copyArray(anggota);
        }

        let randomIndex = 0;
        let namaOrang = '';
        do {
            randomIndex = Math.floor(Math.random() * orangBelumPiket.cuciPiring.length);
            namaOrang = orangBelumPiket.cuciPiring[randomIndex];
        } while (udahPiketMingguIni(namaOrang));
        orangBelumPiket.cuciPiring.splice(randomIndex, 1);
        orangBelumPiket.mingguIni = orangBelumPiket.mingguIni.filter(nama => nama !== namaOrang);
        return namaOrang;
    }

    const getRandomSedotDebu = () => {
        refillOrangBelumPiket();
        
        if (orangBelumPiket.sedotDebu.length === 0) orangBelumPiket.sedotDebu = copyArray(anggota);
        if (!containSubArray(orangBelumPiket.mingguIni, orangBelumPiket.sedotDebu)) {
            orangBelumPiket.sedotDebu = copyArray(anggota);
        }

        let randomIndex = 0;
        let namaOrang = '';
        do {
            randomIndex = Math.floor(Math.random() * orangBelumPiket.sedotDebu.length);
            namaOrang = orangBelumPiket.sedotDebu[randomIndex];
        } while (udahPiketMingguIni(namaOrang));
        orangBelumPiket.sedotDebu.splice(randomIndex, 1);
        orangBelumPiket.mingguIni = orangBelumPiket.mingguIni.filter(nama => nama !== namaOrang);
        return namaOrang;
    }

    const getRandomBersihMeja = () => {
        refillOrangBelumPiket();
        
        if (orangBelumPiket.bersihMeja.length === 0) orangBelumPiket.bersihMeja = copyArray(anggota);
        if (!containSubArray(orangBelumPiket.mingguIni, orangBelumPiket.bersihMeja)) {
            orangBelumPiket.bersihMeja = copyArray(anggota);
        }

        let randomIndex = 0;
        let namaOrang = '';
        do {
            randomIndex = Math.floor(Math.random() * orangBelumPiket.bersihMeja.length);
            namaOrang = orangBelumPiket.bersihMeja[randomIndex];
        } while (udahPiketMingguIni(namaOrang));
        orangBelumPiket.bersihMeja.splice(randomIndex, 1);
        orangBelumPiket.mingguIni = orangBelumPiket.mingguIni.filter(nama => nama !== namaOrang);
        return namaOrang;
    }

    let orangBelumPiket = {
        mingguIni: copyArray(anggota),
        cuciPiring: copyArray(anggota),
        sedotDebu: copyArray(anggota),
        bersihMeja: copyArray(anggota)
    };

    const jadwalPiket = [];
    for (let i = 0; i < numOfDay; i++) {
        const piketCuciPiring = [getRandomCuciPiring(), getRandomCuciPiring()];
        const piketSedotDebu = [getRandomSedotDebu(), getRandomSedotDebu()];
        const piketBersihMeja = [getRandomBersihMeja()];
        jadwalPiket.push([piketCuciPiring, piketSedotDebu, piketBersihMeja]);
    }
    return jadwalPiket;
}
console.log(generateJadwalPiket(['a', 'b', 'c', 'd', 'e'], 10));
