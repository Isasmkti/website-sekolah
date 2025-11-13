import { defineStore } from "pinia";
import { studentService } from "../services/studentService";

export const useStudentsStore = defineStore("students", {
  state: () => ({
    students: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadStudents() {
      this.loading = true;
      this.error = null;
      try {
        this.students = await studentService.fetchStudents();
      } catch (err) {
        this.error = err.message || "Gagal memuat daftar siswa";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    }
  },
});
