<template>
  <button
    type="button"
    :class="[type?'ynet-btn-'+type:'ynet-btn-default',size?'ynet-btn-'+size:'',round?'ynet-btn-round':'']"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  display: "Button内容",
  data() {
    return {
      preCls: "ynet-button"
    };
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "default"
    },
    round: Boolean
  }
};
</script>

<style>
</style>