<script setup>
import { useNewsStore } from "../stores/newsStore";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import AOS from 'aos';
import 'aos/dist/aos.css';

const store = useNewsStore();
const router = useRouter();

// For displaying news detail
const showDetail = ref(false);
const selectedNewsId = ref(null);

onMounted(() => {
  store.loadNewsData();
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
});

// Computed properties for organizing news
const featuredNews = computed(() => store.featuredNews);
const regularNews = computed(() => {
  return store.allNews.filter(news => !news.isFeatured);
});

const viewNewsDetail = (id) => {
  selectedNewsId.value = id;
  store.loadNewsById(id);
  showDetail.value = true;
};

const goBack = () => {
  showDetail.value = false;
  selectedNewsId.value = null;
};

const getCategoryClass = (category) => {
  switch (category) {
    case 'Berita':
      return 'bg-blue-100 text-blue-800';
    case 'Pengumuman':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- News Detail View -->
    <div v-if="showDetail && store.selectedNews" class="mb-8">
      <button
        @click="goBack"
        class="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-200"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Kembali ke daftar berita
      </button>

      <div v-if="store.loading && !store.selectedNews" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        <p class="mt-4 text-gray-600">Memuat detail berita...</p>
      </div>

      <div v-else-if="store.error && !store.selectedNews" class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6" role="alert">
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <strong class="font-semibold">Error! </strong>
          <span class="block sm:inline ml-1">{{ store.error }}</span>
        </div>
      </div>

      <div v-else class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <!-- News Header with Image Placeholder -->
        <div class="relative">
          <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 h-64 flex items-center justify-center">
            <div class="text-center text-white">
              <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <p class="text-blue-100 text-sm">Gambar Berita</p>
            </div>
          </div>
          <!-- Category and Date Overlay -->
          <div class="absolute top-6 left-6 right-6 flex justify-between items-start">
            <span :class="['px-4 py-2 rounded-full text-sm font-semibold shadow-lg', getCategoryClass(store.selectedNews.categoryLabel)]">
              {{ store.selectedNews.categoryLabel }}
            </span>
            <span class="bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              {{ store.selectedNews.formattedDate }}
            </span>
          </div>
        </div>

        <!-- News Content -->
        <div class="p-8">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div>
              <p class="text-gray-600 text-sm">Penulis</p>
              <p class="text-gray-900 font-semibold">{{ store.selectedNews.author }}</p>
            </div>
          </div>

          <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">{{ store.selectedNews.title }}</h1>

          <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed text-lg mb-6">{{ store.selectedNews.content }}</p>
          </div>

          <!-- Share and Actions -->
          <div class="border-t border-gray-200 pt-6 mt-8">
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-4">
                <button class="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                  </svg>
                  Bagikan
                </button>
                <button class="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  Suka
                </button>
              </div>
              <div class="text-sm text-gray-500">
                Dibaca {{ Math.floor(Math.random() * 500) + 100 }} kali
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- News List View -->
    <div v-else>
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent" data-aos="fade-up">
          Berita & Pengumuman
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Informasi terkini tentang kegiatan sekolah, pengumuman penting, dan berita menarik dari komunitas SDN Sukamaju
        </p>
      </div>

      <div v-if="store.loading && store.allNews.length === 0" class="text-center py-16">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p class="mt-6 text-gray-600 text-lg">Memuat berita dan pengumuman...</p>
      </div>

      <div v-else-if="store.error && store.allNews.length === 0" class="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8" role="alert">
        <div class="flex items-center">
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <strong class="font-semibold">Error! </strong>
          <span class="block sm:inline ml-1">{{ store.error }}</span>
        </div>
      </div>

      <div v-else>
        <!-- Featured News Section -->
        <section v-if="featuredNews.length > 0" class="mb-16" data-aos="fade-up">
          <div class="flex items-center mb-8" data-aos="fade-up">
            <div class="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold text-gray-800">Berita Utama</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              v-for="(news, index) in featuredNews"
              :key="news.id"
              @click="viewNewsDetail(news.id)"
              class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              :data-aos-delay="index * 200"
            >
              <!-- Featured Image Placeholder -->
              <div class="relative h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                <div class="text-center text-white">
                  <svg class="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                  <p class="text-sm opacity-90">Gambar Berita</p>
                </div>
                <!-- Category Badge -->
                <div class="absolute top-4 left-4">
                  <span :class="['px-3 py-1 rounded-full text-xs font-bold shadow-lg', getCategoryClass(news.categoryLabel)]">
                    {{ news.categoryLabel }}
                  </span>
                </div>
              </div>

              <div class="p-6">
                <div class="flex justify-between items-start mb-4">
                  <span class="text-gray-500 text-sm font-medium">{{ news.formattedDate }}</span>
                  <span class="text-gray-400 text-xs">Oleh {{ news.author }}</span>
                </div>

                <h3 class="text-2xl font-bold mb-3 text-gray-900 leading-tight hover:text-blue-600 transition-colors">{{ news.title }}</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">{{ news.excerpt }}</p>

                <div class="flex items-center justify-between">
                  <div class="flex items-center text-blue-600 font-semibold">
                    <span>Baca selengkapnya</span>
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                  <div class="flex items-center text-gray-400 text-sm">
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ Math.floor(Math.random() * 300) + 50 }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- All News Section -->
        <section data-aos="fade-up">
          <div class="flex items-center mb-8" data-aos="fade-up">
            <div class="w-1 h-12 bg-gradient-to-b from-green-600 to-blue-600 rounded-full mr-4"></div>
            <h2 class="text-3xl font-bold text-gray-800">Semua Berita & Pengumuman</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(news, index) in regularNews"
              :key="news.id"
              @click="viewNewsDetail(news.id)"
              class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            >
              <div class="flex justify-between items-start mb-4">
                <span :class="['px-3 py-1 rounded-full text-xs font-semibold', getCategoryClass(news.categoryLabel)]">
                  {{ news.categoryLabel }}
                </span>
                <span class="text-gray-500 text-xs">{{ news.formattedDate }}</span>
              </div>

              <h3 class="text-xl font-bold mb-3 text-gray-900 leading-tight hover:text-blue-600 transition-colors line-clamp-2">{{ news.title }}</h3>
              <p class="text-gray-600 mb-4 line-clamp-3">{{ news.excerpt }}</p>

              <div class="flex items-center justify-between mt-auto">
                <div class="flex items-center text-blue-600 font-semibold text-sm">
                  <span>Baca selengkapnya</span>
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
                <div class="text-xs text-gray-400">
                  Oleh {{ news.author }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>