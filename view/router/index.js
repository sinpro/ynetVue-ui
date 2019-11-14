import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import store from '../store';
import {constantRoutes,asyncRoutes} from './routes';
const router= new Router({
	mode:'hash',
	linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes:asyncRoutes
})

const whiteList = ['/login']// 不重定向白名单
// router.beforeEach((to, from, next) => {
// 	if(store.getters.token){
// 		// console.log('有token')
// 		console.log(to.path)
// 		if (to.path === '/login') {
// 	      next({ path: '/' })
// 	    } else {

// 	    }
// 	}else{
// 		console.log('没有token')
// 		if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
// 	      next()
// 	    } else {
// 	      next('/login') // 否则全部重定向到登录页
// 	    }
// 	}
// })
//router.afterEach(() => {})
export default router;