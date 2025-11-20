<script setup>
import { useSchoolStore } from "../stores/schoolStore";
import { onMounted } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

const store = useSchoolStore();

onMounted(() => {
  store.loadAllSchoolInfo();
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
});
</script>

<template>
  <!-- HERO SECTION ELEVATED -->
  <section class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white shadow-2xl mb-20 p-6">
    <div class="absolute inset-0 opacity-30 bg-[url('https://i.pinimg.com/1200x/ef/1a/42/ef1a422e3c1397996ae226eca6e939ac.jpg')] bg-cover bg-center"></div>

    <div class="relative z-10 flex flex-col justify-center items-center min-h-screen py-20">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <!-- Info Utama Sekolah -->
        <div class="space-y-4">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-2xl leading-tight tracking-tight" data-aos="fade-up">
            {{ store.profile?.name || "Nama Sekolah" }}
          </h1>
          <p class="text-xl md:text-2xl opacity-95 font-light" data-aos="fade-up" data-aos-delay="200">
            Berdiri sejak {{ store.profile?.establishedYear || "-" }}
          </p>
          <p class="text-lg md:text-xl opacity-95 leading-relaxed max-w-2xl mx-auto font-light" data-aos="fade-up" data-aos-delay="400">
            {{ store.profile?.description || "Deskripsi sekolah akan tampil di sini." }}
          </p>
        </div>

        <!-- Kontak Info Card -->
        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="600">
          <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">Informasi Kontak</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div class="flex items-center space-x-3" data-aos="fade-right" data-aos-delay="700">
              <svg class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p class="font-semibold text-sm">Telepon</p>
                <p class="text-sm opacity-90">{{ store.profile?.contactInfo?.phone || "-" }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-3" data-aos="fade-up" data-aos-delay="800">
              <svg class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="font-semibold text-sm">Email</p>
                <p class="text-sm opacity-90">{{ store.profile?.contactInfo?.email || "-" }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-3" data-aos="fade-left" data-aos-delay="900">
              <svg class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p class="font-semibold text-sm">Alamat</p>
                <p class="text-sm opacity-90">{{ store.profile?.fullAddress || "-" }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="w-full max-w-7xl mx-auto p-6">

    <!-- GURU SECTION -->
    <section class="mb-20" data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent p-2" data-aos="fade-up">Tenaga Pendidik</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Para pendidik profesional yang berdedikasi untuk memberikan pendidikan berkualitas tinggi</p>
      </div>

      <div v-if="store.loading && store.teachers.length === 0" class="text-center py-16">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p class="mt-4 text-gray-600">Memuat daftar guru...</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(teacher, index) in store.teachers"
          :key="teacher.id"
          class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative">
            <img :src="teacher.photoUrl" class="w-full h-64 object-cover bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ teacher.fullName }}</h3>
            <p class="text-blue-600 font-semibold mb-4 text-lg">{{ teacher.position }}</p>

            <div class="space-y-3 text-sm text-gray-700">
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p><span class="font-semibold">Mata Pelajaran:</span> {{ teacher.specialty }}</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <p><span class="font-semibold">Pendidikan:</span> {{ teacher.qualification }}</p>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p><span class="font-semibold">Pengalaman:</span> {{ teacher.yearsOfExperience }} tahun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FASILITAS SECTION -->
    <section data-aos="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent" data-aos="fade-up">Fasilitas</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Fasilitas modern yang mendukung proses pembelajaran yang optimal</p>
      </div>

      <div v-if="store.loading && store.facilities.length === 0" class="text-center py-16">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <p class="mt-4 text-gray-600">Memuat daftar fasilitas...</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(facility, index) in store.facilities"
          :key="facility.id"
          class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="relative">
            <img :src="facility.imageUrl" class="w-full h-64 object-cover bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
              {{ facility.capacityInfo }}
            </div>
          </div>

          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ facility.title }}</h3>
            <p class="text-gray-700 leading-relaxed text-lg">{{ facility.details }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
</style>
