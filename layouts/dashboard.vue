<template>
  <div class="dashboard">
    <div class="sidebar">
      <router-link to="/">
        <img :src="require('@/assets/images/logo.png')" />
      </router-link>

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
        <Messages />
        <nuxt />
    </div>

    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading';
import Messages from '~/components/Messages';

export default {
  components: {
    Loading,
    Messages
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
  .dashboard {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  }

  .sidebar {
    padding: 50px 50px;
    border-right: 1px solid lighten($lightgrey, 20%);
    min-height: 100vh;
    background: lighten($lightgrey, 20%);
    text-align: center;

    nav {
      margin-top: 35px;
      text-align: left;

      a {
        color: $black;
        font-weight: bold;
        display: block;
        padding: 15px 0;
        border-bottom: 1px solid #fff;
      }
    }
  }

  .content {
    width: 100%;
    padding: 50px;
  }
</style>
