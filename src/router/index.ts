import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesView.vue')
    },
    {
      path: '/subjects',
      name: 'subjects',
      component:  () => import('../views/SubjectsView.vue')
    },
  ]
})

export default router
