// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/default/Default.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('@/views/Home.vue'),
			},
		],

	},
	{
		path: '/me',
		component: () => import('@/layouts/default/Default.vue'),
		children: [
			{
				path: '',
				name: 'me',
				component: () => import('@/views/Profile.vue'),
			},
		],
	},
	{
		path: '/cart',
		component: () => import('@/layouts/default/Default.vue'),
		children: [
			{
				path: '',
				name: 'cart',
				component: () => import('@/views/Cart.vue'),
			},
		],
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
