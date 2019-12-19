<template>
  <div>
    <table class="cart" v-if="cart.length > 0">
      <CartItem class="cart__item" v-for="(item, index) in cart" :key="'item-' + index" :productid="item.product" :quantity="item.quantity" :extras="item.extras" />
      <CartDiscount v-if="discount" />
      <CartTotal />
    </table>

    <p v-else>There are no items in your cart. Please add some items from <router-link to="/shop">our shop</router-link> first.</p>
  </div>
</template>

<script>
import CartItem from '~/components/CartItem';
import CartDiscount from '~/components/CartDiscount';
import CartTotal from '~/components/CartTotal';

export default {
  computed: {
    cart() {
      return this.$store.state.sessionStorage.cart
    },
    discount() {
      return this.$store.state.sessionStorage.discount;
    }
  },
  components: {
    CartItem,
    CartDiscount,
    CartTotal
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    width: 100%;

    &__item {
      background: lighten($lightgrey, 20%);

      &:nth-child(even) {
        background: #fff;
      }
    }
  }
</style>
