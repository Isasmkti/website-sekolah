import { academicRepository } from "../repositories/academicRepository";

export const academicService = {
  async fetchSchedules() {
    try {
      const schedules = await academicRepository.getSchedules();
      
      // Format the schedules data
      return schedules.map(schedule => ({
        ...schedule,
        classInfo: schedule.className,
        dayOfWeek: schedule.day,
        periods: schedule.schedule.map(period => ({
          ...period,
          timeSlot: period.time,
          subjectName: period.subject,
          teacherName: period.teacher || "Tidak ada guru"
        }))
      }));
    } catch (err) {
      console.error("Error fetching schedules:", err);
      throw new Error("Gagal memuat jadwal pelajaran");
    }
  },

  async fetchGrades() {
    try {
      const grades = await academicRepository.getGrades();
      
      // Format the grades data
      return grades.map(grade => ({
        ...grade,
        studentId: grade.studentId,
        studentFullName: grade.studentName,
        classInfo: grade.className,
        subjects: grade.subjects.map(subject => ({
          ...subject,
          subjectName: subject.name,
          scoreValue: subject.score,
          gradeLetter: subject.grade
        })),
        averageScore: grade.average
      }));
    } catch (err) {
      console.error("Error fetching grades:", err);
      throw new Error("Gagal memuat nilai siswa");
    }
  },

  async fetchMaterials() {
    try {
      const materials = await academicRepository.getMaterials();
      
      // Format the materials data
      return materials.map(material => ({
        ...material,
        subjectName: material.subject,
        classInfo: material.className,
        materialTitle: material.title,
        materialDescription: material.description,
        downloadUrl: material.fileUrl,
        uploadDate: new Date(material.uploadedAt).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        size: material.fileSize
      }));
    } catch (err) {
      console.error("Error fetching materials:", err);
      throw new Error("Gagal memuat materi pembelajaran");
    }
  },

  async fetchScheduleByClass(className) {
    try {
      const schedules = await academicRepository.getScheduleByClass(className);
      
      // Format the schedules data
      return schedules.map(schedule => ({
        ...schedule,
        classInfo: schedule.className,
        dayOfWeek: schedule.day,
        periods: schedule.schedule.map(period => ({
          ...period,
          timeSlot: period.time,
          subjectName: period.subject,
          teacherName: period.teacher || "Tidak ada guru"
        }))
      }));
    } catch (err) {
      console.error("Error fetching schedule by class:", err);
      throw new Error("Gagal memuat jadwal berdasarkan kelas");
    }
  },

  async fetchGradesByStudent(studentId) {
    try {
      const grades = await academicRepository.getGradesByStudent(studentId);
      
      if (!grades) {
        throw new Error("Data nilai tidak ditemukan");
      }
      
      // Format the grades data
      return {
        ...grades,
        studentId: grades.studentId,
        studentFullName: grades.studentName,
        classInfo: grades.className,
        subjects: grades.subjects.map(subject => ({
          ...subject,
          subjectName: subject.name,
          scoreValue: subject.score,
          gradeLetter: subject.grade
        })),
        averageScore: grades.average
      };
    } catch (err) {
      console.error("Error fetching grades by student:", err);
      throw new Error("Gagal memuat nilai siswa");
    }
  }
};