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
  const copyArray = arr => arr.map(el => el);
  const getRandom = arr => {
    if (orangBelumPiket.length === 0) orangBelumPiket = copyArray(anggota);
    let randomIndex = 0;
    let namaOrang = '';
    let udahSemua = true;
    for (let orang of orangBelumPiket) {
      if (!arr.includes(orang)) udahSemua = false;  
    }
    if (udahSemua) orangBelumPiket = copyArray(anggota); 
    do {
      randomIndex = Math.floor(Math.random() * orangBelumPiket.length);
      namaOrang = orangBelumPiket[randomIndex];
    } while (arr.includes(namaOrang));
    orangBelumPiket.splice(randomIndex, 1);
    return namaOrang;
  };

  let orangBelumPiket = copyArray(anggota);
  let udahPiketCuciPiring = [];
  let udahPiketSedotDebu = [];
  let udahPiketBersihMeja = [];
  const jumlahAnggota = anggota.length;
  const jadwalPiket = [];
  for (let i = 0; i < numOfDay; i++) {
    const piketCuciPiring = [getRandom(udahPiketCuciPiring), getRandom(udahPiketCuciPiring)];
    const piketSedotDebu = [getRandom(udahPiketSedotDebu), getRandom(udahPiketSedotDebu)];
    const piketBersihMeja = [getRandom(udahPiketBersihMeja)];
    jadwalPiket.push([piketCuciPiring, piketSedotDebu, piketBersihMeja]);

    udahPiketCuciPiring.push(...piketCuciPiring);
    udahPiketSedotDebu.push(...piketSedotDebu);
    udahPiketBersihMeja.push(...piketBersihMeja);
    if (udahPiketCuciPiring.length === jumlahAnggota) udahPiketCuciPiring = [];
    if (udahPiketSedotDebu.length === jumlahAnggota) udahPiketSedotDebu = [];
    if (udahPiketBersihMeja.length === jumlahAnggota) udahPiketBersihMeja = [];
  }
  return jadwalPiket;
}
console.log(generateJadwalPiket(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 30));
