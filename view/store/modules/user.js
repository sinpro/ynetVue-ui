import Cookies from 'js-cookie';
const user = {
  state: {
    token: Cookies.get('adminToken')?Cookies.get('adminToken'):'dou',
    roles: [],
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_Roles: (state, roles) => {
      state.roles = roles;
    }
  },
  actions: {
    login({ commit }){//登录
      console.log(commit)
    },
    logout(){//登出

    },
    changeRole({ commit }, role){//改变角色
      return new Promise(resolve => {
        commit('SET_ROLES', [role]);
        commit('SET_TOKEN', role);
        Cookies.set('adminToken', role);
        resolve();
      })
    }
  },
}
export default user;