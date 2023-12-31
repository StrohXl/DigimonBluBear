import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DigimonId from '../views/DigimonId.vue'
import PageDigimon from '@/views/PageDigimon.vue'
const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/digimon/:id',
      props: true,
      component: DigimonId
    },
    {
      path: '/page/:id',
      props: true,
      component: PageDigimon
    }
  ]
})

export default router
