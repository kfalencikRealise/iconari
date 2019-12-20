import  firebase from 'firebase/app';
import 'firebase/firestore'
import firebaseConfig from '~/assets/data/firebase';
import data from '../assets/data/main';

// Firestore database connection
let db;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
}

export const state = () => ({
  products: [],
  filteredProducts: [],
  discounts: [],
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
  loadData (state, data) {
    state.products = data[0];
    state.filteredProducts = data[0];
    state.discounts = data[1];

    state.loaded = true;
  },
  addProduct (state, product) {
    db = firebase.firestore();

    db.collection("products").add(product).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }
}

export const actions = {
  filterProducts (context) {
    context.commit('filterProducts');
  },
  async getShopData (context) {
    db = firebase.firestore();

    let products = [];
    let discounts = [];

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

    context.commit('loadData', [products, discounts]);


  }
}
