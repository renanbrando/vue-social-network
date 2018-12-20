import Vue from 'vue'
import Router from 'vue-router'
import Firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '*',
			redirect: '/dashboard'
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('./views/Login.vue')
		},
        {
			path: '/dashboard',
			name: 'Dashboard',
			component: () => import('./views/Dashboard.vue'),
            meta: {
                requiresAuth: true
            }
		},
        {
			path: '/settings',
			name: 'Settings',
			component: () => import('./views/Settings.vue'),
            meta: {
                requiresAuth: true
            }
		}
	]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = Firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

export default router
