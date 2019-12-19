<template>
  <div :class="{'page': true, 'page--home': home}">
    <Header />
    <main keep-alive>
      <div v-if="loaded">
        <Messages />
        <nuxt />
      </div>
      <div v-else>
        <Loading />
      </div>
      <Newsletter />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Newsletter from '~/components/Newsletter';
import Footer from '~/components/Footer';
import Messages from '~/components/Messages';
import Loading from '~/components/Loading';


export default {
  components: {
    Header,
    Newsletter,
    Footer,
    Messages,
    Loading
  },
  mounted() {
    this.$store.dispatch('getProducts');
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
