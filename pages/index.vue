<template>
  <div>
    <Slideshow />
    <Services />
    <Popular number="4" />
    <New number="4" />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow';
import Popular from '~/components/Popular';
import New from '~/components/New';
import Services from '~/components/Services';

export default {
  name: 'HomePage',
  transition: 'page',
  components: {
    Slideshow,
    Popular,
    New,
    Services
  },
}
</script>
