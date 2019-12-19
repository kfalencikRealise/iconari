<template>
  <tr class="cart-item">
    <td class="cart-item__thumbnail">
      <img :src="require('@/assets/products/' + product.canvasImage)" />
    </td>
    <td class="cart-item__title">
      {{ product.title }}
    </td>

    <td class="cart-item__extras">
      <strong>Size: </strong> {{ prices[sizeOption].title }},
      <strong>Thickness: </strong> {{ prices[sizeOption].thickness[thicknessOption].title }},
      <strong>Edge: </strong> {{ prices[sizeOption].edge[edgeOption].title }},
      <strong>Frame: </strong> {{ prices[sizeOption].frame[frameOption].title }}
    </td>

    <td class="cart-item__quantity">
      {{ quantity }}
    </td>

    <td class="cart-item__price">
      {{ price(total) }}
    </td>
  </tr>
</template>

<script>
export default {
  props: [
    'productid',
    'quantity',
    'extras'
  ],
  data() {
    return {
      sizeOption: this.extras[0],
      thicknessOption: this.extras[1],
      edgeOption: this.extras[2],
      frameOption: this.extras[3]
    }
  },
  computed: {
    product() {
      const product = this.$store.state.products.filter(product => product.id === parseInt(this.productid));
      return product[0];
    },
    prices() {
      return this.$store.state.prices;
    },
    productTotal() {
      let price = this.product.price;
      let discount = (price / 100) * this.product.discount;
      price = price - discount;

      return price;
    },
    productWithExtras() {
      let price = this.productTotal;
      price = price + this.prices[this.sizeOption].price;

      if (this.prices[this.sizeOption].thickness) {
        price = price + this.prices[this.sizeOption].thickness[this.thicknessOption].price;
      }

      if (this.prices[this.sizeOption].edge) {
        price = price + this.prices[this.sizeOption].edge[this.edgeOption].price;
      }

      if (this.prices[this.sizeOption].frame) {
        price = price + this.prices[this.sizeOption].frame[this.frameOption].price;
      }

      return price;
    },
    extrasTotal() {
      let price = this.prices[this.sizeOption].price;

      if (this.prices[this.sizeOption].thickness) {
        price = price + this.prices[this.sizeOption].thickness[this.thicknessOption].price;
      }

      if (this.prices[this.sizeOption].edge) {
        price = price + this.prices[this.sizeOption].edge[this.edgeOption].price;
      }

      if (this.prices[this.sizeOption].frame) {
        price = price + this.prices[this.sizeOption].frame[this.frameOption].price;
      }

      return price;
    },
    total() {
      return this.productWithExtras * this.quantity;
    },
  },
  methods: {
    price: function(price) {
      return '$' + (Math.round(price * 100) / 100).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
  .cart-item {
    td {
      padding: 10px;
      vertical-align: middle;
    }

    &__thumbnail {
      height: 80px;
      width: 200px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }
  }
</style>
