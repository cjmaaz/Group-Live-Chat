<template>
  <h3>Login</h3>
  <form @submit.prevent="handleSubmit">
    <input
      v-model.trim="email"
      type="email"
      required
      placeholder="Enter email...."
    />
    <input
      v-model="password"
      type="password"
      required
      placeholder="Enter password.."
    />
    <div v-if="error" class="error">
      {{ error }}
    </div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "@/composables/useLogin.js";

export default {
  emits: ["login"],
  setup(props, context) {
    const { error, login } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped>
</style>