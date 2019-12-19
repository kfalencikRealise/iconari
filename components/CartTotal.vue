<template>
  <tr class="cart-item">
    <td></td>
    <td></td>
    <td></td>
    <td><strong>Total</strong></td>
    <td class="cart-item__price">
      <strong>{{ price(total) }}</strong>
    </td>
  </tr>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    prices() {
      return this.$store.state.prices;
    },
    discount() {
      return this.$store.state.discount;
    },
    discounts() {
      return this.$store.state.discounts;
    },
    total() {
      let price = 0;

      this.cart.forEach(item => {
        let product = this.product(item.product);
        let productPrice = this.productTotal(product);
        productPrice = this.productWithExtras(productPrice, item.extras[0], item.extras[1], item.extras[2], item.extras[3]);
        price = price + (productPrice * item.quantity);
      });

      if (this.discount > 0) {
        price = price - ((price / 100) * this.discounts[this.discount].discount);
      }

      return price;
    }
  },
  methods: {
    price: function(price) {
      return '$' + (Math.round(price * 100) / 100).toFixed(2)
    },
    product(id) {
      const product = this.$store.state.products.filter(product => product.id === parseInt(id));
      return product[0];
    },
    productTotal(product) {
      let price = product.price;
      let discount = (price / 100) * product.discount;
      price = price - discount;

      return price;
    },
    productWithExtras(total, size, thickness, edge, frame) {
      let price = total;
      price = price + this.prices[size].price;

      if (this.prices[size].thickness) {
        price = price + this.prices[size].thickness[thickness].price;
      }

      if (this.prices[size].edge) {
        price = price + this.prices[size].edge[edge].price;
      }

      if (this.prices[size].frame) {
        price = price + this.prices[size].frame[frame].price;
      }

      return price;
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
