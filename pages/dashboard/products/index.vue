<template>
  <div>
    <h2>Produkty</h2>
    <b-table :data="products" :bordered="true" :striped="true" :narrowed="true" :current-page.sync="currentPage" :paginated="true" :per-page="20">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="title" label="Nazwa produktu">
          {{ props.row.title }}
        </b-table-column>
        <b-table-column field="price" label="Cena">
          {{ price(props.row.price) }}
        </b-table-column>
        <b-table-column field="discount" label="Znizka">
          {{ props.row.discount }}%
        </b-table-column>
        <b-table-column field="link" label="Akcje" width="120">
          <router-link :to="props.row.editLink">Edytuj</router-link> | <router-link :to="props.row.removeLink">Usun</router-link>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    products() {
      let products = [...this.$store.state.products];
      let productsData = products.sort((a, b) => (a.id > b.id) ? 1 : -1);

      products.forEach(product => {
        product.editLink = '/dashboard/products/' + product.id;
        product.removeLink = '/dashboard/products/remove/' + product.id;
      });

      return productsData;
    }
  },
  methods: {
    price: function(price) {
      return '$' + (Math.round(price * 100) / 100).toFixed(2)
    },
  }
}
</script>
