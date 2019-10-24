import Full from '@/components/Container/Container'
const routes = [
	{
    path: '/',
    redirect: '/home',
    component: Full
  },{//
      path: '/home',
      name: '首页',
      component: Full,
      meta:{title:'首页'}
  }
  
];
export default routes;