<template>
  <div>
    <ynet-row class="demoRow" align="center" gutter="20">
        <ynet-col span="8"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="8"><div class="demoCol">hi</div></ynet-col>
    </ynet-row>
    <ynet-row class="demoRow" align="left" gutter="20">
        <ynet-col span="6"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="6"><div class="demoCol">hi</div></ynet-col>
    </ynet-row>
    <ynet-row class="demoRow" align="right" gutter="20">
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
    </ynet-row>
    <ynet-row class="demoRow" gutter="20">
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCol">hi</div></ynet-col>
    </ynet-row>
    <ynet-row class="demoRow">
        <ynet-col span="4" offset="6"><div class="demoCols">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCols">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCols">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCols">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCols">hi</div></ynet-col>
        <ynet-col span="4"><div class="demoCols">hi</div></ynet-col>
    </ynet-row>
  </div>
</template>

<script>
export default {
  name: 'icon',
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
  .demoRow{
    margin-bottom: 10px;
    .demoCol{
      width: 100%;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .demoCols{
      background: #ff8800;
    }
  }
</style>