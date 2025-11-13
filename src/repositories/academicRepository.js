

export const academicRepository = {
  // Get class schedules
  async getSchedules() {
    // Mock data for class schedules
    return [
      {
        id: 1,
        className: "Kelas 1A",
        day: "Senin",
        schedule: [
          { time: "08:00 - 09:00", subject: "Matematika", teacher: "Ahmad Rifai, S.Pd" },
          { time: "09:00 - 10:00", subject: "Bahasa Indonesia", teacher: "Dewi Kartika, S.Pd" },
          { time: "10:00 - 11:00", subject: "Istirahat", teacher: "" },
          { time: "11:00 - 12:00", subject: "IPA", teacher: "Budi Santoso, S.Pd" }
        ]
      },
      {
        id: 2,
        className: "Kelas 1A",
        day: "Selasa",
        schedule: [
          { time: "08:00 - 09:00", subject: "IPS", teacher: "Citra Dewi, S.Pd" },
          { time: "09:00 - 10:00", subject: "Seni Budaya", teacher: "Eko Prasetyo, S.Pd" },
          { time: "10:00 - 11:00", subject: "Istirahat", teacher: "" },
          { time: "11:00 - 12:00", subject: "PJOK", teacher: "Fajar Nugroho, S.Pd" }
        ]
      },
      {
        id: 3,
        className: "Kelas 2B",
        day: "Senin",
        schedule: [
          { time: "08:00 - 09:00", subject: "Bahasa Inggris", teacher: "Gina Putri, S.Pd" },
          { time: "09:00 - 10:00", subject: "Matematika", teacher: "Ahmad Rifai, S.Pd" },
          { time: "10:00 - 11:00", subject: "Istirahat", teacher: "" },
          { time: "11:00 - 12:00", subject: "IPA", teacher: "Budi Santoso, S.Pd" }
        ]
      }
    ];
  },

  // Get student grades
  async getGrades() {
    // Mock data for student grades
    return [
      {
        id: 1,
        studentId: "SISWA001",
        studentName: "Budi Santoso",
        className: "Kelas 4A",
        subjects: [
          { name: "Matematika", score: 85, grade: "A" },
          { name: "Bahasa Indonesia", score: 78, grade: "B+" },
          { name: "IPA", score: 92, grade: "A" },
          { name: "IPS", score: 80, grade: "B+" },
          { name: "Bahasa Inggris", score: 88, grade: "A-" }
        ],
        average: 84.6
      },
      {
        id: 2,
        studentId: "SISWA002",
        studentName: "Ani Wijaya",
        className: "Kelas 4A",
        subjects: [
          { name: "Matematika", score: 90, grade: "A" },
          { name: "Bahasa Indonesia", score: 85, grade: "A" },
          { name: "IPA", score: 87, grade: "A-" },
          { name: "IPS", score: 82, grade: "B+" },
          { name: "Bahasa Inggris", score: 91, grade: "A" }
        ],
        average: 87.0
      }
    ];
  },

  // Get learning materials
  async getMaterials() {
    // Mock data for learning materials
    return [
      {
        id: 1,
        subject: "Matematika",
        className: "Kelas 4A",
        title: "Pecahan dan Desimal",
        description: "Materi tentang operasi hitung pecahan dan desimal untuk kelas 4 SD",
        fileUrl: "/materials/matematika-pecahan.pdf",
        uploadedAt: "2023-06-15",
        fileSize: "2.4 MB"
      },
      {
        id: 2,
        subject: "Bahasa Indonesia",
        className: "Kelas 4A",
        title: "Membaca Puisi",
        description: "Petunjuk membaca puisi dengan ekspresi yang tepat",
        fileUrl: "/materials/bahasa-indonesia-puisi.pdf",
        uploadedAt: "2023-06-10",
        fileSize: "1.8 MB"
      },
      {
        id: 3,
        subject: "IPA",
        className: "Kelas 4A",
        title: "Rangka Manusia",
        description: "Diagram dan penjelasan tentang sistem rangka manusia",
        fileUrl: "/materials/ipa-rangka-manusia.pdf",
        uploadedAt: "2023-06-05",
        fileSize: "3.1 MB"
      }
    ];
  },

  // Get schedule by class
  async getScheduleByClass(className) {
    const allSchedules = await this.getSchedules();
    return allSchedules.filter(schedule => schedule.className === className);
  },

  // Get grades by student
  async getGradesByStudent(studentId) {
    const allGrades = await this.getGrades();
    return allGrades.find(grade => grade.studentId === studentId);
  }
};