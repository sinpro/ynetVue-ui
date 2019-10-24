import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import routes from './routes';
const router= new Router({
	mode:'hash',
	linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes
})
//router.beforeEach((to, from, next) => {})
export default router;