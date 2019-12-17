<template>
  <div class="section">
    <div class="container">
      <div class="columns services">
        <div class="services__item column is-one-fifth">
          <div>
            <b-icon icon="ferry" custom-size="mdi-24px"></b-icon>
            <h5>Free Shipping</h5>
            <p>All orders over $99</p>
          </div>
        </div>
        <div class="services__item column is-one-fifth">
          <div>
            <b-icon icon="cash-100" custom-size="mdi-24px"></b-icon>
            <h5>Money Back</h5>
            <p>100% money back guarantee</p>
          </div>
        </div>
        <div class="services__item column is-one-fifth">
          <div>
            <b-icon icon="wallet-giftcard" custom-size="mdi-24px"></b-icon>
            <h5>Discounts</h5>
            <p>Discounts all over the place</p>
          </div>
        </div>
        <div class="services__item column is-one-fifth">
          <div>
            <b-icon icon="lock-outline" custom-size="mdi-24px"></b-icon>
            <h5>Safe payments</h5>
            <p>Secure payment system</p>
          </div>
        </div>
        <div class="services__item column is-one-fifth">
          <div>
            <b-icon icon="help-circle-outline" custom-size="mdi-24px"></b-icon>
            <h5>Support 24/7</h5>
            <p>Get our help anytime</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .services {
    border: 1px solid lighten($lightgrey, 20%);
    border-radius: 3px;

    &__item {
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 15px 0;
      border-right: 1px solid lighten($lightgrey, 20%);

      p {
        font-size: 0.8em;
        color: $lightgrey;
      }

      &:last-child {
        border-right: none;
      }
    }
  }
</style>
