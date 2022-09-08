import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/breaking-bad',
      name: 'breaking-bad',
      props: { category: 'breaking+bad', categoryRoute: 'bb-character' },
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/breaking-bad/:id',
      name: 'bb-character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/better-call-saul',
      name: 'better-call-saul',
      props: { category: 'better+call+saul', categoryRoute: 'bcs-character' },
      component: () => import('@/views/CharactersView.vue')
    },
    {
      path: '/better-call-saul/:id',
      name: 'bcs-character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router