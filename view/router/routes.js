//import Full from '@/components/Container/Container';
import Full from '^/pages/common/Full';
import Routes from '../mock/routes.js';
console.log(Routes)
const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    // component:{
    //   render(c) {
    //     return c('router-view')
    //   }
    //   Full,
    // },
    component:Full,
    hidden: false,
    children:Routes,
  }


	/*{
    path: '/',
    redirect: '/home',
    component: Full
  },{//
      path: '/home',
      name: '首页',
      component: Full,
      meta:{title:'首页'}
  },{//
      path: '/text',
      name: '首页',
      component: Full,
      meta:{title:'首页'}
  },{//
      path: '/index/index1/index1_1',
      name: '首页',
      component: Full,
      meta:{title:'首页'}
  }*/
  
];
//const routes = Routes;
export default routes;