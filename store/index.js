import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import firebaseConfig from '~/assets/data/firebase';
import data from '../assets/data/main';

// Firestore database connection
let db, storage;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const state = () => ({
  products: [],
  filteredProducts: [],
  discounts: [],
  reviews: [],
  orders: [],
  assets: [],
  categories: data.categories,
  slideshow: data.slideshow.slides,
  filterCategories: [],
  filterPrice: [0, 999],
  filterTags: [],
  sorter: 'popularity-az',
  prices: data.prices,
  messages: [],
  loaded: false
})

export const mutations = {
  setField (state, data) {
    state[data[0]] = state[data[1]];
  },
  setFilterCategory (state, category) {
    state.filterCategories = [category];
  },
  toggleFilterCategory (state, category) {
    let findCategory = state.filterCategories.indexOf(category);

    // Check if category already in the list
    if (findCategory === -1) {
      state.filterCategories.push(category);
    } else {
      state.filterCategories.splice(findCategory, 1)
    }
  },
  filterProducts (state) {
    state.filteredProducts = state.products;

    if (state.filterCategories.length > 0) {
      state.filteredProducts = state.filteredProducts.filter(product => {
        let found = 0;

        state.filterCategories.forEach(category => {
          if (product.category === category) {
            found++;
          };
        });

        if (found > 0) {
          return true;
        }
      });

      switch (state.sorter) {
        case 'date-az':
          state.filteredProducts.sort((a, b) => (a.date < b.date) ? 1 : -1);
          break;
        case 'date-za':
          state.filteredProducts.sort((a, b) => (a.date > b.date) ? 1 : -1);
          break;
        case 'popularity-az':
          state.filteredProducts.sort((a, b) => (a.bought < b.bought) ? 1 : -1);
          break;
        case 'popularity-za':
          state.filteredProducts.sort((a, b) => (a.bought > b.bought) ? 1 : -1);
          break;
        case 'price-az':
          state.filteredProducts.sort((a, b) => (a.price < b.price) ? 1 : -1);
          break
        case 'price-za':
          state.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
          break
      }
    }
  },
  sortProducts (state, sorter = null) {
    if (sorter) {
      state.sorter = sorter;
    }

    switch (state.sorter) {
      case 'date-az':
        state.filteredProducts.sort((a, b) => (a.date < b.date) ? 1 : -1);
        break;
      case 'date-za':
        state.filteredProducts.sort((a, b) => (a.date > b.date) ? 1 : -1);
        break;
      case 'popularity-az':
        state.filteredProducts.sort((a, b) => (a.bought < b.bought) ? 1 : -1);
        break;
      case 'popularity-za':
        state.filteredProducts.sort((a, b) => (a.bought > b.bought) ? 1 : -1);
        break;
      case 'price-az':
        state.filteredProducts.sort((a, b) => (a.price < b.price) ? 1 : -1);
        break
      case 'price-za':
        state.filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);
        break
    }
  },
  addMessage (state, message) {
    state.messages.push(message);
  },
  removeMessage (state, index) {
    state.messages.splice(index, 1);
  },
  removeMessages (state) {
    state.messages = [];
  },
  loadAsset (state, data) {
    state.assets.push(data);
  },
  loadData (state, data) {
    let products = data[0].sort((a, b) => (a.title > b.title) ? 1 : -1);

    state.products = products;
    state.filteredProducts = products;
    state.discounts = data[1];
    state.reviews = data[2];

    state.loaded = true;
  },
  loadOrders (state, orders) {
    state.orders = orders;
  },
  addProduct (state, product) {
    db = firebase.firestore();

    db.collection("products").add(product).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
  },
  editProduct (state, data) {
    db = firebase.firestore();

    db.collection("products").where("id", "==", data[0]).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        db.collection("products").doc(doc.id).update(data[1]);
      });
    });
  }
}

export const actions = {
  filterProducts (context) {
    context.commit('filterProducts');
  },
  async getShopData (context) {
    db = firebase.firestore();
    storage = firebase.storage();

    let products = [];
    let discounts = [];
    let reviews = [];
    let assets = [];

    await db.collection('discounts').get().then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        discounts.push(doc.data());
      });
    });

    await db.collection('products').get().then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        products.push(doc.data());
      });
    });

    await db.collection('reviews').get().then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        reviews.push(doc.data());
      });
    });

    await storage.ref().child('images').listAll().then(function(res) {
      res.items.forEach(imageRef => {
        imageRef.getMetadata().then(function(metadata) {
          context.commit('loadAsset', metadata);
        });
      });
    });

    context.commit('loadData', [products, discounts, reviews]);
  },
  async getOrdersData (context) {
    db = firebase.firestore();

    let orders = [];

    await db.collection('orders').get().then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        orders.push(doc.data());
      });
    });

    context.commit('loadOrders', orders);
  }
}
