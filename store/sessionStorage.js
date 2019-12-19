export const state = () => ({
  cart: [],
  expire: 1
});

export const mutations = {
  addToCart (state, data) {
    let cartItem = {
      product: data[0],
      extras: data[1],
      quantity: data[2]
    };
    state.cart.push(cartItem);
  }
}