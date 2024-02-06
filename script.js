alert("Selamat Datang di Ticket App \n Yang Bisa Masuk Hanya Umur 13 Tahun Keatas");

const umur = prompt("Masukkan Umur Anda");

if(umur >= 13) {
  const studio = prompt("Masukkan studio yang ingin anda pesan \n A: Studio A \n B: Studio B \n C: Studio C");

  if (studio == "A" || studio == "B" || studio == "C") {
     const film = prompt("Pilih film \n 1 : Avengers \n 2: KKN Desa Penari \n 3: Toy Story 4");

     let namaFilm
     if (film == "1") {
        namaFilm = "Avengers";
     } else if (film == "2") {
        namaFilm = "KKN Desa Penari";
     } else if (film == "3") {
        namaFilm = "Toy Story 4";
     }

     if (film == "1" || film == "2" || film == "3") {
        const nama = prompt("Masukkan Nama Anda");

        alert(`Berikut Tiket Anda! \n Nama: ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`);
     } else {
       alert("Maaf Film Yang Anda Pilih TidaK Tersedia");
     }
  } else {
    alert("Anda Harus Memilih Studio");
  } 
} else {
  alert("Maaf Tidak Bisa Masuk, Umur Anda Dibawah 13 Tahun");
}