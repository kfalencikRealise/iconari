import data from '../assets/data/main';
import productsData from '../assets/data/products';
import discountsData from '~/assets/data/discounts.js';

export const state = () => ({
  products: productsData,
  filteredProducts: productsData,
  discounts: discountsData,
  categories: data.categories,
  slideshow: data.slideshow.slides,
  filterCategories: [],
  filterPrice: [0, 999],
  filterTags: [],
  sorter: 'popularity-az',
  prices: data.prices,
  discount: 1
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
          if (product.categories.indexOf(category) !== -1) {
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
  }
}

export const actions = {
  filterProducts (context) {
    context.commit('filterProducts');
  }
}