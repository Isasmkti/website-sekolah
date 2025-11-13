import { newsRepository } from "../repositories/newsRepository";

export const newsService = {
  async fetchAllNews() {
    try {
      const news = await newsRepository.getNews();
      
      // Format the news data
      return news.map(item => ({
        ...item,
        formattedDate: new Date(item.date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        categoryLabel: item.category,
        isFeatured: item.featured,
        excerpt: item.content.length > 150 ? item.content.substring(0, 150) + '...' : item.content
      }));
    } catch (err) {
      console.error("Error fetching news:", err);
      throw new Error("Gagal memuat berita dan pengumuman");
    }
  },

  async fetchNewsById(id) {
    try {
      const newsItem = await newsRepository.getNewsById(id);
      
      if (!newsItem) {
        throw new Error("Berita tidak ditemukan");
      }
      
      // Format the news item
      return {
        ...newsItem,
        formattedDate: new Date(newsItem.date).toLocaleDateString('id-ID', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        categoryLabel: newsItem.category
      };
    } catch (err) {
      console.error("Error fetching news by ID:", err);
      throw new Error("Gagal memuat detail berita");
    }
  },

  async fetchFeaturedNews() {
    try {
      const news = await newsRepository.getFeaturedNews();
      
      // Format the featured news
      return news.map(item => ({
        ...item,
        formattedDate: new Date(item.date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'short'
        }),
        categoryLabel: item.category,
        excerpt: item.content.length > 100 ? item.content.substring(0, 100) + '...' : item.content
      }));
    } catch (err) {
      console.error("Error fetching featured news:", err);
      throw new Error("Gagal memuat berita utama");
    }
  }
};