import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DigimonId from '../views/DigimonId.vue'
import PageDigimon from '@/views/PageDigimon.vue'
import LevelDigimon from '@/views/LevelDigimon.vue'
import AttributeDigimon from '@/views/AttributeDigimon.vue'
import SearchDigimon from '@/views/SearchDigimon.vue'
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
      path: '/search/:id',
      props:true,
      component: SearchDigimon
    },
    {
      path: '/level/:id',
      props: true,
      component: LevelDigimon
    },
    {
      path: '/level/:id/:page',
      props: true,
      component: LevelDigimon
    },
    {
      path: '/attribute/:id',
      props: true,
      component: AttributeDigimon
    },
    {
      path: '/attribute/:id/:page',
      props: true,
      component: AttributeDigimon
    },
    {
      path: '/page/:id',
      props: true,
      component: PageDigimon
    }
  ]
})

export default router
