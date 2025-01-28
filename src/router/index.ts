import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: HomeView
    },
    {
      path: '/services',
      component: ServicesView
    },
    {
      path: '/projects',
      component: ProjectsView
    },
    {
      path: '/contact',
      component: ContactView
    },

  ],
})

export default router
