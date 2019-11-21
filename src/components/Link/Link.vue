
<template>
  <a
    :class="[type,underline,'ynet-link', type ? `ynet-link--${type}` : '',disabled ? 'disabled':'',!underline?'cleanLine':'']"
    :href="disabled ? null :href"
    :target="target"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
import { log } from "util";
import { loadavg } from "os";
export default {
  name: "Link",
  display: "Link文字链接",
  data() {
    return {
      preCls: "ynet-link"
    };
  },
  props: {
    type: {
      type: String,
      default: "success"
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,

    href: {
      type: String,
      default: "https://www.baidu.com/"
    },
    target: {
      type: String,
      default: "blank"
    },
    icon: String
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit("click", event);
        console.log(this.$emit("click", event));
      }
      console.log("2323");
    }
  }
};
</script>