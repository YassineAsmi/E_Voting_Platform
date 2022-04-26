import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PollView from '../views/pollsView.vue'
import TeamCompnent from '../components/TeamComponent.vue'
import AddPoll from '../components/AddPoll.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    
  },
  {
    path: '/polls',
    name: 'polls',
    component: PollView
  },
  {
    path: '/team',
    name: 'teams',
    component: TeamCompnent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/addPoll',
    name: 'addpoll',
    component: AddPoll
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
