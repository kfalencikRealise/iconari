<template>
  <transition name="slide-up">
    <div id="messages" class="messages" v-if="messages.length > 0">
      <b-message class="message" :duration="message[1] === 'bad' ? 60000: 10000" auto-close v-for="(message, index) in messages" :key="'message' + index" :type="message[1] === 'bad' ? 'is-danger' : 'is-success'">{{ message[0] }}</b-message>
    </div>
  </transition>
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
    .message {
      &:first-child {
        margin-top: 35px;
      }
    }
  }
</style>
