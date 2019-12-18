<template>
  <div :class="{'product container': true, 'product--landscape': product.landscape}">
    <div class="columns">
      <div class="column is-half">
        <div class="product__image ">
          <div class="product__canvas" :style="{ 'background-image': 'url(' + require('@/assets/products/' + product.image) + ')', 'transform': 'scale(' + size + ')' }">
            <div class="product__canvas-top" :style="{'height': thickness + 'px', background: frame}"></div>
            <div class="product__canvas-right" :style="{'width': thickness + 'px', background: frame}"></div>
          </div>
        </div>
        <p>Please note the preview above is just for demonstration purpouses. The actual size and colours might be slightly different.</p>
      </div>


      <div class="product__details column is-half">
        <div class="product__title">
          <h3>{{product.title}}</h3>
        </div>
        <div class="product__price">
          <template v-if="product.discount">
            <span class="discount">${{ product.price }}</span>
            <span class="price"><strong>${{ discount(product.price, product.discount) }}</strong></span>
          </template>
          <template v-else>
            <span class="price"><strong>${{ product.price }}</strong></span>
          </template>
        </div>
        <div class="product__description">
          {{product.description}}
        </div>

        <div class="product__add-to-cart">
          <div class="product__size">
            <h5>Size</h5>
            <div class="buttons">
              <button class="button button--secondary" @click="changeSize(0.5)">12" x 20"</button>
              <button class="button button--secondary" @click="changeSize(0.55)">20" x 30"</button>
              <button class="button button--secondary" @click="changeSize(0.6)">36" x 48"</button>
              <button class="button button--secondary" @click="changeSize(0.7)">40" x 60"</button>
            </div>
          </div>

          <div class="product__thickness">
            <h5>Frame thickness</h5>
            <div class="buttons">
              <button class="button button--secondary" @click="changeThickness(8)">Normal - .75"</button>
              <button class="button button--secondary" @click="changeThickness(10)">Big - 1.50"</button>
            </div>
          </div>

          <div class="product__edge">
            <h5>Edge style</h5>
            <div class="buttons">
              <button class="button button--secondary" @click="changeEdge('background')">Folded</button>
              <button class="button button--secondary" @click="changeEdge('#000')">Black</button>
              <button class="button button--secondary" @click="changeEdge('#fff')">White</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
  data() {
    return {
      size: 0.5,
      thickness: 8,
      frame: this.background,
    }
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    product() {
      const product = this.$store.state.products.filter(product => product.slug === this.slug);
      return product[0];
    },
    background() {
      return 'url(' + require('@/assets/products/' + this.product.image) + ')';
    }
  },
  methods: {
    discount: function(price, discount) {
      return parseInt(price - ((price / 100) * discount));
    },
    changeSize: function(size) {
      this.size = size;
    },
    changeThickness: function(size) {
      this.thickness = size;
    },
    changeEdge: function(edge) {
      if (edge === 'background') {
        this.frame = this.background;
      } else
        this.frame = edge;
    }
  }
}
</script>

<style lang="scss" scoped>

  .product {
    $canvasWidth: 240px;
    $canvasHeight: 340px;
    $canvasDepth: 8px;

    $root: &;

    &__image {
      background: url('~assets/images/product-background.jpg');
      background-size: cover;
      height: 600px;
      padding-top: 100px;

      + p {
        color: $lightgrey;
        font-size: 0.6em;
      }
    }

    &__canvas {
      margin: -($canvasDepth/2) auto auto;
      position: relative;
      width: $canvasWidth;
      height: $canvasHeight;
      box-shadow: 5px 0px 25px 3px #000;
      background-size: 100%;
      transform-origin: top center;
    }

    &__canvas-top {
      transform: scaleY(-1) skew(45deg, 0);
      transform-origin: 0% 50%;
      margin-left: $canvasDepth/2;
      top: -$canvasDepth;
      background-image: inherit;
      background-size: cover !important;
      background-position: top right;
      position: absolute;
      width: 100%;
      height: $canvasDepth;

      &::after {
        display: block;
        content: "";
        position: absolute;
        width: inherit;
        height: inherit;
        background: rgba(#000, 0.25);
      }
    }

    &__canvas-right {
      transform: scaleX(-1) skew(0, 45deg);
      position: absolute;
      transform-origin: 0% 50%;
      margin-left: $canvasDepth;
      margin-top: -$canvasDepth;
      left: 100%;
      background-image: inherit;
      background-size: cover !important;
      background-position: top right;
      width: $canvasDepth;
      height: 100%;

      &::after {
        display: block;
        content: "";
        position: absolute;
        width: $canvasDepth;
        height: $canvasHeight;
        background: rgba(#000, 0.38);
      }
    }

    &--landscape {

      #{$root}__canvas {
        width: $canvasHeight;
        height: $canvasWidth;
      }

      #{$root}__canvas-right {
        &::after {
          height: $canvasWidth;
        }
      }
    }
  }
</style>
