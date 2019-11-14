const getters = {
  token: state => state.user.token,
  permission_routers: state => state.app.routers,
  addRouters: state => state.app.addRouters,
  siderbar_routers: state => state.app.siderbar_routers,
};
export default getters;
