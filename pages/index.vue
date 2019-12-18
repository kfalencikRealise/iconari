<template>
  <div>
    <Slideshow />
    <Services />
    <Popular number="4" />
    <KeyPoints />
    <New number="4" />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow';
import Popular from '~/components/Popular';
import New from '~/components/New';
import Services from '~/components/Services';
import KeyPoints from '~/components/KeyPoints';

export default {
  name: 'HomePage',
  transition: 'page',
  components: {
    Slideshow,
    Popular,
    New,
    Services,
    KeyPoints
  },
}
</script>
