import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

const Home = import('../components/Home.vue')

const routes = [{
	path: '/',
	name: 'home',
	component: Home
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

export default router
