<template>
  <div>
    <div v-if="!loading" class="dashboard">
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
              <router-link to="/dashboard/products">Produkty</router-link>
            </li>
            <li>
              <router-link to="/dashboard/discounts">Kody promocyjne</router-link>
            </li>
            <li>
              <router-link to="/dashboard/newsletter">Newsletter</router-link>
            </li>
            <!-- <li>
              <router-link to="/dashboard/images">Galeria</router-link>
            </li> -->
          </ul>
        </nav>
      </div>

      <div class="content">
        <Messages />
        <nuxt />
      </div>
    </div>

    <b-loading :is-full-page="true" :active.sync="loading"></b-loading>

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
    redirecting() {
      return this.$store.state.redirecting;
    },
    home() {
      return this.$route.name === 'index'
    },
    loading() {
      if (!this.loaded ||  this.redirecting) {
        return true;
      }
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
    padding: 50px;
    border-right: 1px solid lighten($lightgrey, 20%);
    min-height: 100vh;
    background: lighten($lightgrey, 20%);
    text-align: center;

    nav {
      margin-top: 35px;
      text-align: left;

      ul {
        margin-left: 0;
        list-style: none;
      }

      li {
        padding: 0;
      }

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
