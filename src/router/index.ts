import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import AboutPage from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
