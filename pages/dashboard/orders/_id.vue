<template>
  <div class="section">
    <h2>Zamowienie #{{id}}</h2>
    <div class="columns" v-if="ordersLoaded">
      <div class="column is-half">
        <h3>Dane Personalne</h3>
        <div><strong>Imie: </strong>{{order.details.title}} {{order.details.firstName}} {{order.details.lastName}}</div>
        <div><strong>Nazwa firmy: </strong>{{order.details.company}}</div>
        <div><strong>Email: </strong>{{order.details.email}}</div>
        <div><strong>Telefon: </strong>{{order.details.phone}}</div>
      </div>

      <div class="column is-half">
        <h3>Dane wysylki</h3>
        <div><strong>Address: </strong>{{order.details.address1}} {{order.details.address2}} {{order.details.address3}}</div>
        <div><strong>City: </strong>{{order.details.city}}</div>
        <div><strong>Zipcode: </strong>{{order.details.zipcode}}</div>
        <div><strong>State: </strong>{{order.details.state}}</div>
      </div>

      <div class="column is-half">
        <h3>Ogolne infromacje</h3>
        <div><strong>Kod PayPal: </strong>{{order.paypal.paymentID}}</div>
        <div><strong>Data zamowienia: </strong>{{order.date}}</div>
        <div><strong>Cena: </strong>${{order.total}}</div>
        <div><strong>Status: </strong><span class="tag" :class="statusType(order.status)" v-html="status(order.status)"></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  created() {
    this.$store.dispatch('getOrdersData');
  },
  computed: {
    ordersLoaded() {
      let ordersLoaded = this.$store.state.ordersLoaded;
      return ordersLoaded;
    },
    id() {
      return this.$route.params.id;
    },
    order() {
      let order = this.$store.state.orders.filter(order => order.paypal.orderID === this.id);
      order = order[0];
      return order;
    }
  },
  methods: {
    status: function(status) {
      let temp = status;

      switch (temp) {
        case 'abandoned':
          return 'Nie zaplacone'
        case 'paid':
          return '<strong>Zaplacone</strong>'
        case 'dispatched':
          return 'Wyslane'
      }
    },
    statusType: function(status) {
      let temp = status;

      switch (temp) {
        case 'abandoned':
          return 'is-danger'
        case 'paid':
          return 'is-warning'
        case 'dispatched':
          return 'is-success'
      }
    }
  }
}
</script>

<style lang="scss">
  .columns {
    flex-wrap: wrap;

    .column {
      margin-top: 50px;
    }
  }
</style>
