<template>
  <div>
    <Slideshow />
    <Services />
    <Popular number="4" />
    <Testimonials />
    <KeyPoints />
    <New number="4" />
  </div>
</template>

<script>
import Slideshow from '~/components/Slideshow';
import Popular from '~/components/Popular';
import Testimonials from '~/components/Testimonials';
import New from '~/components/New';
import Services from '~/components/Services';
import KeyPoints from '~/components/KeyPoints';

export default {
  head () {
    return {
      title: 'Iconari - Beautiful canvases for you home or office',
    }
  },
  name: 'HomePage',
  transition: 'page',
  components: {
    Slideshow,
    Popular,
    Testimonials,
    New,
    Services,
    KeyPoints
  },
}
</script>
