<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-auto relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="footer-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-pattern)" />
      </svg>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="md:col-span-2">
          <div class="flex items-center mb-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-full p-3 mr-4">
              <img src="https://i.pinimg.com/736x/04/e9/d3/04e9d3cf2b56b4a1c4ab6cc3bff8c0d1.jpg" class="h-10 w-10 rounded-full" alt="school logo" />
            </div>
            <div>
              <h3 class="text-2xl font-bold">SDN SUKAMAJU</h3>
              <p class="text-blue-200 text-sm">Sekolah Dasar Negeri</p>
            </div>
          </div>

          <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
            Memberikan pendidikan terbaik untuk masa depan yang lebih cerah dengan fasilitas modern dan tenaga pengajar profesional.
          </p>

          <div class="flex space-x-4">
            <a class="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" class="h-5 w-5" alt="twitter" />
            </a>
            <a class="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" class="h-5 w-5" alt="facebook" />
            </a>
            <a class="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" class="h-5 w-5" alt="linkedin" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-6 relative">
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tautan Cepat</span>
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </h3>
          <ul class="space-y-3">
            <li><router-link to="/" class="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Profil Sekolah</router-link></li>
            <li><router-link to="/news" class="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Berita & Pengumuman</router-link></li>
            <li><router-link to="/academic" class="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Akademik</router-link></li>
            <li><router-link to="/student" class="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block">Informasi Siswa</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-6 relative">
            <span class="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Kontak</span>
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
          </h3>
          <ul class="space-y-4">
            <li class="flex items-center space-x-3">
              <div class="bg-white/10 backdrop-blur-sm rounded-full p-2 mt-0.5">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" class="h-4 w-4" alt="email" />
              </div>
              <a href="#" class="text-gray-300 text-sm">info@sdnsukamaju.sch.id</a>
            </li>

            <li class="flex items-center space-x-3">
              <div class="bg-white/10 backdrop-blur-sm rounded-full p-2 mt-0.5">
                <img src="https://cdn-icons-png.flaticon.com/128/14047/14047965.png" class="h-4 w-4" alt="phone" />
              </div>
              <p class="text-gray-300 text-sm">(021) 1234567</p>
            </li>

            <li class="flex items-center space-x-3">
              <div class="bg-white/10 backdrop-blur-sm rounded-full p-2 mt-0.5">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" class="h-4 w-4" alt="location" />
              </div>
              <div>
                <p class="text-gray-300 text-sm">Jl. Merdeka No. 123</p>
                <p class="text-gray-300 text-sm">Jakarta</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700/50 mt-12 pt-8 text-center">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">&copy; 2024 SDN Sukamaju. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">Support</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
