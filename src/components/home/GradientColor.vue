<template>
  <div
    class="gradient_color"
    :class="{ gradient_color__active: active }"
    :style="{ backgroundImage: gradientColor }"
  />
</template>

<script>
import { computed } from "vue";
export default {
  name: "GradientColor",
  props: {
    colors: {
      type: Array,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    const gradientColor = computed(() => {
      const colorBottom = `color-stop(30%, ${props.colors[0]})`;
      const colorTop = `to(${props.colors[1]})`;
      return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`;
    });

    return { gradientColor };
  },
};
</script>

<style lang="scss">
.gradient_color {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.gradient_color__active {
  opacity: 1;
}
</style>