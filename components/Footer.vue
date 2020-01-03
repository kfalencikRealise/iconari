<template>
  <footer class="footer">
    <div class="footer__bottom">
      <div class="section">
        <div class="footer__left">
          Copyright @ 2020 Iconari - All rights reserved
        </div>
        <div class="footer__right">
          <nav>
            <ul>
              <li><router-link to="/legal/privacy-policy">Privacy Policy</router-link></li>
              <li><router-link to="/legal/terms-conditions">Terms & Conditions</router-link></li>
            </ul>
          </nav>
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

    nav {
      ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin-left: 0;

        li {
          margin-left: 10px;

          a {
            color: $black;
          }
        }
      }
    }
  }
</style>
