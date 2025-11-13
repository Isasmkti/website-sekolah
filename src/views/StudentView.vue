<template>
    <div class="p-6 max-w-7xl mx-auto">
        <div class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent p-4">Daftar Siswa</h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">Data lengkap siswa, prestasi, dan informasi akademik</p>
        </div>

        <!-- Loading State -->
        <div v-if="studentsStore.loading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            <p class="mt-2">Memuat data siswa...</p>
        </div>

        <!-- Error State -->
        <div v-if="studentsStore.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
            <strong class="font-bold">Error! </strong>
            <span class="block sm:inline">{{ studentsStore.error }}</span>
        </div>

        <!-- Students Grid -->
        <div v-if="!studentsStore.loading && !studentsStore.error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                v-for="student in studentsStore.students"
                :key="student.id"
                class="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                @click="viewStudentDetails(student)"
            >
                <!-- Student Avatar -->
                <div class="text-center mb-4">
                    <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-1">{{ student.fullName }}</h3>
                    <p class="text-blue-600 font-semibold">{{ student.classInfo }}</p>
                </div>

                <!-- Student Info -->
                <div class="space-y-3">
                    <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div class="flex-1">
                            <p class="text-xs font-semibold text-gray-600">NIS</p>
                            <p class="text-gray-900 text-sm">{{ student.nis }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div class="flex-1">
                            <p class="text-xs font-semibold text-gray-600">Rata-rata Nilai</p>
                            <p class="text-gray-900 text-sm font-bold">{{ student.grades.average }}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <div class="flex-1">
                            <p class="text-xs font-semibold text-gray-600">Kehadiran</p>
                            <p class="text-gray-900 text-sm">{{ student.attendance.present }}%</p>
                        </div>
                    </div>
                </div>

                <!-- View Details Button -->
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-sm font-semibold">
                        Lihat Detail
                    </button>
                </div>
            </div>
        </div>

        <!-- Student Detail Modal -->
        <div v-if="selectedStudent" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" @click="closeModal">
            <div class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <div class="p-8">
                    <!-- Modal Header -->
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-3xl font-bold text-gray-900">Detail Siswa</h2>
                        <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <!-- Student Profile Card -->
                        <div class="lg:col-span-1">
                            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 border border-gray-100">
                                <div class="text-center mb-6">
                                    <div class="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                    </div>
                                    <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedStudent.fullName }}</h3>
                                    <p class="text-blue-600 font-semibold">{{ selectedStudent.classInfo }}</p>
                                </div>

                                <div class="space-y-4">
                                    <div class="flex items-center space-x-3">
                                        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <div>
                                            <p class="text-sm font-semibold text-gray-600">NIS</p>
                                            <p class="text-gray-900">{{ selectedStudent.nis }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div>
                                            <p class="text-sm font-semibold text-gray-600">Tanggal Lahir</p>
                                            <p class="text-gray-900">{{ formatDate(selectedStudent.birthDate) }}</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <div>
                                            <p class="text-sm font-semibold text-gray-600">Alamat</p>
                                            <p class="text-gray-900">{{ selectedStudent.address }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Academic Information -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Grades Overview -->
                            <div class="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                                <h4 class="text-xl font-bold text-gray-900 mb-4">Nilai Akademik</h4>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 border border-green-200">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-green-800 font-semibold">Rata-rata</p>
                                                <p class="text-2xl font-bold text-green-900">{{ selectedStudent.grades.average }}</p>
                                            </div>
                                            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-blue-800 font-semibold">Peringkat Kelas</p>
                                                <p class="text-2xl font-bold text-blue-900">{{ selectedStudent.grades.rank }}</p>
                                            </div>
                                            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Achievements -->
                            <div class="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                                <h4 class="text-xl font-bold text-gray-900 mb-4">Prestasi</h4>
                                <div class="space-y-3">
                                    <div
                                        v-for="achievement in selectedStudent.achievements"
                                        :key="achievement.title"
                                        class="flex items-center space-x-4 p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200"
                                    >
                                        <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-semibold text-gray-900">{{ achievement.title }}</p>
                                            <p class="text-sm text-gray-600">{{ achievement.level }} - {{ achievement.year }}</p>
                                        </div>
                                    </div>
                                    <div v-if="selectedStudent.achievements.length === 0" class="text-center text-gray-500 py-4">
                                        Belum ada prestasi tercatat
                                    </div>
                                </div>
                            </div>

                            <!-- Attendance -->
                            <div class="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                                <h4 class="text-xl font-bold text-gray-900 mb-4">Kehadiran</h4>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span class="text-white font-bold text-sm">{{ selectedStudent.attendance.present }}%</span>
                                        </div>
                                        <p class="text-sm font-semibold text-gray-600">Hadir</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span class="text-white font-bold text-sm">{{ selectedStudent.attendance.excused }}%</span>
                                        </div>
                                        <p class="text-sm font-semibold text-gray-600">Izin</p>
                                    </div>
                                    <div class="text-center">
                                        <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <span class="text-white font-bold text-sm">{{ selectedStudent.attendance.sick }}%</span>
                                        </div>
                                        <p class="text-sm font-semibold text-gray-600">Sakit</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStudentsStore } from '../stores/studentStore';
import { onMounted, ref } from "vue";

const studentsStore = useStudentsStore();
const selectedStudent = ref(null);

const viewStudentDetails = (student) => {
  selectedStudent.value = student;
};

const closeModal = () => {
  selectedStudent.value = null;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

onMounted(() => {
  studentsStore.loadStudents();
});
</script>

<style scoped>
</style>
