<template>
  <div class="welcome container">
    <h2>
      CSRF Attack Test
      <span class="material-icons tick">verified</span>
    </h2>
    <h2>
      XSS Scripting Test
      <span class="material-icons tick">verified</span>
    </h2>
    <h2>
      Read/Write Test
      <span class="material-icons not">error</span>
    </h2>
    <h2>Hello from Maaz!</h2>
    <div v-if="isNew">
      <SignupForm @signup="enterChat" />
      Already have an account? <span @click="isNew = false">Login</span>
    </div>
    <div v-else>
      <LoginForm @login="enterChat" />
      Don't have an account? <span @click="isNew = true">Sign Up</span>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";
import LoginForm from "@/components/LoginForm.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const router = useRouter();
    const isNew = ref(false);

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { isNew, enterChat };
  },
};
</script>
<style lang="scss">
.welcome {
  padding: 2em 0;
  text-align: center;

  form {
    width: 300px;
    margin: 2em auto;

    label {
      display: block;
      margin: 2em 0 1em;
    }
    input {
      width: 100%;
      padding: 1em;
      border-radius: 2em;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 1em auto;
    }
  }
  span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #00ce89;
    cursor: pointer;
    text-decoration: none;

    &.not {
      color: #e90074;
    }
  }
}
</style>