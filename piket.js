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
  const getRandom = () => {
    if (orangBelumPiket.length === 0) orangBelumPiket = copyArray(anggota);
    const randomIndex = Math.floor(Math.random() * orangBelumPiket.length);
    const namaOrang = orangBelumPiket[randomIndex];
    orangBelumPiket.splice(randomIndex, 1);
    return namaOrang;
  };

  let orangBelumPiket = copyArray(anggota);
  const jadwalPiket = [];
  for (let i = 0; i < numOfDay; i++) {
    const piketCuciPiring = [getRandom(), getRandom()];
    const piketSedotDebut = [getRandom(), getRandom()];
    const piketBersihMeja = [getRandom()];
    jadwalPiket.push([piketCuciPiring, piketSedotDebut, piketBersihMeja]);
  }
  return jadwalPiket;
}
console.log(generateJadwalPiket(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 30));
