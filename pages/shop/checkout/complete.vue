<template>
    <div class="section">
        <div class="container">
            <div v-if="loaded">
                <div v-if="orderDetails.details">
                    <h2>Your order is complete!</h2>
                </div>
                <p v-else>Something went wrong please go back to our <router-link to="/shop">shop</router-link>.</p>
            </div>
        </div>
    </div>
</template>

<script>
import CartItem from '~/components/CartItem';

export default {
    computed: {
        loaded() {
          return this.$store.state.localStorage.status
        },
        orderDetails() {
          return this.$store.state.localStorage.order
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    min-height: 60vh;
    flex-direction: column;

    h2 {
      margin-top: 20px;
    }
  }
</style>
