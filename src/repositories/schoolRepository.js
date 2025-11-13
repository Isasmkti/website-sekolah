import http from "../api/httpClient";

export const schoolRepository = {
  // Get school profile information
  async getSchoolProfile() {
    // For now, returning mock data since we don't have a real API endpoint
    // In a real application, this would call an actual endpoint
    return {
      id: 1,
      name: "SDN Sukamaju",
      established: 1985,
      address: "Jl. Merdeka No. 123, Jakarta",
      phone: "(021) 1234567",
      email: "info@sukamaju.sch.id",
      principal: "Dra. Siti Nurhaliza",
      description: "Sekolah Dasar Negeri Sukamaju adalah institusi pendidikan yang berkomitmen untuk memberikan pendidikan terbaik bagi anak bangsa."
    };
  },

// Get list of teachers
async getTeachers() {
  // Mock data for teachers
  return [
    {
      id: 1,
      name: "Dra. Siti Nurhaliza",
      position: "Kepala Sekolah",
      subject: "-",
      education: "S2 Manajemen Pendidikan",
      experience: "20 tahun",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      name: "Ahmad Rifai, S.Pd",
      position: "Wakil Kurikulum",
      subject: "Matematika",
      education: "S1 Pendidikan Matematika",
      experience: "15 tahun",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "Dewi Kartika, S.Pd",
      position: "Guru Kelas",
      subject: "Bahasa Indonesia",
      education: "S1 Pendidikan Bahasa Indonesia",
      experience: "12 tahun",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
    }
  ];
}
,

 async getFacilities() {
  return [
    {
      id: 1,
      name: "Ruang Kelas",
      description: "20 ruang kelas yang nyaman dan ber-AC",
      capacity: "30 siswa per kelas",
      image: "https://i.pinimg.com/1200x/c3/0a/27/c30a278c911504ad2881b76c41be6032.jpg"
    },
    {
      id: 2,
      name: "Perpustakaan",
      description: "Perpustakaan dengan koleksi buku lebih dari 5000 judul",
      capacity: "100 orang",
      image: "https://i.pinimg.com/1200x/50/20/b5/5020b5047b3be1d90e13a69109045e89.jpg"
    },
    {
      id: 3,
      name: "Laboratorium Komputer",
      description: "Laboratorium komputer dengan 30 unit PC terbaru",
      capacity: "30 siswa",
      image: "https://i.pinimg.com/736x/e6/07/b6/e607b656609a3509ce10e2cc008fdcd8.jpg"
    },
    {
      id: 4,
      name: "Lapangan Olahraga",
      description: "Lapangan serbaguna untuk berbagai kegiatan olahraga",
      capacity: "200 orang",
      image: "https://i.pinimg.com/1200x/68/ca/d5/68cad5e67bb430ae90aec2d987b3eb71.jpg"
    }
  ];
}

};