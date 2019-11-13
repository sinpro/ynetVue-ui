import Routes from '../mock/routes.js';
const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: ()=>import('&/pages/common/Full.vue'),
    hidden: false,
    children:[
      {path: '/home',name: '首页',icon:"home",component: ()=>import('&/pages/Home.vue')},
      {
        path: '/components',name: '組件',icon:"yinhangka",redirect: '/components/icon',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
          {
            path: 'icon',
            name: '图标',
            icon: 'yinhangka',
            component: ()=>import('&/pages/components/Icon.vue'),
            hidden: false,
          },
          {
            path: 'tab',
            name: 'tab导航',
            icon: 'yinhangka',
            component: ()=>import('&/pages/components/Tab.vue'),
            hidden: false,
          },
          {
            path: 'table',
            name: '表格',
            icon: 'yinhangka',
            component: ()=>import('&/pages/components/Table.vue'),
            hidden: false,
          }
        ]
      }

    ],
  }


	/*{
    path: '/',
    redirect: '/home'
  },{//
      path: '/home',
      name: '首页',
      component: ()=>import('&/pages/common/Full.vue'),
      meta:{title:'首页'}
  },{//
      path: '/components/icon',
      name: '图标',
      component: ()=>import('&/pages/components/Icon.vue'),
      meta:{title:'图标'}
  },{//
      path: '/component/tab',
      name: 'tab导航',
      component: ()=>import('&/pages/components/Tab.vue'),
      meta:{title:'tab导航'}
  },{//
      path: '/component/table',
      name: '表格',
      component: ()=>import('&/pages/components/Table.vue'),
      meta:{title:'表格'}
  }*/
  
];
//const routes = Routes;
export default routes;