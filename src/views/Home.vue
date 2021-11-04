<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <avatar />
    <gradient />
    <todo-list />
    <todo-detail />
    <todo-editing />
    <floating-button />
  </div>
</template>

<script>
import AppBar from "../components/home/AppBar.vue";
import Avatar from "../components/home/Avatar.vue";
import Gradient from "../components/home/Gradient.vue";
import TodoList from "../components/todoList/TodoList.vue";
import TodoDetail from "../components/todo/TodoDetail.vue";
import TodoEditing from "../components/todo/TodoEditing.vue";
import FloatingButton from "../components/todo/FloatingButton.vue";
export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
    Gradient,
    TodoList,
    TodoDetail,
    TodoEditing,
    FloatingButton,
  },
};
</script>
