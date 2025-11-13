import { defineStore } from "pinia";
import { schoolService } from "../services/schoolService";

export const useSchoolStore = defineStore("school", {
  state: () => ({
    profile: null,
    teachers: [],
    facilities: [],
    loading: false,
    error: null,
  }),

  actions: {
    async loadSchoolProfile() {
      this.loading = true;
      this.error = null; 
      try { 
        this.profile = await schoolService.fetchSchoolProfile();
      } catch (err) {
        this.error = err.message || "Gagal memuat profil sekolah";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadTeachers() {
      this.loading = true;
      this.error = null;
      try {
        this.teachers = await schoolService.fetchTeachers();
      } catch (err) {
        this.error = err.message || "Gagal memuat daftar guru";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadFacilities() {
      this.loading = true;
      this.error = null;
      try {
        this.facilities = await schoolService.fetchFacilities();
      } catch (err) {
        this.error = err.message || "Gagal memuat daftar fasilitas";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    // Load all school information
    async loadAllSchoolInfo() {
      this.loading = true;
      this.error = null;
      try {
        await Promise.all([
          this.loadSchoolProfile(),
          this.loadTeachers(),
          this.loadFacilities()
        ]);
      } catch (err) {
        this.error = err.message || "Gagal memuat informasi sekolah";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    }
  },
});