<template>

<div>
 





  <div class="ynet-container">
   
    <ynet-header :logoPic="logoPic"></ynet-header>
    <div class="ynet-container-body">
      <ynet-silder :routes='routes'></ynet-silder>
      <main class="ynet-container-main">
        <ynet-breadnav :list="list"/></ynet-breadnav>
        <div class="main">
          <router-view></router-view> 
          <!-- 111111111111卡发货方第三方就给大家电视剧给大家郭德纲打开嘎多健康管家公积金卡高科技的号哈拉海公开噶好了旮旯哈哈哈个啊哈拉黑可好看阿基发电话考虑到发货快快来划分刚回来的发了哈哈发来看看喝咖啡了卡两个卡号发客户可开发多看哈发货的客户发的卡按返回克劳福德哈哈富滇哈就爱回家哈好浪费就厉害了哈哈 -->
         
        </div>
      </main>
    </div>

    <ynet-footer><a href="javascript:;">豆</a> © 2018 creativeLabs.</ynet-footer>
    
  </div>

</div>

</template>

<script>
import Routes from '../../../view/mock/routes.js';
export default {
  name: 'Container',
  display: 'Container内容',
  created(){
    console.log(this.$route)
    this.routes=Routes;
  },
  data () {
    return {
      preCls: 'ynet-container',
      logoPic:require('../../../view/assets/images/banli.png'),
      routes:[]
    }

  },
  computed: {
    // name () {
    //   return this.$route.name
    // },

    list () { 
      return this.$route.matched
    }
  },
  methods: {
    
  }
}
</script>
