<template>
  <nav class="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <div class="relative">
              <div class="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
              <div class="relative bg-white/10 backdrop-blur-sm rounded-full p-2">
                <img src="https://i.pinimg.com/736x/04/e9/d3/04e9d3cf2b56b4a1c4ab6cc3bff8c0d1.jpg" class="h-10 w-10 rounded-full" alt="school logo" />
              </div>
            </div>
            <div class="ml-4">
              <span class="text-2xl font-bold tracking-wide">SDN SUKAMAJU</span>
              <p class="text-xs text-blue-100 opacity-90">Sekolah Dasar Negeri</p>
            </div>
          </div>
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <router-link
            to="/"
            class="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            active-class="bg-white/20 border-white/30"
          >
          Profil Sekolah
          </router-link>
          <router-link
            to="/news"
            class="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            active-class="bg-white/20 border-white/30"
          >
          Berita & Pengumuman
          </router-link>
          <router-link
            to="/academic"
            class="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            active-class="bg-white/20 border-white/30"
          >
          Akademik
          </router-link>
          <router-link
            to="/students"
            class="px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
            active-class="bg-white/20 border-white/30"
          >
          Siswa
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-white hover:bg-white/10 focus:outline-none transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
/* Add any component-specific styles here */
</style>