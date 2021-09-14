import Vue                     from 'vue';
import Router                  from 'vue-router';
Vue.use(Router);
import Home from "../views/Home";
import Statistic from "../views/Statistic";

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/statistic',
			name: 'home',
			component: Statistic
		},
	]
})

export default router;
