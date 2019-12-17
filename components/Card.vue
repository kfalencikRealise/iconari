<template>
  <div class="product column is-one-quarter">
    <div class="card">
      <router-link :to="'/shop/' + product.slug">
        <div class="product__image">
          <img :src="require('@/assets/products/' + product.image)" :title="product.title" />
        </div>
        <div class="product__title">
          <h5>{{ product.title }}</h5>
        </div>
        <div class="product__price">
          <template v-if="product.discount">
            <span class="discount">${{ product.price }}</span>
            <span class="price"><strong>${{ discount(product.price, product.discount) }}</strong></span>
          </template>
          <template v-else>
            <span class="price"><strong>${{ product.price }}</strong></span>
          </template>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'id'
  ],
  computed: {
    product() {
      const product = this.$store.state.products.filter(product => product.id === this.id);
      return product[0];
    }
  },
  methods: {
    discount: function(price, discount) {
      return parseInt(price - ((price / 100) * discount));
    }
  }
}
</script>

<style lang="scss" scoped>
  .product {

    &__image {
      overflow: hidden;

      img {
        transition: all .4s ease;
        display: block;
      }
    }

    a:hover {
      img {
        transform: scale(1.1);
      }
    }

    &__title {
      padding: 0 5px 10px;
      margin: 10px;
      border-bottom: 1px solid $lightgrey;

      h5 {
        color: $black;
      }
    }

    &__price {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-end;
      padding: 0 15px 15px;

      .discount {
        color: $lightgrey;
        font-size: 0.8em;
        text-decoration: line-through;
        margin-right: 10px;
      }
    }
  }

</style>
