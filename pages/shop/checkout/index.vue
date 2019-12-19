<template>
  <div class="section">
    <div class="container">
      <div>
        <router-link to="/shop">Go back to the shop</router-link>
      </div>

      <h2>Checkout</h2>
      <Cart />

      <div class="pay">
        <button class="button">Pay securely</button>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '~/components/Cart';

export default {
  name: 'Checkout',
  transition: 'page',
  components: {
    Cart,
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

    .pay {
      margin-top: 35px;
      text-align: right;
    }
  }
</style>
