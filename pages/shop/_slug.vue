<template>
  <div class="container">
    {{ product.title }}
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
}
</script>
