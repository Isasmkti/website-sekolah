import { createRouter, createWebHistory } from 'vue-router';
import SchoolView from '../views/SchoolView.vue';
import NewsView from '../views/NewsView.vue';
import AcademicView from '../views/AcademicView.vue';
import StudentView from '../views/StudentView.vue';

const routes = [
  {
    path: '/',
    name: 'School',
    component: SchoolView
  },
  {
    path: '/news',
    name: 'News',
    component: NewsView
  },
  {
    path: '/academic',
    name: 'Academic',
    component: AcademicView
  },
  {
    path: '/students',
    name: 'Students',
    component: StudentView
  }
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } // otomatis scroll ke atas setiap pindah halaman
  }
})

export default router;