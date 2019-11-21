<template>
  <div>
    <p style="height: 35px;" v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,]">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>
<style scoped="scss">
  p{border: 1px solid #555;background-color: #ff8800;}
</style>