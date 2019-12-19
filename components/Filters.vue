<template>
  <div class="filters">
    <div class="filters__item">
      <h5>Categories</h5>
      <div class="filters__item-field" v-for="(category, index) in categories" :key="category.id" @change="toggleCategory(category.slug)">
        <label><input type="checkbox" :checked="categoryEnabled(category.slug)" /> {{category.title}}</label>
      </div>
    </div>

    <div class="filters__item">
      <h5>Filter by</h5>
        <div class="filters__item-field">
          <select @change="sortProducts">
            <option value="popularity-az">Most popular</option>
            <option value="popularity-za">Least popular</option>
            <option value="date-az">Newest products</option>
            <option value="date-za">Oldest products</option>
            <option value="price-za">Lowest price</option>
            <option value="price-az">Highest price</option>
          </select>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    filteredProducts() {
      return this.$store.state.filteredProducts;
    },
    filterCategories() {
      return this.$store.state.filterCategories;
    }
  },
  methods: {
    toggleCategory: function(category) {
      this.$store.commit('toggleFilterCategory', category);
      this.filterProducts();
    },
    categoryEnabled: function(category) {
      if (this.filterCategories.indexOf(category) !== -1) {
        return true;
      }
    },
    filterProducts: function() {
      this.$store.dispatch('filterProducts');
    },
    sortProducts: function(event) {
      this.$store.commit('sortProducts', event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .filters {
    margin-right: 50px;
    padding-right: 20px;
    border-right: 1px solid lighten($lightgrey, 20%);

    &__item {
      width: 220px;
      margin-bottom: 35px;

      h5 {
        margin-bottom: 10px;
        text-decoration: underline;
      }
    }
  }
</style>
