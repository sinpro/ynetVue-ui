<template>
  <div class="button-demo">
    <div class="part1">
      <h3 class="title">基础用法</h3>
      <p class="basic-use">基础的按钮用法</p>
      <ynet-row>
        <ynet-button>默认按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="primary">主要按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="success">成功按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="info">信息按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="warning">警告按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="error">危险按钮</ynet-button>
      </ynet-row>
      <br />
      <ynet-row>
        <ynet-button round>圆角按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="primary" round>主要按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="success" round>成功按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="info" round>信息按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="warning" round>警告按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="error" round>危险按钮</ynet-button>
      </ynet-row>
      <br />
      <ynet-row>
        <ynet-button round>
          <ynet-icon name="home" size="normal"></ynet-icon>
        </ynet-button>&nbsp;&nbsp;
        <ynet-button type="primary" round>
          <ynet-icon name="xiugai" size="normal"></ynet-icon>
        </ynet-button>&nbsp;&nbsp;
        <ynet-button type="success" round>
          <ynet-icon name="chenggong" size="normal"></ynet-icon>
        </ynet-button>&nbsp;&nbsp;
        <ynet-button type="info" round>
          <ynet-icon name="youxiang" size="normal"></ynet-icon>
        </ynet-button>&nbsp;&nbsp;
        <ynet-button type="warning" round>
          <ynet-icon name="guanzhu" size="normal"></ynet-icon>
        </ynet-button>&nbsp;&nbsp;
        <ynet-button type="error" round>
          <ynet-icon name="delete" size="normal"></ynet-icon>
        </ynet-button>
      </ynet-row>
    </div>
    <div class="part2">
      <h3 class="title">局部状态</h3>
      <p class="basic-use">按钮不可用状态</p>
      <ynet-row>
        <ynet-button disabled>默认按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="primary" disabled>主要按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="success" disabled>成功按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="info" disabled>信息按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="warning" disabled>警告按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type="error" disabled>危险按钮</ynet-button>
      </ynet-row>
    </div>

    <div class="part3">
      <h3 class="title">不同尺寸</h3>
      <p class="basic-use">Button组件提供除尺寸以外的其他尺寸，可以在不同场景下选择合适的按钮尺寸</p>
      <ynet-row>
        <ynet-button size="large">大按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button size="medium">中等按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button>默认按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button size="small">小型按钮</ynet-button>&nbsp;&nbsp;
      </ynet-row>
    </div>
    <div class="part4">
      <h3 class="title">文字按钮</h3>
      <p class="basic-use">没有边框和背景色的按钮。</p>
      <ynet-row>
        <ynet-button type='text'>文字按钮</ynet-button>&nbsp;&nbsp;
        <ynet-button type='text' disabled>文字按钮</ynet-button>&nbsp;&nbsp;
      </ynet-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {};
  },
  methods: {
    show() {
      console.log(111);
    }
  }
};
</script>
<style lang="scss" scoped>
.button-demo {
  .title {
    font-size: 30px !important;
    margin-bottom: 10px;
  }
  .basic-use {
    margin-bottom: 20px;
    font-size: 14px !important;
  }

  .part1 {
    margin-bottom: 40px;
  }
  .part2 {
    margin-bottom: 40px;
  }
  .part3 {
    margin-bottom: 40px;
  }
}
</style>