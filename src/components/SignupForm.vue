<template>
  <h3>Sign Up</h3>
  <form @submit.prevent="handleSubmit">
    <input
      v-model.trim="name"
      type="text"
      required
      placeholder="Enter name..."
    />
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
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "@/composables/useSignup.js";
export default {
  emits: ["signup"],
  setup(props, context) {
    const { error, signup } = useSignup();

    const name = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, name.value);
      if (!error.value) {
        context.emit("signup");
      }
    };

    return { name, email, password, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped>
</style>