import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SpectaclesWomen from '../views/SpectaclesWomen.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/spectacles-women',
  },
  {
    path: '/spectacles-women',
    name: 'home',
    component: SpectaclesWomen,
  },
  {
    path: '/spectacles-men',
    name: 'spectacles-men',
    component: () => import(/* webpackChunkName: "SpectaclesMen" */ '../views/SpectaclesMen.vue'),
  },
  {
    path: '/sunglasses',
    name: 'sunglasses',
    component: () => import(/* webpackChunkName: "SunGlasses" */ '../views/SunGlasses.vue'),
  },
  {
    path: '/home-try-on',
    name: 'home-try-on',
    component: () => import(/* webpackChunkName: "HomeTryOn" */ '../views/HomeTryOn.vue'),
  },
  {
    path: '/pair-for-pair',
    name: 'pair-for-pair',
    component: () => import(/* webpackChunkName: "PairForPair" */ '../views/PairForPair.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
