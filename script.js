// Tangkap elemen HTML
const form = document.getElementById('formData');
const hasilBox = document.getElementById('hasilBox');

// Jalankan saat form dikirim
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Biar halaman tidak refresh

    // Ambil nilai dari input
    const ph = parseFloat(document.getElementById('ph').value);
    const genangan = parseInt(document.getElementById('genangan').value);
    const organik = parseFloat(document.getElementById('organik').value);
    const salinitas = parseFloat(document.getElementById('salinitas').value);

    // --- ATURAN PENILAIAN BERDASARKAN STANDAR BIOFISIKA ---
    let status = "";
    let saran = "";
    let kelas = "";

    // Kriteria Sangat Sesuai
    if (ph >= 5.5 && ph <= 7.5 && 
        genangan >= 10 && genangan <= 30 && 
        organik >= 2.0 && 
        salinitas <= 2.0) {
        
        status = "✅ SANGAT SESUAI";
        saran = "Lahan sangat cocok untuk tanaman padi sawah, jagung, atau kacang-kacangan. Kondisi lahan ideal.";
        kelas = "sangat-sesuai";
    }

    // Kriteria Sesuai dengan Syarat
    else if ((ph >= 4.5 && ph < 5.5 || ph > 7.5 && ph <= 8.5) && 
             (genangan >= 5 && genangan < 10 || genangan > 30 && genangan <= 50) && 
             organik >= 1.0 && 
             salinitas <= 4.0) {
        
        status = "⚠️ SESUAI DENGAN SYARAT";
        saran = "Bisa ditanami tapi perlu perbaikan: pengapuran (jika pH rendah), pengaturan air, atau penambahan pupuk organik.";
        kelas = "sesuai";
    }

    // Kriteria Tidak Sesuai
    else {
        status = "❌ TIDAK SESUAI";
        saran = "Kondisi lahan kurang mendukung. Disarankan perbaikan lahan intensif atau dialihfungsikan untuk tanaman lain yang lebih tahan.";
        kelas = "tidak-sesuai";
    }

    // Tampilkan hasil ke layar
    hasilBox.className = "hasil " + kelas;
    hasilBox.innerHTML = `
        <h3>${status}</h3>
        <p><strong>Keterangan:</strong> ${saran}</p>
        <hr>
        <p><small>Data yang dimasukkan: pH=${ph}, Genangan=${genangan}cm, Organik=${organik}%, Salinitas=${salinitas}dS/m</small></p>
    `;
});
