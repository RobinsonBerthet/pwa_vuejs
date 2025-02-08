import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/pictures',
    name: 'pictures',

    component: () => import('../components/CameraVue.vue'),
  },
  {
    path: '/phone',
    name: 'phone',

    component: () => import('../components/PhoneCall.vue'),
  },
  {
    path: '/gps',
    name: 'gps',

    component: () => import('../components/PositionVue.vue'),
  },
  {
    path: '/otp',
    name: 'otp',

    component: () => import('../components/SmsOTP.vue'),
  },
  {
    path: '/chat',
    name: 'chat',

    component: () => import('../components/ChatSocket.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
