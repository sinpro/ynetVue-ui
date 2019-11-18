const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Home',
    component: ()=>import('view/pages/common/Full.vue'),
    hidden: false,
    children:[
      {path: '/home',name: '主页',icon:"home",component: ()=>import('view/pages/Home')},
      {
        path: '/components',name: '组件',icon:"duanxin",redirect: '/components/icon',
          component: {
              render(c) {
                  return c('router-view')
              }
          },
          children: [
              {
                  path: 'icon',
                  name: 'Icon',
                  icon: 'tupian',
                  component: ()=>import('view/pages/components/Icon.vue'),
                  hidden: false,
              },
              {
                  path: 'grid',
                  name: 'Grid',
                  icon: 'tupian',
                  component: ()=>import('view/pages/components/Grid.vue'),
                  hidden: false,
              },{
                  path: 'tab',
                  name: 'tab',
                  icon: 'shezhi',
                  component: ()=>import('view/pages/components/Tab.vue'),
                  hidden: false,
              },{
                  path: 'table',
                  name: 'Table',
                  icon: 'gongneng',
                  component: ()=>import('view/pages/components/Table.vue'),
                  hidden: false,
              },{
                  path: 'button',
                  name: 'button',
                  icon: 'weixian',
                  component: ()=>import('view/pages/components/Button.vue'),
                  hidden: false,
              },
          ]
      }
    ]
  },
];
export default routes;