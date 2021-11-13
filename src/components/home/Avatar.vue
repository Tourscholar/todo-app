<template>
  <div class="avatar" :class="{ avatar__selected: !!selected }">
    <div class="avatar_face">
      <img src="@/assets/face.jpeg" />
    </div>
    <h2 class="avatar_name">Hello, {{data.username}}.</h2>
    <p class="avatar_tips">
      Looks like feed good.<br />You have {{ todayTasks.length }} tasks to do
      today.
    </p>
    <p class="avatar_date">TODAY : {{ dateString(data.today) }}</p>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Avatar",
  setup() {
    const data = reactive({
      username: localStorage.username,
      today: new Date(),
    });
    const store = useStore();
    const selected = computed(() => {
      return store.state.selected;
    });
    const todayTasks = computed(() => {
      return store.getters.todayTasks;
    });

    function dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ", $1");
    }
    return { data, selected, todayTasks, dateString };
  },
};
</script>

<style lang="scss">
.avatar {
  display: flex;
  padding: 0 40px;
  height: 300px;
  justify-content: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;
}
.avatar__selected {
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}
.avatar_face {
  width: 44px;
  height: 44px;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.avatar_name {
  margin-top: 32px;
  padding: 0 6px;
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: 300;
}
.avatar_tips {
  margin-top: 16px;
  padding: 0 6px;
  font-size: 13px;
  font-weight: 100;
  opacity: 0.8;
  line-height: 1.6em;
}
.avatar_date {
  margin-top: 44px;
  margin-bottom: 16px;
  padding: 0 6px;
  font-size: 14px;
}
</style>