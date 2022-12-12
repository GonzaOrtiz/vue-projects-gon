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
      path: '/quizes',
      name: 'quizes',
      component:  () => import('../views/Quizes/QuizesIndex.vue')
    },
    {
      path: '/quizes/:id',
      name: 'quizes-detail',
      component:  () => import('../views/Quizes/QuizesDetail.vue')
    },
  ]
})

export default router
