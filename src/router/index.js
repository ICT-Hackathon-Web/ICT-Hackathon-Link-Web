import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/components/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import('@/components/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/SignupPage.vue'),
  },
  {
    path: '/intro',
    name: 'introCollege',
    component: () => import('@/components/IntroCollege.vue'),
  },
  {
    path: '/announcement',
    name: 'announcement',
    component: () => import('@/components/Announcement.vue'),
  },
  {
    path: '/announce_detail',
    name: 'announce_detail',
    component: () => import('@/components/Announce_detail.vue'),
  },
  {
    path: '/club',
    name: 'club',
    component: () => import('@/components/Information/Club.vue'),
  },
  // {
  //   path: '/lostArticle',
  //   name: 'lostArticle',
  //   component: () => import('@/components/Information/LostArticle.vue'),
  // },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('@/components/Information/Schedule.vue'),
  },
  // {
  //   path: '/computer', //컴퓨터학부
  //   name: 'computer',
  //   component: () => import('@/components/IntroDepartments/Computer.vue'),
  // },
  // {
  //   path: '/dataScience', //데이터과학부
  //   name: 'dataScience',
  //   component: () => import('@/components/IntroDepartments/DataScience.vue'),
  // },
  {
    path: '/infoCommunication', //정보통신학부
    name: 'infoCommunication',
    component: () =>
      import('@/components/IntroDepartments/InfoCommunication.vue'),
  },
  // {
  //   path: '/computerSW', //컴퓨터SW
  //   name: 'computerSW',
  //   component: () =>
  //     import('@/components/IntroDepartments/Computer/ComputerSW.vue'),
  // },
  // {
  //   path: '/mediaSW', //미디어SW
  //   name: 'mediaSW',
  //   component: () =>
  //     import('@/components/IntroDepartments/Computer/MediaSW.vue'),
  // },
  // {
  //   path: '/infoCommunicationCollege', //정보통신학과
  //   name: 'infoCommunicationCollege',
  //   component: () =>
  //     import(
  //       '@/components/IntroDepartments/InfoCommunication/InfoCommunicationCollege.vue'
  //     ),
  // },
  // {
  //   path: '/infoSecurity', //정보보호학과
  //   name: 'infoSecurity',
  //   component: () =>
  //     import(
  //       '@/components/IntroDepartments/InfoCommunication/InfoSecurity.vue'
  //     ),
  // {
  //   path: '/cloud', //클라우드융복합
  //   name: 'cloud',
  //   component: () =>
  //     import(
  //       '@/components/IntroDepartments/InfoCommunication/InfoSecurity.vue'
  //     ),
  // },
  // {
  //   path: '/privacyPolicy',
  //   name: 'privacyPolicy',
  //   component: () => import('@/components/PrivacyPolicy.vue'),
  // },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/components/SearchBar.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
