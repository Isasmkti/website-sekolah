import { studentRepository } from "../repositories/studentRepository";

export const studentService = {
  async fetchStudents() {
    try {
      const students = await studentRepository.getAllStudent();

      // Add formatting or additional logic if needed
      return students.map(student => ({
        ...student,
        fullName: student.name,
        classInfo: `Kelas ${student.grade}-${student.major}`,
        studentId: student.id,
        address: student.address
      }));
    } catch (err) {
      console.error("Error fetching students:", err);
      throw new Error("Gagal memuat daftar siswa");
    }
  }
};
