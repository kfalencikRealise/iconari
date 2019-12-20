<template>
  <div v-if="product">
    <h2>Produkt</h2>

    <div class="content">
      <form class="form">
        <b-field class="form__input" label="Nazwa produktu">
          <b-input placeholder="Nazwa produktu" v-model="title" required></b-input>
        </b-field>

        <b-field message='Musi byc unikatowe. Zamiast spacji dac myslnik, male litery np. "i-love-chicago-i"' class="form__input" label="Identyfikator produktu">
          <b-input placeholder="Identyfikator produktu" v-model="slug" disabled></b-input>
        </b-field>

        <b-field label="Kategoria">
          <b-select placeholder="Wybierz kategorie" v-model="category" required>
            <option
              v-for="option in categories"
              :value="option.slug"
              :key="option.slug">
              {{ option.title }}
            </option>
          </b-select>
        </b-field>

        <b-field message="800x800, najlepiej .jpg" class="form__input" label="Zdjecie produktu">
          <b-input placeholder="Zdjecie produktu" v-model="image" required></b-input>
        </b-field>

        <b-field message="800x560 jesli poziome, 560x800 jesli pionowe, najlepiej .jpg" class="form__input" label="Zdjecie na podglad 3D">
          <b-input placeholder="Zdjecie na podglad 3D" v-model="canvasImage" required></b-input>
        </b-field>

        <b-field message='W dolarach np. "120.99"' class="form__input" label="Cena">
          <b-input placeholder="Cena" v-model="price" required></b-input>
        </b-field>

        <b-field message='W procentach np. "20"' class="form__input" label="Znizka">
          <b-input placeholder="Znizka" v-model="discount" required></b-input>
        </b-field>

        <b-field label="Orientacja">
          <b-select placeholder="Wybierz orientacje" v-model="landscape" required>
            <option value="true">Pozioma</option>
            <option value="false">Pionowa</option>
          </b-select>
        </b-field>

        <b-field class="form__input" message="Bedzie uzyte w wyszukiwarce produktow. Najelpiej dodac ok 5-10" label="Add some tags">
          <b-taginput
            v-model="tags"
            ellipsis
            icon="label"
            placeholder="Dodaj">
          </b-taginput>
        </b-field>

        <div class="form__input form__input--buttons">
          <button type="button" @click="editProduct" class="button">Zapisz zmiany</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      slug: '',
      category: '',
      image: '',
      canvasImage: '',
      price: 0,
      discount: 0,
      landscape: "false",
      tags: [],
      latestId: 0,
      file: null
    }
  },
  layout: 'dashboard',
  computed: {
    categories() {
      let categories = this.$store.state.categories;
      return categories;
    },
    id() {
      return this.$route.params.id;
    },
    product() {
      let product = this.$store.state.products.filter(product => product.id === parseInt(this.id));
      product = product[0];
      this.title = product.title;
      this.slug = product.slug;
      this.category = product.category;
      this.image = product.image;
      this.canvasImage = product.canvasImage;
      this.price = product.price;
      this.discount = product.discount;
      this.landscape = product.landscape;
      this.tags = product.tags.split(',');

      return product;
    },
  },
  methods: {
    editProduct: function() {
      if (
        this.title === '' ||
        this.slug === '' ||
        this.image === '' ||
        this.canvasImage === '' ||
        this.price === 0
      ) {
        this.$store.commit('addMessage', ['Cos jest nie tak, sprawdz wszystkie pola.', 'bad']);
      } else {
        // this.$store.commit('editProduct', [this.product.id, {
        //   title: this.title,
        //   image: this.image,
        //   canvasImage: this.canvasImage,
        //   price: this.price,
        //   discount: this.discount,
        //   category: this.category,
        //   landscape: this.landscape === 'true' ? true : false,
        //   tags: this.tags.join(", ")
        // }]);

        console.log(this.file);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .container {
        min-height: 60vh;
    }

    .form {
        &__input {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
            max-width: 500px;

            label {
                font-weight: bold;
                font-size: 0.8em;
            }
        }

        &__input-description {
            font-size: 0.6em;
        }
    }
</style>
