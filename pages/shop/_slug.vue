<template>
  <div class="product container">
    <div class="columns">
      <div class="product__image column is-half">
        <img :src="require('@/assets/products/' + product.image)" />
      </div>

      <div class="product__details column is-half">
        <div class="product__title">
          <h3>{{product.title}}</h3>
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
        <div class="product__description">
          {{product.description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  data() {
    return {
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    product() {
      const product = this.$store.state.products.filter(product => product.slug === this.slug);
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

  }
</style>
