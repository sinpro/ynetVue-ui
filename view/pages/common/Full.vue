<template>
  <!-- <ynet-container></ynet-container> -->
  <div class="container">
    <ynet-header :logoPic="logoPic"></ynet-header>
    <div class="container-body">
      <ynet-silder :routes='routes'></ynet-silder>
      <main class="container-main">
        <ynet-breadnav :list="list"/></ynet-breadnav>
        <div class="main">
          <!-- 111111111111卡发货方第三方就给大家电视剧给大家郭德纲打开嘎多健康管家公积金卡高科技的号哈拉海公开噶好了旮旯哈哈哈个啊哈拉黑可好看阿基发电话考虑到发货快快来划分刚回来的发了哈哈发来看看喝咖啡了卡两个卡号发客户可开发多看哈发货的客户发的卡按返回克劳福德哈哈富滇哈就爱回家哈好浪费就厉害了哈哈 -->
          <router-view></router-view>
        </div>
      </main>
    </div>
    <ynet-footer><a href="javascript:;">豆</a> © 2018 creativeLabs.</ynet-footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Routes from '../../../view/mock/routes.js';
//import Routes from '../../../view/router/routes.js';
export default {
  name: 'Full',
  created(){
    console.log(this.siderbar_routers)
    // console.log(Routes)
    // this.routes=Routes;
  },
  data () {
    return {
      logoPic:require('../../../view/assets/images/banli.png'),
      routes:[]
    }

  },
  computed: {
    list () { 
      return this.$route.matched
    },
    ...mapGetters([
      'siderbar_routers'
    ])
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