import http from "../api/httpClient";

export const studentRepository = {
  // Get list of students
  async getAllStudent() {
    // For now, returning mock data since we don't have a real API endpoint
    // In a real application, this would call an actual endpoint
    return [
      {
        id: 1,
        name: "Aditia Rahman",
        grade: "10",
        major: "IPA",
        address: "Jl. Melati No. 23",
        nis: "12345678",
        birthDate: "2008-01-15",
        achievements: [
          { title: "Juara 1 Lomba Matematika", level: "Kabupaten", year: "2023" },
          { title: "Siswa Berprestasi", level: "Sekolah", year: "2023/2024" }
        ],
        attendance: { present: 95, excused: 3, sick: 2 },
        grades: { average: 85.5, rank: 3 }
      },
      {
        id: 2,
        name: "Siti Nurhaliza",
        grade: "11",
        major: "IPS",
        address: "Jl. Kenanga No. 14",
        nis: "12345679",
        birthDate: "2007-03-20",
        achievements: [
          { title: "Juara 2 Lomba Bahasa Indonesia", level: "Provinsi", year: "2023" }
        ],
        attendance: { present: 92, excused: 5, sick: 3 },
        grades: { average: 87.2, rank: 2 }
      },
      {
        id: 3,
        name: "Budi Setiawan",
        grade: "12",
        major: "IPA",
        address: "Jl. Mawar No. 7",
        nis: "12345680",
        birthDate: "2006-07-10",
        achievements: [
          { title: "Juara 3 Lomba Fisika", level: "Nasional", year: "2023" },
          { title: "Ketua OSIS", level: "Sekolah", year: "2023/2024" }
        ],
        attendance: { present: 98, excused: 1, sick: 1 },
        grades: { average: 89.1, rank: 1 }
      },
      {
        id: 4,
        name: "Maya Sari",
        grade: "10",
        major: "IPS",
        address: "Jl. Anggrek No. 45",
        nis: "12345681",
        birthDate: "2008-05-12",
        achievements: [
          { title: "Juara 1 Lomba Seni Tari", level: "Kecamatan", year: "2023" }
        ],
        attendance: { present: 97, excused: 2, sick: 1 },
        grades: { average: 86.8, rank: 2 }
      },
      {
        id: 5,
        name: "Rizki Pratama",
        grade: "11",
        major: "IPA",
        address: "Jl. Cempaka No. 67",
        nis: "12345682",
        birthDate: "2007-09-08",
        achievements: [
          { title: "Juara 2 Lomba Kimia", level: "Kabupaten", year: "2023" },
          { title: "Anggota Tim Robotik", level: "Sekolah", year: "2023/2024" }
        ],
        attendance: { present: 94, excused: 4, sick: 2 },
        grades: { average: 88.3, rank: 1 }
      },
      {
        id: 6,
        name: "Dina Amelia",
        grade: "12",
        major: "IPS",
        address: "Jl. Dahlia No. 89",
        nis: "12345683",
        birthDate: "2006-11-25",
        achievements: [
          { title: "Juara 1 Lomba Debat", level: "Provinsi", year: "2023" },
          { title: "Wakil Ketua OSIS", level: "Sekolah", year: "2023/2024" }
        ],
        attendance: { present: 96, excused: 3, sick: 1 },
        grades: { average: 87.9, rank: 2 }
      },
      {
        id: 7,
        name: "Fajar Nugroho",
        grade: "10",
        major: "IPA",
        address: "Jl. Flamboyan No. 12",
        nis: "12345684",
        birthDate: "2008-02-28",
        achievements: [
          { title: "Juara 3 Lomba Biologi", level: "Kabupaten", year: "2023" }
        ],
        attendance: { present: 93, excused: 5, sick: 2 },
        grades: { average: 84.7, rank: 4 }
      },
      {
        id: 8,
        name: "Laila Fitriani",
        grade: "11",
        major: "IPS",
        address: "Jl. Gardenia No. 34",
        nis: "12345685",
        birthDate: "2007-06-14",
        achievements: [
          { title: "Juara 1 Lomba Puisi", level: "Kecamatan", year: "2023" },
          { title: "Ketua PMR", level: "Sekolah", year: "2023/2024" }
        ],
        attendance: { present: 98, excused: 1, sick: 1 },
        grades: { average: 86.5, rank: 3 }
      },
      {
        id: 9,
        name: "Hanif Maulana",
        grade: "10",
        major: "IPA",
        address: "Jl. Teratai No. 10",
        nis: "12345686",
        birthDate: "2008-04-03",
        achievements: [
          { title: "Finalis Olimpiade Matematika", level: "Kabupaten", year: "2024" }
        ],
        attendance: { present: 96, excused: 3, sick: 1 },
        grades: { average: 85.9, rank: 3 }
      },
      {
        id: 10,
        name: "Nadila Syafira",
        grade: "12",
        major: "IPS",
        address: "Jl. Cemara No. 52",
        nis: "12345687",
        birthDate: "2006-12-19",
        achievements: [
          { title: "Juara 2 Lomba Cerita Pendek", level: "Provinsi", year: "2023" }
        ],
        attendance: { present: 97, excused: 2, sick: 1 },
        grades: { average: 88.6, rank: 2 }
      },
      {
        id: 11,
        name: "Bagas Prakoso",
        grade: "11",
        major: "IPA",
        address: "Jl. Angsana No. 17",
        nis: "12345688",
        birthDate: "2007-08-11",
        achievements: [
          { title: "Peserta Lomba Robotik", level: "Nasional", year: "2024" }
        ],
        attendance: { present: 94, excused: 4, sick: 2 },
        grades: { average: 84.3, rank: 5 }
      },
      {
        id: 12,
        name: "Citra Lestari",
        grade: "10",
        major: "IPS",
        address: "Jl. Nusa Indah No. 6",
        nis: "12345689",
        birthDate: "2008-09-29",
        achievements: [
          { title: "Juara 1 Lomba Tari Tradisional", level: "Kabupaten", year: "2024" }
        ],
        attendance: { present: 99, excused: 0, sick: 1 },
        grades: { average: 89.4, rank: 1 }
      },
      {
        id: 13,
        name: "Rizwana Putri",
        grade: "12",
        major: "IPA",
        address: "Jl. Matahari No. 44",
        nis: "12345690",
        birthDate: "2006-05-05",
        achievements: [
          { title: "Juara 2 Lomba Fisika", level: "Provinsi", year: "2023" },
          { title: "Finalis KSM", level: "Nasional", year: "2024" }
        ],
        attendance: { present: 96, excused: 2, sick: 2 },
        grades: { average: 90.2, rank: 1 }
      },
      {
        id: 14,
        name: "Ivan Pratama",
        grade: "11",
        major: "IPS",
        address: "Jl. Rajawali No. 22",
        nis: "12345691",
        birthDate: "2007-02-17",
        achievements: [
          { title: "Juara 3 Lomba Fotografi", level: "Kecamatan", year: "2023" }
        ],
        attendance: { present: 92, excused: 6, sick: 2 },
        grades: { average: 82.7, rank: 6 }
      },
      {
        id: 15,
        name: "Gilang Santoso",
        grade: "10",
        major: "IPA",
        address: "Jl. Anggrek Putih No. 33",
        nis: "12345692",
        birthDate: "2008-10-21",
        achievements: [
          { title: "Peserta Lomba Cerdas Cermat", level: "Sekolah", year: "2024" }
        ],
        attendance: { present: 95, excused: 3, sick: 2 },
        grades: { average: 83.4, rank: 4 }
      },
      {
        id: 16,
        name: "Meisya Karin",
        grade: "11",
        major: "IPA",
        address: "Jl. Sukarno No. 18",
        nis: "12345693",
        birthDate: "2007-07-02",
        achievements: [
          { title: "Juara 1 Lomba Poster", level: "Provinsi", year: "2024" }
        ],
        attendance: { present: 98, excused: 1, sick: 1 },
        grades: { average: 87.4, rank: 2 }
      },
      {
        id: 17,
        name: "Aldo Firmansyah",
        grade: "12",
        major: "IPS",
        address: "Jl. Dahlia Merah No. 50",
        nis: "12345694",
        birthDate: "2006-03-15",
        achievements: [
          { title: "Juara 2 Debat Bahasa Indonesia", level: "Nasional", year: "2023" }
        ],
        attendance: { present: 93, excused: 5, sick: 2 },
        grades: { average: 86.1, rank: 3 }
      },
      {
        id: 18,
        name: "Syifa Azzahra",
        grade: "10",
        major: "IPS",
        address: "Jl. Merpati No. 12",
        nis: "12345695",
        birthDate: "2008-12-09",
        achievements: [
          { title: "Juara 1 Lomba Solo Vocal", level: "Kecamatan", year: "2024" }
        ],
        attendance: { present: 97, excused: 2, sick: 1 },
        grades: { average: 88.1, rank: 2 }
      }

    ];
  }
};
