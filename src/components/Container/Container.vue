<template>
  <div class="ynet-container">
    <ynet-header></ynet-header>
    <div class="ynet-container-body">
      <ynet-silder :routes='routes'></ynet-silder>
      <main class="main">
        <ynet-breadnav :list="list"/></ynet-breadnav>
        <div class="">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <ynet-footer></ynet-footer>
  </div>
</template>

<script>
  import routes from '../../../view/mock/routes.js';
export default {
  name: 'Container',
  display: 'Container内容',
  created(){
    console.log(routes)
  },
  data () {
    return {
      preCls: 'ynet-container',
      list:[
        {name:'首页',path:''},
        {name:'列表页',path:''}
      ],
      routes:[]
    }

  },
  methods: {
    
  }
}
</script>
