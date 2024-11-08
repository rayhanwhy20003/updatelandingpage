
window.onload = function() {
  const fillone = {
      id: 1,
      Title: 'Tutorial Drag & Drop: Mengupload Template dengan Cepat dan Mudah',
      Subtitle : ' Mengupload Template dengan drag & drop',
      Deskripsi : 'Dalam tutorial ini, Anda akan belajar cara mengunggah template dengan mudah menggunakan fitur drag & drop. Metode ini memungkinkan Anda untuk menyeret file langsung dari komputer ke aplikasi atau situs web tanpa harus mencari opsi unggah yang rumit. Kami akan membahas langkah-langkah praktis, tips, dan solusi umum untuk masalah yang mungkin Anda hadapi. Dengan panduan ini, proses upload template Anda akan menjadi lebih cepat dan efisien. Ideal untuk pemula maupun pengguna berpengalaman!',
      gambar : '../image/Screenshot 2024-11-03 172150.png', 
  }
  const filltwo = {
      id: 2,
      nama: 'Tutorial Cara Membuat ID Card Otomatis Menggunakan Certifast',
      umur: '22',
      nim: 23762728923,
  }

  const pertama = document.getElementById('fillone');
  pertama.addEventListener('click', function(){
      // Simpan data ke sessionStorage
      sessionStorage.setItem('selectedUser', JSON.stringify(fillone));
      
      // Arahkan ke halaman baru
      window.location.href = './fillbox.html';
      
  });

  const kedua = document.getElementById('filltwo');
  kedua.addEventListener('click', function(){
      // Simpan data ke sessionStorage
      sessionStorage.setItem('selectedUser', JSON.stringify(filltwo));
      
      // Arahkan ke halaman baru
      window.location.href = './fillbox.html';
      
  });
}

