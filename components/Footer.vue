<template>
  <footer class="footer">
    <div class="footer__bottom">
      <div class="section">
        <div class="footer__left">
          Copyright @ 2020 Iconari - All rights reserved
        </div>
        <div class="footer__right">
          <div class="footer__payment">
            <ul>
              <li><a href="#"><img src="@/assets/images/payment-01.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-02.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-03.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-04.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-05.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-06.png" width="46" height="28"></a></li>
              <li><a href="#"><img src="@/assets/images/payment-07.png" width="46" height="28"></a></li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    padding: 0;

    &__bottom {
      background: lighten($lightgrey, 20%);
      font-size: 0.8em;

      .section {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }

    &__payment {
      ul {
        display: flex;
        flex-direction: row;

        li {
          margin-left: 10px;
        }
      }
    }
  }
</style>
