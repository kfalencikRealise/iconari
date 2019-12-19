<template>
  <tr class="cart-item">
    <td></td>
    <td>Discount</td>
    <td><strong>Description:</strong> {{ discounts[discount].title }}</td>
    <td></td>
    <td class="cart-item__price">
      <strong>-{{ discounts[discount].discount }}%</strong>
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  computed: {
    discount() {
      return this.$store.state.localStorage.discount;
    },
    discounts() {
      return this.$store.state.discounts;
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    border-bottom: 1px solid $black;
    border-top: 1px solid $black;

    td {
      padding: 10px;
      vertical-align: middle;
    }
  }
</style>
