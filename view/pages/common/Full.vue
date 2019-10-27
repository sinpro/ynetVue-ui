<template>
  <div>
    <ynet-container></ynet-container>
  </div>
</template>

<script>
import Routes from '../../../view/mock/routes.js';
export default {
  name: 'Full',
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