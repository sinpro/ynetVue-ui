<<<<<<< HEAD
//import Full from '@/components/Container/Container';
import Full from '^/pages/common/Full';
import Routes from '../mock/routes.js';
console.log(Routes)

import HText from '@/components/text/text.vue'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/home',
  //   name: 'Home',
  //   // component:{
  //   //   render(c) {
  //   //     return c('router-view')
  //   //   }
  //   //   // Full,
  //   // },
  //   component:Full,
  //   hidden: false,
  //   children:Routes,
  // }
=======
//import Routes from '../mock/routes.js';
export const constantRoutes=[
  {path: '/login', component: ()=>import('&/pages/common/Login.vue'), hidden: false},
  {
      path: '/pages', redirect: '/pages/page404', name: 'Pages404',
      component: {
          render(c) {
              return c('router-view')
          }
          // Full,
      },
      children: [
          {path: 'page404', name: 'Page404', component: ()=>import('&/pages/common/Page404.vue'),},
          {path: 'page500', name: 'Page500', component: ()=>import('&/pages/common/Page500.vue'),},
      ]
  }
];
export const asyncRoutes = [
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
>>>>>>> 481bee5240add84b6adadfe02e00b6312079f669


	{
    path: '/',
<<<<<<< HEAD
    redirect: '/home',
    component: Full,
    "children": [
          {
          "path": "text",
          "name": "ziluyou我问 ",
          "icon": "ios-home",
          "component":HText,
      }
]
  },{//
      path: '/home',
      name: '首页',
      component: Full,
      "children": [
        {
        "path": "text",
        "name": "ziluyou我问 ",
        "icon": "ios-home",
        "component":HText,
    }],
      meta:{title:'首页'}
  },{//
      path: '/index/index1/index1_1',
      name: '首页',
      component: Full,
      meta:{title:'首页'}
  },{
    path: "/text",
    name: "测试页",
    icon: "ios-home",
    component:HText

}
=======
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
>>>>>>> 481bee5240add84b6adadfe02e00b6312079f669
  
];
//const routes = Routes;