import Vue				from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from "../views/Home";
import Statistic from "../views/Statistic";
import Board from "../views/Board";
import Chats from "../views/Chats";
import List from "../views/List";
import NotFound from "../views/NotFound";

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
			name: 'statistic',
			component: Statistic
		},
		{
			path: '/board',
			name: 'board',
			component: Board
		},
		{
			path: '/chats',
			name: 'chats',
			component: Chats
		},
		{
			path: '/list',
			name: 'list',
			component: List
		},
		{
			path: '/:catchAll(.*)',
			name: 'NotFound',
			component: NotFound
		}
	]

})

export default router;
