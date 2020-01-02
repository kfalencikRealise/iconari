import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import firebaseConfig from '~/assets/data/firebase';

// Firestore database connection
let db, storage;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const state = () => ({
  cart: [],
  order: {},
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
      if (item.product == cartItem.product
        && item.extras[0] == cartItem.extras[0]
        && item.extras[1] == cartItem.extras[1]
        && item.extras[2] == cartItem.extras[2]
        && item.extras[3] == cartItem.extras[3]
      ) {
        found = i;
      }
      i++;
    })

    if (found !== null) {
      state.cart[found].quantity = state.cart[found].quantity + data[2];
    } else {
      state.cart.push(cartItem);
    }
  },
  removeFromCart(state, index) {
    state.cart.splice(index, 1);
  },
  newOrder (state) {
    state.order = {};
  },
  completeOrder (state, data) {
    db = firebase.firestore();
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    date = dd + '/' + mm + '/'  + yyyy + ' ' + time;

    state.order.details = data[0];
    state.order.paypal = data[1];
    state.order.items = data[2];
    state.order.total = data[3];

    db.collection("orders").add({
      details: data[0],
      paypal: data[1],
      items: data[2],
      total: data[3],
      status: data[4],
      date: date,
      timestamp: `${time}-${year}-${mm}-${dd}`
    });
    state.cart = [];
    state.discount = null;

    console.log(state.order);
    this.app.router.push('/shop/checkout/complete');
  }
}
