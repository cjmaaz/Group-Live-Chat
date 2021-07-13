<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter="handleSubmit"
    >
    </textarea>
    <button @click.prevent="handleSubmit">Send</button>
    <div class="error">
      {{ error }}
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser.js";
import { timestamp } from "@/firebase/config.js";
import useCollection from "@/composables/useCollection.js";
export default {
  setup() {
    const { user } = getUser();
    const { error, addDoc } = useCollection("message");

    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 10px;
  display: grid;
  grid-template-columns: 5fr 1fr;

  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  button {
    margin: 4px 4px 4px 18px;
    max-width: 100px;
  }
}
</style>