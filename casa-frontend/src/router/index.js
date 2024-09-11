import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Accueil',
      component: () => import(/* webpackChunkName "Accueil" */ '@/pages/Accueil.vue'),
      meta: {
        layout: 'CasaLayout'
      }
    },
    {
      path: '/Apropos',
      name: 'Apropos',
      component: () => import(/* webpackChunkName "Apropos" */ '@/pages/Apropos.vue'),
      meta: {
        layout: 'CasaLayoutApropos'
      }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import(/* webpackChunkName "Contact" */ '@/pages/Contact.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: () => import(/* webpackChunkName "Blog" */ '@/pages/Blog.vue'),
      meta: {
        layout: 'CasaLayoutBlog'
      },
  },
  ]
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router