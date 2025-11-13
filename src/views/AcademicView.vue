<script setup>
import { useAcademicStore } from "../stores/academicStore";
import { ref, onMounted, computed } from "vue";
import AOS from 'aos';
import 'aos/dist/aos.css';

const store = useAcademicStore();

// For filtering data
const selectedClass = ref("");
const selectedStudent = ref("");

// Mock data for class and student options
const classOptions = ["Kelas 1A", "Kelas 2B", "Kelas 4A"];
const studentOptions = [
  { id: "SISWA001", name: "Budi Santoso" },
  { id: "SISWA002", name: "Ani Wijaya" }
];

onMounted(() => {
  store.loadAllAcademicData();
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
});

// Computed properties for filtered data
const filteredSchedules = computed(() => {
  if (selectedClass.value) {
    return store.schedules.filter(schedule => schedule.classInfo === selectedClass.value);
  }
  return store.schedules;
});

const filteredGrades = computed(() => {
  if (selectedStudent.value) {
    return store.grades.filter(grade => grade.studentId === selectedStudent.value);
  }
  return store.grades;
});

const filteredMaterials = computed(() => {
  if (selectedClass.value) {
    return store.materials.filter(material => material.classInfo === selectedClass.value);
  }
  return store.materials;
});

// Filter functions
const filterByClass = (className) => {
  selectedClass.value = className;
  if (className) {
    store.loadScheduleByClass(className);
  } else {
    store.loadSchedules();
  }
};

const filterByStudent = (studentId) => {
  selectedStudent.value = studentId;
  if (studentId) {
    store.loadGradesByStudent(studentId);
  } else {
    store.loadGrades();
  }
};

// Reset filters
const resetFilters = () => {
  selectedClass.value = "";
  selectedStudent.value = "";
  store.loadAllAcademicData();
};

// Download material function
const downloadMaterial = (material) => {
  alert(`Mengunduh materi: ${material.materialTitle}\nURL: ${material.downloadUrl}`);
  // In a real application, this would trigger a file download
};
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="text-center mb-12" data-aos="fade-up">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent" data-aos="fade-up">Akademik</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">Informasi lengkap tentang kegiatan akademik, jadwal pelajaran, nilai siswa, dan materi pembelajaran</p>
    </div>
    
    <div v-if="store.loading && store.schedules.length === 0" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <p class="mt-2">Memuat data akademik...</p>
    </div>
    
    <div v-else-if="store.error && store.schedules.length === 0" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong class="font-bold">Error! </strong>
      <span class="block sm:inline">{{ store.error }}</span>
    </div>
    
    <div v-else>
      <!-- Filters Section -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8" data-aos="fade-up">
        <h2 class="text-xl font-bold mb-4 text-gray-800" data-aos="fade-up">Filter Data</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div data-aos="fade-right" data-aos-delay="100">
            <label class="block text-sm font-medium text-gray-700 mb-1">Filter berdasarkan Kelas</label>
            <select
              v-model="selectedClass"
              @change="filterByClass(selectedClass)"
              class="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Semua Kelas</option>
              <option v-for="className in classOptions" :key="className" :value="className">
                {{ className }}
              </option>
            </select>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <label class="block text-sm font-medium text-gray-700 mb-1">Filter berdasarkan Siswa</label>
            <select
              v-model="selectedStudent"
              @change="filterByStudent(selectedStudent)"
              class="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Semua Siswa</option>
              <option v-for="student in studentOptions" :key="student.id" :value="student.id">
                {{ student.name }}
              </option>
            </select>
          </div>

          <div class="flex items-end" data-aos="fade-left" data-aos-delay="300">
            <button
              @click="resetFilters"
              class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>
      
      <!-- Schedules Section -->
      <section class="mb-12" data-aos="fade-up">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-blue-800 pb-2" data-aos="fade-up">Jadwal Pelajaran</h2>
        </div>

        <div v-if="filteredSchedules.length === 0" class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          Tidak ada jadwal yang tersedia untuk filter yang dipilih.
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            v-for="(schedule, index) in filteredSchedules"
            :key="schedule.id"
            class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4">
              <h3 class="text-xl font-bold">{{ schedule.classInfo }} - {{ schedule.dayOfWeek }}</h3>
            </div>

            <div class="p-4">
              <div class="space-y-3">
                <div
                  v-for="(period, periodIndex) in schedule.periods"
                  :key="periodIndex"
                  class="flex items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <div class="w-24 text-sm font-medium text-gray-600">{{ period.timeSlot }}</div>
                  <div class="flex-1">
                    <div class="font-medium text-gray-900">{{ period.subjectName }}</div>
                    <div class="text-sm text-gray-500" v-if="period.teacherName !== 'Tidak ada guru'">
                      {{ period.teacherName }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Grades Section -->
      <section class="mb-12" data-aos="fade-up">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-800 pb-2" data-aos="fade-up">Nilai Siswa</h2>

        <div v-if="filteredGrades.length === 0" class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          Tidak ada nilai yang tersedia untuk filter yang dipilih.
        </div>

        <div v-else class="grid grid-cols-1 gap-6">
          <div
            v-for="(grade, index) in filteredGrades"
            :key="grade.id"
            class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          >
            <div class="bg-gradient-to-r from-green-600 to-teal-700 text-white p-4">
              <h3 class="text-xl font-bold">{{ grade.studentFullName }} ({{ grade.classInfo }})</h3>
              <p class="text-green-100">Rata-rata Nilai: <span class="font-bold">{{ grade.averageScore }}</span></p>
            </div>

            <div class="p-4">
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mata Pelajaran</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nilai</th>
                      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="subject in grade.subjects" :key="subject.subjectName">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ subject.subjectName }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ subject.scoreValue }}</td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {{ subject.gradeLetter }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Learning Materials Section -->
      <section data-aos="fade-up">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-800 pb-2" data-aos="fade-up">Materi Pembelajaran</h2>

        <div v-if="filteredMaterials.length === 0" class="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded">
          Tidak ada materi yang tersedia untuk filter yang dipilih.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(material, index) in filteredMaterials"
            :key="material.id"
            class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <div class="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white">
              <div class="flex justify-between items-start">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white">
                  {{ material.subjectName }}
                </span>
                <span class="text-xs text-white text-opacity-80">{{ material.size }}</span>
              </div>
              <h3 class="text-lg font-bold mt-2">{{ material.materialTitle }}</h3>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">{{ material.materialDescription }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ material.uploadDate }}</span>
                <button
                  @click="downloadMaterial(material)"
                  class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Unduh
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>