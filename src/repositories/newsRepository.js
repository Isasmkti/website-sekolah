import http from "../api/httpClient";

export const newsRepository = {
  // Get all news and announcements
  async getNews() {
    // Mock data for news and announcements
    return [
      {
        id: 1,
        title: "Pelantikan Pengurus OSIS Masa Jabatan 2023/2024",
        content: "Dengan bangga kami umumkan pelantikan pengurus OSIS baru untuk tahun ajaran 2023/2024. Kegiatan ini akan dilaksanakan pada hari Sabtu, 15 Juli 2023 di aula sekolah mulai pukul 09.00 WIB. Acara akan dihadiri oleh kepala sekolah, guru pembimbing, dan seluruh siswa. Pengurus OSIS yang baru akan memimpin berbagai kegiatan ekstrakurikuler dan kegiatan sosial selama satu tahun ke depan.",
        date: "2023-07-10",
        author: "Humas Sekolah",
        category: "Pengumuman",
        image: "/images/news1.jpg",
        featured: true
      },
      {
        id: 2,
        title: "Perayaan Hari Pendidikan Nasional",
        content: "Sekolah kami merayakan Hari Pendidikan Nasional dengan berbagai kegiatan menarik, termasuk lomba seni dan pameran prestasi siswa. Acara ini terbuka untuk umum dan akan berlangsung selama 3 hari. Pada hari pertama akan diisi dengan upacara bendera, hari kedua lomba seni antar kelas, dan hari ketiga pameran prestasi siswa sepanjang tahun ajaran.",
        date: "2023-05-02",
        author: "Kurikulum",
        category: "Berita",
        image: "/images/news2.jpg",
        featured: true
      },
      {
        id: 3,
        title: "Jadwal Libur Semester Genap",
        content: "Diberitahukan kepada seluruh siswa dan orang tua/wali murid bahwa libur semester genap akan dimulai pada tanggal 10 Juni 2023 dan kegiatan belajar mengajar akan dilanjutkan pada tanggal 17 Juli 2023. Selama masa libur, sekolah akan tetap menjaga keamanan dan fasilitas sekolah. Orang tua dimohon untuk mengawasi kegiatan anak-anak selama libur.",
        date: "2023-06-01",
        author: "Administrasi",
        category: "Pengumuman",
        image: "/images/news3.jpg",
        featured: false
      },
      {
        id: 4,
        title: "Workshop Teknologi untuk Guru",
        content: "Sekolah akan mengadakan workshop teknologi untuk guru-guru pada hari Minggu, 25 Juni 2023. Workshop ini akan membahas penggunaan aplikasi pembelajaran digital dan manajemen kelas online. Narasumber dari Dinas Pendidikan akan memberikan materi tentang integrasi teknologi dalam pembelajaran. Peserta akan mendapatkan sertifikat dan materi workshop.",
        date: "2023-06-15",
        author: "ICT Center",
        category: "Berita",
        image: "/images/news4.jpg",
        featured: false
      },
      {
        id: 5,
        title: "Penerimaan Siswa Baru Tahun Ajaran 2024/2025",
        content: "Pendaftaran siswa baru untuk tahun ajaran 2024/2025 telah dibuka mulai tanggal 1 Agustus 2023. Persyaratan pendaftaran meliputi fotokopi akta kelahiran, kartu keluarga, rapor semester terakhir, dan pas foto berwarna. Pendaftaran dapat dilakukan secara online melalui website sekolah atau datang langsung ke administrasi sekolah.",
        date: "2023-07-20",
        author: "Administrasi",
        category: "Pengumuman",
        image: "/images/news5.jpg",
        featured: true
      },
      {
        id: 6,
        title: "Prestasi Siswa dalam Lomba Matematika Tingkat Kabupaten",
        content: "Dengan bangga kami sampaikan bahwa siswa kelas XII-A berhasil meraih juara 1 dalam lomba matematika tingkat kabupaten. Prestasi ini merupakan hasil kerja keras siswa dan bimbingan guru matematika. Sekolah akan memberikan penghargaan khusus pada upacara hari senin mendatang.",
        date: "2023-07-25",
        author: "Kurikulum",
        category: "Berita",
        image: "/images/news6.jpg",
        featured: false
      },
      {
        id: 7,
        title: "Pemeliharaan Gedung Sekolah",
        content: "Informasi penting: Gedung utama sekolah akan dilakukan pemeliharaan rutin mulai tanggal 5 Agustus 2023 selama 3 hari. Selama masa pemeliharaan, kegiatan belajar mengajar akan dilaksanakan di gedung serbaguna. Kami mohon maaf atas ketidaknyamanan yang timbul dan memohon pengertian dari seluruh warga sekolah.",
        date: "2023-07-28",
        author: "Sarana & Prasarana",
        category: "Pengumuman",
        image: "/images/news7.jpg",
        featured: false
      },
      {
        id: 8,
        title: "Kunjungan Industri ke PT. Teknologi Maju",
        content: "Program kunjungan industri untuk siswa kelas XI dan XII akan dilaksanakan pada tanggal 15 Agustus 2023 ke PT. Teknologi Maju. Kegiatan ini bertujuan memberikan wawasan dunia kerja kepada siswa. Peserta terbatas 50 siswa dan akan dipilih berdasarkan nilai akademik dan sikap perilaku.",
        date: "2023-08-01",
        author: "BK & Karier",
        category: "Berita",
        image: "/images/news8.jpg",
        featured: false
      },
      {
        id: 9,
        title: "Pembagian Raport Semester Ganjil",
        content: "Pembagian raport semester ganjil akan dilaksanakan pada tanggal 10 Agustus 2023 mulai pukul 08.00 WIB. Orang tua/wali murid diharapkan hadir tepat waktu untuk menerima raport anak. Bagi yang berhalangan hadir dapat diwakilkan dengan surat kuasa.",
        date: "2023-08-05",
        author: "Administrasi",
        category: "Pengumuman",
        image: "/images/news9.jpg",
        featured: true
      },
      {
        id: 10,
        title: "Pelatihan Keterampilan Hidup untuk Siswa",
        content: "Sekolah akan mengadakan pelatihan keterampilan hidup selama libur semester. Pelatihan mencakup memasak, menjahit, dan kerajinan tangan. Kegiatan ini bersifat sukarela dan biaya pelatihan akan ditanggung sekolah. Pendaftaran dibuka mulai minggu depan di ruang BK.",
        date: "2023-08-08",
        author: "BK & Karier",
        category: "Berita",
        image: "/images/news10.jpg",
        featured: false
      }
    ];
  },

  // Get a specific news item by ID
  async getNewsById(id) {
    const allNews = await this.getNews();
    return allNews.find(news => news.id === parseInt(id));
  },

  // Get featured news only
  async getFeaturedNews() {
    const allNews = await this.getNews();
    return allNews.filter(news => news.featured);
  }
};