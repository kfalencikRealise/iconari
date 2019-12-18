<template>
  <div class="section">
    <div class="container">
      <Filters />
      <Products :products="products" />
    </div>
  </div>
</template>

<script>
import Products from '~/components/Products';
import Filters from '~/components/Filters';

export default {
  name: 'Shop',
  transition: 'page',
  computed: {
    products() {
      return this.$store.state.filteredProducts;
    }
  },
  mounted() {
    this.$store.commit('sortProducts');
  },
  components: {
    Products,
    Filters
  }
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: row;
    min-height: 60vh;
  }
</style>
