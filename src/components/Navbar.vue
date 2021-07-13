<template>
  <nav v-if="user">
    <div>
      <p>Hey {{ user.displayName }}!</p>
      <p class="email">Currently logged is as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout.js";
import getUser from "@/composables/getUser.js";

export default {
  setup() {
    const { error, logout } = useLogout();
    const { user } = getUser();

    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("User Logout");
      }
    };

    return { error, handleClick, user };
  },
};
</script>

<style lang='scss' scoped>
nav {
  padding: 1em;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0.3em auto;
    font-size: 16px;
    color: #444;

    &.email {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>