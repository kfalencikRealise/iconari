<template>
  <header class="header section">
    <div class="header__wrapper">
      <div class="header__left">
        <div class="header__logo">
          <router-link to="/">
            <img src="~/assets/images/logo.png" title="Iconari" />
          </router-link>
        </div>
      </div>

      <div class="header__center">
        <div class="header__navigation">
          <button class="button" @click.stop.prevent="toggleMenu"><b-icon icon="menu" custom-size="mdi-24px"></b-icon> <span>Shop by category</span></button>
          <nav :class="{'header__main-nav': true, 'active': navigation}">
            <ul>
              <li>
                <a @click.prevent="selectCategory('all')">All categories</a>
              </li>
              <li v-for="(category, index) in categories" :key="index">
                <a @click.prevent="selectCategory(category.slug)">{{category.title}}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__search">
          <form>
            <input class="input input--inline" type="search" placeholder="Search for..." />
            <button type="submit" class="button"><b-icon icon="magnify" custom-size="mdi-24px"><span class="sr-only">Search</span></b-icon></button>
          </form>
        </div>
      </div>

      <div class="header__right">
        <div class="header__user-menu">
          <nav>
            <ul>
              <li>
                <router-link to="/user-profile">
                  <b-icon icon="account-outline" custom-size="mdi-24px"><span class="sr-only">Your account</span></b-icon>
                </router-link>
              </li>
              <li>
                <router-link to="/shop/checkout">
                  <b-icon icon="cart-outline" custom-size="mdi-24px"><span class="sr-only">Cart with {{ cart.length }} items</span></b-icon>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default{
    data() {
      return {
        siteName: 'Iconari',
        navigation: false
      }
    },
    mounted() {
      const self = this;

      if (this.$route.name === 'index') {
        self.navigation = true;
      }

      document.body.addEventListener('click', function(event) {
        self.navigation = false;
      });
    },
    computed: {
      categories() {
        return this.$store.state.categories;
      },
      cart() {
        return this.$store.state.localStorage.cart;
      }
    },
    methods: {
      toggleMenu: function(event) {
        this.navigation = !this.navigation;
      },
      selectCategory: function(slug) {
        this.$store.commit('setMenuCategory', slug);
        this.$store.dispatch('filterProducts');
        this.$store.commit('sortProducts', 'popularity-az');
        this.$router.push('/shop');
      }
    },
  }
</script>

<style lang="scss">
  .header {
    border-bottom: 1px solid lighten($lightgrey, 20%);
    padding-top: 15px;
    padding-bottom: 15px;

    &__wrapper {
      max-width: 1600px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      width: 100px;

      img {
        display: block;
      }

      @media (min-width: $medium) {
        width: 150px;
        margin-right: 25px;
      }
    }

    &__left {
      order: 2;

      @media (min-width: $medium) {
        order: 1;
      }
    }

    &__right {
      order: 3;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }

    &__center {
      order: 1;

      @media (min-width: $medium) {
        order: 2;
        width: 100%;
        max-width: 1180px;
        display: flex;
        flex-direction: row;
      }
    }

    &__search {
      display: none;

      form{
        padding-top: 0;
      }

      @media (min-width: $medium) {
        display: block;
        width: calc(100% - 200px);
      }

      form {
        display: flex;
        flex-direction: row;
      }
    }

    &__navigation {
      position: relative;

      @media (min-width: $medium) {
        margin-right: 20px;
      }

      button {

        .icon {
          margin: 0 !important;
        }

        span:last-child {
          display: none
        }

        @media (min-width: $medium) {
          min-width: 260px;

          span:last-child {
            display: initial;
          }
        }
      }
    }

    &__main-nav {
      position: absolute;
      opacity: 0;
      z-index: 20;
      left: 0;
      width: 100%;
      min-width: 250px;
      top: 50px;
      background: #fff;
      border-radius: 3px;
      padding: 5px 20px 0px;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
      border: 2px solid $lightgrey;
      transition: all .3s ease;
      transform: scaleY(0);
      transform-origin: top;

      &.active {
        opacity: 1;
        transform: scaleY(1);
      }

      @media (min-width: $medium) {
        &::before {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(194, 225, 245, 0);
          border-bottom-color: $lightgrey;
          border-width: 20px;
          margin-left: -20px;
        }

        &::after {
          bottom: 100%;
          left: 50%;
          border: solid transparent;
          content: " ";
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
          border-color: rgba(136, 183, 213, 0);
          border-bottom-color: #fff;
          border-width: 17px;
          margin-left: -17px;
        }
      }

      li {
        width: 100%;
        height: auto;
        position: relative;
        border-bottom: 1px solid #ddd;
        float: none;
        transition: all .3s ease;

        &:hover {
          border-color: $primary;
        }

        a {
          padding: 12px 0;
          display: block;
          font-size: 0.8em;
          color: $black;
        }
      }
    }

    &__user-menu {
      text-align: right;

      @media (min-width: $medium) {
        width: 100px;
      }

      li {
        display: inline-block;
        margin-left: 10px;
      }
    }
  }
</style>
