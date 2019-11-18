import Cookies from 'js-cookie';
const user = {
  state: {
    token: Cookies.get('adminToken')?Cookies.get('adminToken'):'dou',
    roles: ['admin'],
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
    logIn({ commit }){//登录
      
    },
    logOut({ commit }){//登出
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        Cookies.remove('adminToken');
        alert("has logout");
        resolve();
      });
    },
    getInfo({ commit, state }) {//拉取用户信息
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data;
          console.log(data)
          commit('SET_ROLES', data.role);
          resolve(response);
        }).catch(error => {
          reject(error);
        });
      });
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