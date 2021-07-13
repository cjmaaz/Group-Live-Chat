<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composables/getCollection.js";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";

export default {
  setup() {
    const { documents, error } = getCollection("message");

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());

          return { ...doc, createdAt: time };
        });
      }
    });

    const messages = ref(null);

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, documents, formattedDocuments };
  },
};
</script>

<style lang="scss">
.chat-window {
  background: #fafafa;
  padding: 2em 1em;

  .single {
    margin: 0.5em;

    .created-at {
      display: block;
      color: #999;
      font-size: calc(0.4em + 0.5vw);
      margin-bottom: 4px;
    }
    .name {
      font-weight: bold;
      margin-right: 6px;
    }
    .message {
      max-height: 400px;
      overflow: auto;
    }
  }
}
</style>