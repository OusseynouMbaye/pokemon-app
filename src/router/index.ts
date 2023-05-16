import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomeView.vue'
import PokemonDetails from '@/components/PokemonDetails.vue'
// import AboutPage from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  // { path: '/about', name: 'About', component: AboutPage },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    props: true,
    component: PokemonDetails,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
