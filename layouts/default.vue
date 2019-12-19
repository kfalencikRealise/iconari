<template>
  <div :class="{'page': true, 'page--home': home}">
    <Header />
    <main keep-alive>
      <Messages />
      <nuxt />
      <Newsletter />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Newsletter from '~/components/Newsletter';
import Footer from '~/components/Footer';
import Messages from '~/components/Messages'


export default {
  components: {
    Header,
    Newsletter,
    Footer,
    Messages
  },
  computed: {
    home() {
      return this.$route.name === 'index'
    }
  },
}
</script>
