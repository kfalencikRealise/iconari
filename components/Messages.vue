<template>
  <div id="messages" class="messages" v-if="messages.length > 0">
    <div class="section">
      <div class="container">
        <div :class="'message message--' + message[1]" v-for="(message, index) in messages" :key="'message' + index" @click="removeMessage(index)">
          <span>{{ message[0] }}</span><b-icon icon="minus" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      messages() {
        return this.$store.state.messages;
      }
    },
    methods: {
      removeMessage(message) {
        this.$store.commit('removeMessage', message);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .messages {
    .section {
      padding: 0;
    }
  }

  .message {
    margin: 10px 0;
    padding: 15px 20px;
    background: #ddffd2;
    font-size: 0.8em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &--bad {
      background: red;
      color: #fff;
    }
  }
</style>