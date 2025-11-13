import { defineStore } from "pinia";
import { academicService } from "../services/academicService";

export const useAcademicStore = defineStore("academic", {
  state: () => ({
    schedules: [],
    grades: [],
    materials: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadSchedules() {
      this.loading = true;
      this.error = null;
      try {
        this.schedules = await academicService.fetchSchedules();
      } catch (err) {
        this.error = err.message || "Gagal memuat jadwal pelajaran";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadGrades() {
      this.loading = true;
      this.error = null;
      try {
        this.grades = await academicService.fetchGrades();
      } catch (err) {
        this.error = err.message || "Gagal memuat nilai siswa";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadMaterials() {
      this.loading = true;
      this.error = null;
      try {
        this.materials = await academicService.fetchMaterials();
      } catch (err) {
        this.error = err.message || "Gagal memuat materi pembelajaran";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadScheduleByClass(className) {
      this.loading = true;
      this.error = null;
      try {
        const schedules = await academicService.fetchScheduleByClass(className);
        // Filter existing schedules to only show the ones for this class
        this.schedules = schedules;
      } catch (err) {
        this.error = err.message || "Gagal memuat jadwal berdasarkan kelas";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadGradesByStudent(studentId) {
      this.loading = true;
      this.error = null;
      try {
        const studentGrades = await academicService.fetchGradesByStudent(studentId);
        // Replace the grades array with just this student's grades
        this.grades = [studentGrades];
      } catch (err) {
        this.error = err.message || "Gagal memuat nilai siswa";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    // Load all academic data
    async loadAllAcademicData() {
      await Promise.all([
        this.loadSchedules(),
        this.loadGrades(),
        this.loadMaterials()
      ]);
    }
  },
});