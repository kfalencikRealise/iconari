<template>
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="sidebar">
          <img :src="require('@/assets/images/logo.png')" />

          <nav>
            <ul>
              <li>
                <router-link to="/dashboard/orders">Zamowienia</router-link>
              </li>
              <li>
                <router-link to="/dashboard/products/add-product">Dodaj produkt</router-link>
              </li>
              <li>
                <router-link to="/dashboard/products">Produkty</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="content" v-if="loaded">
          <nuxt />
        </div>

        <div v-else>
          <Loading />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  mounted() {
    this.$store.dispatch('getShopData');
  },
  computed: {
    loaded() {
      return this.$store.state.loaded;
    },
    home() {
      return this.$route.name === 'index'
    }
  },
}
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 235px;
    padding-right: 15px;
    margin-right: 50px;
    border-right: 1px solid lighten($lightgrey, 20%);
    min-height: 90vh;
  }

  .content {
    width: 100%;
  }
</style>
