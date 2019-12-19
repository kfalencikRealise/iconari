<template>
    <table class="cart">
      <CartItem class="cart__item" v-for="(item, index) in cart" :key="'item-' + index" :index="index" :productid="item.product" :quantity="item.quantity" :extras="item.extras" />
      <CartDiscount v-if="discount" />
      <CartTotal />
    </table>
</template>

<script>
import CartItem from '~/components/CartItem';
import CartDiscount from '~/components/CartDiscount';
import CartTotal from '~/components/CartTotal';

export default {
  computed: {
    cart() {
      return this.$store.state.localStorage.cart
    },
    discount() {
      return this.$store.state.localStorage.discount;
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
