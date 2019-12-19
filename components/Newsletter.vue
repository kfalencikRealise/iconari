<template>
  <div class="newsletter">
    <div class="section">
      <div class="container">
        <div><b-icon icon="email-outline" custom-size="mdi-36px"></b-icon></div>
        <h3>Join our newsletter</h3>
        <p>Sign up to our newsletter and get <strong>25% off</strong> your next order. Pretty sweet, we know!</p>
        <form>
          <input class="input input--secondary input--inline" type="email" placeholder="Your email address" />
          <button class="button button--secondary" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .newsletter {
    background: $primary;
    color: #fff;
    margin-top: 50px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    form {
      margin-top: 25px;
      display: flex;
      flex-direction: row;
    }
  }
</style>
