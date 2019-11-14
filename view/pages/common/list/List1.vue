<template>
  <div>
    <!-- <router-view></router-view> -->
    <div>fkdhfdjjdfjhhhf</div>
  </div>
</template>

<script>
import Routes from '../../../view/mock/routes.js';
export default {
  name: 'List1',
  created(){
    console.log(this.$route)
    this.routes=Routes;
  },
  data () {
    return {
      logoPic:require('../../../view/assets/images/banli.png'),
      routes:[]
    }

  },
  methods: {
  }
}
</script>