<template>
  <div v-if="loaded">
    <div v-if="cart.length > 0">
      <table class="cart">
        <tbody>
          <CartItem class="cart__item" v-for="(item, index) in cart" :key="'item-' + index" :index="index" :productid="item.product" :quantity="item.quantity" :extras="item.extras" />


          <tr class="cart__item--bold" v-if="discount">
            <td></td>
            <td>Discount</td>
            <td><strong>Description:</strong> {{ discounts[discount].title }}</td>
            <td></td>
            <td class="cart-item__price">
              <strong>-{{ discounts[discount].discount }}%</strong>
            </td>
            <td></td>
          </tr>

          <tr class="cart__item--bold">
            <td></td>
            <td></td>
            <td></td>
            <td><strong>Total</strong></td>
            <td class="cart-item__price">
              <strong>{{ price(total) }}</strong>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div class="pay">
        <client-only>
          <paypal-checkout
            :amount="priceFormatter(total).toString()"
            currency="USD"
            :client="credentials" 
            :items="cartProducts"
            :button-style="buttonStyle"
            @payment-authorized="paymentAuthorized"
            @payment-complete="paymentComplete"
            @payment-cancelled="paymentCancelled"
          >
          </paypal-checkout>   
        </client-only>
      </div>
    </div>

    <p v-else>There are no items in your cart. Please add some items from <router-link to="/shop">our shop</router-link> first.</p>
  </div>
</template>

<script>
import CartItem from '~/components/CartItem';

export default {
  data() {
    return {
      credentials: {
        sandbox: process.env.PP_CID,
        production: process.env.PP_CID
      },
      buttonStyle: {
        label: 'checkout',
        size:  'responsive',
        shape: 'pill',
        color: 'black'
      }
    }
  },
  mounted() {
    console.log(this.credentials);
  },
  computed: {
    loaded() {
      return this.$store.state.localStorage.status
    },
    cart() {
      return this.$store.state.localStorage.cart
    },
    discount() {
      return this.$store.state.localStorage.discount;
    },
    discounts() {
      return this.$store.state.discounts;
    },
    prices() {
      return this.$store.state.prices;
    },
    total() {
      let price = 0;

      this.cart.forEach(item => {
        let product = this.product(item.product);
        let productPrice = product.price;
        let discount = (productPrice / 100) * product.discount;
        productPrice = productPrice - discount;
        productPrice = productPrice + this.prices[item.extras[0]].price;

        if (this.prices[item.extras[0]].thickness) {
          productPrice = productPrice + this.prices[item.extras[0]].thickness[item.extras[1]].price;
        }

        if (this.prices[item.extras[0]].edge) {
          productPrice = productPrice + this.prices[item.extras[0]].edge[item.extras[2]].price;
        }

        if (this.prices[item.extras[0]].frame) {
          productPrice = productPrice + this.prices[item.extras[0]].frame[item.extras[3]].price;
        }

        price = price + (productPrice * item.quantity);
      });

      if (this.discount) {
        price = price - ((price / 100) * this.discounts[this.discount].discount);
      }

      return price;
    },
    cartProducts() {
      let items = [];
      this.cart.forEach(item => {
        let product = this.product(item.product);
        let productPrice = this.productTotal(product);
        productPrice = this.productWithExtras(productPrice, item.extras[0], item.extras[1], item.extras[2], item.extras[3]);
        let price = productPrice * item.quantity;

        items.push({
          "name": product.title,
          "description": this.extrasFromatter(item.extras),
          "quantity": item.quantity,
          "price": this.priceFormatter(productPrice),
          "currency": "USD"
          });
      });

      return items;
    }
  },
  methods: {
    product(id) {
      const product = this.$store.state.products.filter(product => product.id === parseInt(id));
      return product[0];
    },
    productTotal(product) {
      let price = product.price;
      let discount = (price / 100) * product.discount;
      price = price - discount;

      return price;
    },
    productWithExtras(total, size, thickness, edge, frame) {
      let price = total;
      price = price + this.prices[size].price;

      if (this.prices[size].thickness) {
        price = price + this.prices[size].thickness[thickness].price;
      }

      if (this.prices[size].edge) {
        price = price + this.prices[size].edge[edge].price;
      }

      if (this.prices[size].frame) {
        price = price + this.prices[size].frame[frame].price;
      }

      return price;
    },
    price: function(price) {
      return '$' + (Math.round(price * 100) / 100).toFixed(2)
    },
    priceFormatter: function(price) {
      return (Math.round(price * 100) / 100).toFixed(2)
    },
    paymentAuthorized: function(event) {
      console.log('authorized: ',event);
    },
    paymentCancelled: function(event) {
      console.log('cancelled: ',event);
    },
    paymentComplete: function(event) {
      console.log('complete: ',event);
    },
    extrasFromatter: function(extras) {
      return `
        Size: ${this.prices[extras[0]].title}, 
        Thickness: ${this.prices[extras[0]].thickness ? this.prices[extras[0]].thickness[extras[1]].title: this.prices[0].thickness[extras[1]].title}, 
        Edge: ${this.prices[extras[0]].edge ? this.prices[extras[0]].edge[extras[2]].title: this.prices[0].edge[extras[2]].title}, 
        Frame: ${this.prices[extras[0]].frame ? this.prices[extras[0]].frame[extras[3]].title: this.prices[0].frame[extras[3]].title}
      `;
    }
  },
  components: {
    CartItem
  }
}
</script>

<style lang="scss" scoped>
  .cart {
    width: 100%;

    &__item {
      background: lighten($lightgrey, 20%);

      &--bold {
        border-bottom: 1px solid $black;
        border-top: 1px solid $black;

        td {
          padding: 10px;
        }
      }

      &:nth-child(even) {
        background: #fff;
      }
    }
  }

  .pay {
    margin-top: 35px;
    text-align: right;
  }
</style>
