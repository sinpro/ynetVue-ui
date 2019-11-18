<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    
  },
  computed:{
      key(){
          return this.$route.path + Math.random();
      }
  }
}
</script>
<!-- <style>
  @import url('../src/assets/font/iconfont.css');
</style> -->