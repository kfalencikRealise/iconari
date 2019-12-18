<template>
  <div :class="{'product container': true, 'product--landscape': product.landscape}">
    <div class="columns">
      <div class="column is-half">
        <div class="product__image ">
          <div class="product__canvas" :style="{ 'background-image': 'url(' + require('@/assets/products/' + product.canvasImage) + ')', 'transform': 'scale(' + size + ')' }">
            <div class="product__canvas-top" :style="{'height': thickness + 'px', 'top': thickness * -1 + 'px', 'margin-left': thickness/2 + 'px', 'background': edge}"></div>
            <div class="product__canvas-right" :style="{'width': thickness + 'px', 'margin-top': thickness * -1 + 'px', 'margin-left': thickness + 'px', 'background': edge}"></div>
            <div class="product__frame" v-if="frame !== 'transparent'" :style="{'border-color': frame}"></div>
            <div class="product__canvas-top product__frame-top" :style="{'height': thickness + 'px', 'top': thickness * -1 + 'px', 'margin-left': thickness/2 + 'px', 'background': frame}"></div>
            <div class="product__canvas-right product__frame-right" :style="{'width': thickness + 'px', 'top': -1 + 'px', 'margin-left': thickness + 'px', 'background': frame}"></div>
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
          <div class="product__option">
            <h5>Canvas size</h5>
            <div class="buttons">
              <button :class="{'product__button': true, 'product__button--active': size === 0.5}" @click="changeSize(0.5)">12" x 20"</button>
              <button :class="{'product__button': true, 'product__button--active': size === 0.55}" @click="changeSize(0.55)">20" x 30"</button>
              <button :class="{'product__button': true, 'product__button--active': size === 0.6}" @click="changeSize(0.6)">36" x 48"</button>
              <button :class="{'product__button': true, 'product__button--active': size === 0.7}" @click="changeSize(0.7)">40" x 60"</button>
            </div>
          </div>

          <div class="product__option">
            <h5>Canvas thickness</h5>
            <div class="buttons">
              <button :class="{'product__button': true, 'product__button--active': thickness === 6}" @click="changeThickness(6)">Normal - .75"</button>
              <button :class="{'product__button': true, 'product__button--active': thickness === 8}" @click="changeThickness(8)">Big - 1.50"</button>
            </div>
          </div>

          <div class="product__option">
            <h5>Canvas edge</h5>
            <div class="buttons">
              <button :class="{'product__button': true, 'product__button--active': edge !== '#000' && edge !== '#fff' }" @click="changeEdge('background')">Folded</button>
              <button :class="{'product__button': true, 'product__button--active': edge === '#000'}" @click="changeEdge('#000')">Black</button>
              <button :class="{'product__button': true, 'product__button--active': edge === '#fff'}" @click="changeEdge('#fff')">White</button>
            </div>
          </div>

          <div class="product__option">
            <h5>Frame</h5>
            <div class="buttons">
              <button :class="{'product__button': true, 'product__button--active': frame === 'transparent'}" @click="changeFrame('transparent')">None</button>
              <button :class="{'product__button': true, 'product__button--active': frame === '#000'}" @click="changeFrame('#000')">Black</button>
              <button :class="{'product__button': true, 'product__button--active': frame === '#fff'}" @click="changeFrame('#fff')">White</button>
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
      thickness: 6,
      edge: this.background,
      frame: 'transparent'
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
      return 'url(' + require('@/assets/products/' + this.product.canvasImage) + ')';
    }
  },
  methods: {
    discount: function(price, discount) {
      return parseInt(price - ((price / 100) * discount));
    },
    changeSize: function(size) {
      this.size = size;
    },
    changeThickness: function(thickenss) {
      this.thickness = thickenss;
    },
    changeEdge: function(edge) {
      if (edge === 'background') {
        this.edge = this.background;
      } else {
        this.edge = edge;
      }
    },
    changeFrame: function(frame) {
      this.frame = frame;
    }
  }
}
</script>

<style lang="scss" scoped>

  .product {
    $canvasWidth: 240px;
    $canvasHeight: 340px;
    $canvasDepth: 6px;

    $root: &;

    &__option {
      margin-bottom: 35px;
      padding-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }

      h5 {
        margin-bottom: 15px;
        text-decoration: underline;
      }
    }

    &__button {
      border: 2px solid #fff;
      transition: all .3s ease;
      background: #fff;
      padding: 15px 25px;
      margin-right: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.15);
      cursor: pointer;

      &:last-child {
        margin-right: 0;
      }

      &--active, &:hover {
        border-color: #000;
        background: #000;
        color: #fff;
      }
    }

    &__image {
      background: url('~assets/images/product-background.jpg') center top;
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
      border-top: 1px solid $lightgrey;
      border-right: 1px solid $lightgrey;

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
      border-right: 1px solid $lightgrey;

      &::after {
        display: block;
        content: "";
        position: absolute;
        width: $canvasDepth;
        height: $canvasHeight;
        background: rgba(#000, 0.38);
      }
    }

    &__frame {
      overflow: hidden;
      height: 100%;
      width: 100%;
      border: 5px solid #000;
      position: relative;

      &::after {
        content: '';
        display: block;
        border: 1px solid $lightgrey;
        padding: 5px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
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
