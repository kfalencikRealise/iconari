<template>
    <div class="section">
        <div class="container">
            <div v-if="loaded">
                <div v-if="orderDetails.details">
                    <b-icon icon="check-circle-outline" size="is-large"></b-icon>
                    <h2>Your order is complete!</h2>
                    <p>Your order id is: <strong>{{orderDetails.paypal.orderID}}</strong></p>
                    <p>Please keep a note of your order id as it will serve as a reference to this order in case of any questions or problems.</p>
                    <router-link to="/shop">Go back to our shop</router-link>
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
    flex-direction: column;
    text-align: center;

    .icon {
      color: $primary;
    }

    h2 {
      margin-top: 20px;
    }

    p {
      margin: 15px 0;
    }
  }
</style>
