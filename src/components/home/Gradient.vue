<template>
  <div class="gradient">
    <gradient-color
      v-for="(todo, index) in todos"
      :key="todo.name"
      :colors="todo.colors"
      :active="index <= currentIndex"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import GradientColor from "./GradientColor";
export default {
  name: "Gradient",
  components: {
    GradientColor,
  },
  setup() {
    const store = useStore();
    const todos = computed(() => {
      return store.state.todos;
    });
    const currentIndex = computed(() => {
      return store.state.currentIndex;
    });

    return { todos, currentIndex };
  },
};
</script>

<style lang="scss">
.gradient {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>