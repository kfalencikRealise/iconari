<template>
  <div class="section">
    <div class="container">
      <div>
        <router-link :to="'/shop/' + product.slug">Go back to product page</router-link>
      </div>

      <h2>{{product.title}} - customer reviews</h2>

      <div class="reviews">
        <div class="reviews__item" v-for="(review, index) in reviews" :key="'reivew-' + index">
          <Stars :stars="review.stars" />
          <p>{{review.review}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Stars from '~/components/Stars';

  export default {
    transition: 'page',
    components: {
      Stars
    },
    computed: {
      reviews() {
        let reviews = this.$store.state.reviews;
        return reviews.filter(review => review.id === parseInt(this.id));
      },
      id() {
        return this.$route.params.id;
      },
      product() {
        const product = this.$store.state.products.filter(product => product.id === parseInt(this.id));
        return product[0];
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    min-height: 60vh;

    h2 {
      margin-top: 20px;
    }
  }

  .reviews {
    margin-top: 35px;

    &__item {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid lighten($lightgrey, 20%);
    }
  }
</style>
