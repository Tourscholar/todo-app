<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <avatar />
    <gradient />
    <todo-list />
  </div>
</template>

<script>
import AppBar from "../components/home/AppBar.vue";
import Avatar from "../components/home/Avatar.vue";
import Gradient from "../components/home/Gradient.vue";
import TodoList from "../components/todoList/TodoList.vue";

export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
  },
};
</script>
