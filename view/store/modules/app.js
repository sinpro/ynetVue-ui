import { asyncRoutes, constantRoutes } from '&/router/routes';

// console.log(asyncRoutes)

function filterAsyncRouter(asyncRoutes) {
  const accessedRouters = asyncRoutes.filter(route => {
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    // return true
  })
  return accessedRouters
}

function getNowRouter(asyncRoutes, to) {
	console.log(asyncRoutes)
  console.log(to)
  return asyncRoutes.some(route => {
    if (to.path.indexOf(route.path) !== -1) {
      return true;
    } else if (route.children && route.children.length) { //如果有孩子就遍历孩子
      return getNowRouter(route.children, to)
    }
  })
}
const app = {
  state: {
    routers: constantRoutes,
    addRouters: [],
    siderbar_routers: [],
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRoutes.concat(routers);
      // state.routers.forEach(function(e){
      //     if(e.name==="首页"){
      //     state.siderbar_routers=e;
      //     }
      // })
    },
    SET_NOW_ROUTERS: (state, to) => {
      // 递归访问 accessedRouters，找到包含to 的那个路由对象，设置给siderbar_routers
      //console.log(state.addRouters)
      state.addRouters.forEach(e => {
        if (e.children && e.children.length) {
          if (getNowRouter(e.children, to) === true)
            state.siderbar_routers = e;
        }
      })
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        let accessedRouters
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = asyncRoutes
        } else {
          accessedRouters = filterAsyncRouter(asyncRoutes, roles)
        }
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    },
    getNowRoutes({ commit }, data) {
      console.log(data)
      return new Promise(resolve => {
        //data => to
        commit('SET_NOW_ROUTERS', data);
        resolve();
      })
    },
  },
}
export default app;
