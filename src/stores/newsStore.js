import { defineStore } from "pinia";
import { newsService } from "../services/newsService";

export const useNewsStore = defineStore("news", {
  state: () => ({
    allNews: [],
    featuredNews: [],
    selectedNews: null,
    loading: false,
    error: null,
  }),

  actions: {
    async loadAllNews() {
      this.loading = true;
      this.error = null;
      try {
        this.allNews = await newsService.fetchAllNews();
      } catch (err) {
        this.error = err.message || "Gagal memuat berita";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadFeaturedNews() {
      this.loading = true;
      this.error = null;
      try {
        this.featuredNews = await newsService.fetchFeaturedNews();
      } catch (err) {
        this.error = err.message || "Gagal memuat berita utama";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadNewsById(id) {
      this.loading = true;
      this.error = null;
      this.selectedNews = null;
      try {
        this.selectedNews = await newsService.fetchNewsById(id);
      } catch (err) {
        this.error = err.message || "Gagal memuat detail berita";
        console.error("Store error:", err);
      } finally {
        this.loading = false;
      }
    },

    // Load both all news and featured news
    async loadNewsData() {
      await Promise.all([
        this.loadAllNews(),
        this.loadFeaturedNews()
      ]);
    }
  },
});