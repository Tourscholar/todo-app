<template>
  <div class="home">
    <app-bar title="TODO" left="bars" right="search" />
    <avatar />
  </div>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import Avatar from "../components/Avatar.vue";

export default {
  name: "Home",
  components: {
    AppBar,
    Avatar,
  },
};
</script>
