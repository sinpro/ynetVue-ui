<template>
  <div class="container">
    <ynet-header :logoPic="logoPic"></ynet-header>
    <div class="container-body">
      <ynet-silder :routes="routes"></ynet-silder>
      <main class="container-main">
        <ynet-breadnav :list="list"/></ynet-breadnav>
        <div class="main">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <ynet-footer><a href="javascript:;">豆</a> © 2018 creativeLabs.</ynet-footer>
  </div>
</template>
<script>
export default {
  name: 'Full',
  created(){
    this.routes = this.$router.options.routes[0].children;
  },
  data () {
    return {
      logoPic:require('../../../view/assets/images/yent-logo.png'),
      routes:[]
    }

  },
  computed: {
    list () { 
      return this.$route.matched
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
.container{
  display: flex;
    flex-direction: column;
    min-height: 100vh;
    .container-body{
      margin-top: 80px;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      overflow-x: hidden;
        .container-main{
            padding-bottom: 10px;
            margin-left: 180px;
            background-color: #eff0f4;
            flex: 1;
            min-width: 0;
            transition: margin-left .25s, margin-right .25s, width .25s, flex .25s;
            .main{padding: 1rem;}
        }
    } 
}
.sidebar-minimized {
    .container{
        .container-body{
            .container-main{
                margin-left: 50px;
            }
        } 
    }
} 
</style>