<template>
  <div v-if="product">
    <div class="stars" v-if="productReviews.length > 0">
      <b-icon v-for="index in starsAverage" :key="'star-' + index" icon="star" />
      <b-icon v-for="index in 5 - starsAverage" :key="'star-empty-' + index" icon="star-outline" />

      <span class="reviews" v-if="link">({{productReviews.length}}) <router-link :to="'/shop/reviews/' + product">Reviews</router-link></span>
    </div>
  </div>

  <div class="stars" v-else>
    <b-icon v-for="index in parseInt(stars)" :key="'star' + index" icon="star" />
    <b-icon v-for="index in 5 - parseInt(stars)" :key="'star' + index" icon="star-outline" />
  </div>
</template>

<script>
  export default {
    props: ['product', 'link', 'stars'],
    computed: {
      productReviews() {
        return this.$store.state.reviews.filter(review => review.id === this.product)
      },
      starsAverage() {
        let stars = 0;
        let reviewsTotal = this.productReviews.length;
        this.productReviews.forEach(review => {
          stars = stars + review.stars;
        });

        return Math.ceil(stars / reviewsTotal);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stars {
    display: flex;
    flex-direction: row;
    align-items: center;

    .icon {
      color: orange;
    }

    .reviews {
      margin-left: 10px;
      font-size: 0.8em;
      color: $black;

      a {
        color: $black;
      }
    }
  }
</style>
