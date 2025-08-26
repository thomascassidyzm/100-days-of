import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Lazy load pages
const HomePage = () => import('../pages/HomePage.vue')
const CoachChat = () => import('../pages/CoachChat.vue')
const ProgrammesPage = () => import('../pages/ProgrammesPage.vue')
const ProgressPage = () => import('../pages/ProgressPage.vue')
const OnboardingPage = () => import('../pages/OnboardingPage.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: '100 Days Of - Transform Your Language Learning'
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: CoachChat,
    meta: {
      title: 'Your Language Coach - 100 Days Of'
    }
  },
  {
    path: '/programmes',
    name: 'Programmes',
    component: ProgrammesPage,
    meta: {
      title: '100 Day Programmes - Choose Your Language'
    }
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressPage,
    meta: {
      title: 'Your Progress - 100 Days Of'
    }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: OnboardingPage,
    meta: {
      title: 'Get Started - 100 Days Of'
    }
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/CheckoutPage.vue'),
    meta: {
      title: 'Checkout - 100 Days Of'
    }
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../pages/SuccessPage.vue'),
    meta: {
      title: 'Welcome to Your Journey! - 100 Days Of'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

// Update page title
router.beforeEach((to, _, next) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router