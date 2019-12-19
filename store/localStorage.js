export const state = () => ({
  cart: [],
  discount: null,
  expire: 1
});

export const mutations = {
  addToCart (state, data) {
    let cartItem = {
      product: data[0],
      extras: data[1],
      quantity: data[2]
    };

    let found = null;
    let i = 0;

    // Check if item already exists in cart
    state.cart.forEach(item => {
      if (item.product === cartItem.product 
        && item.extras[0] === cartItem.extras[0]
        && item.extras[1] === cartItem.extras[1]
        && item.extras[2] === cartItem.extras[2]
        && item.extras[3] === cartItem.extras[3]
      ) {
        found = i;
      }
      i++;
    })

    if (found) {
      state.cart[found].quantity = state.cart[found].quantity + data[2];
    } else {
      state.cart.push(cartItem);
    } 
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1);
  }
}