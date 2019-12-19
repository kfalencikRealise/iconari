<template>
    <div class="section">
        <div class="container">
            <h2>Dashboard</h2>

            <div class="content">
                <form class="form">
                    <div class="form__input">
                        <label>Nazwa produktu</label>
                        <input type="text" placeholder="Nazwa produktu" v-model="title" required>
                    </div>

                    <div class="form__input">
                        <label>Identyfikator produktu</label>
                        <input type="text" placeholder="Identyfikator produktu" v-model="slug" required>
                        <span class="form__input-description">Bedzie uzyty w pasku adresu. Musi byc oryginalny. Zamiast spacji dac myslnik i malymi literami np. "i-love-chicago-iii"</span>
                    </div>

                    <div class="form__input">
                        <label>Kategoria</label>
                        <select v-model="category">
                            <option v-for="(option, index) in categories" :key="'option-' + index" :value="option.slug">{{option.title}}</option>
                        </select>
                    </div>

                    <div class="form__input">
                        <label>Zdjecie produktu</label>
                        <input type="text" placeholder="Zdjecie produktu" v-model="image" required>
                        <span class="form__input-description">800x800, najlepiej .jpg</span>
                    </div>

                    <div class="form__input">
                        <label>Zdjecie na podglad 3D</label>
                        <input type="text" placeholder="Zdjecie na podglad 3D" v-model="canvasImage" required>
                        <span class="form__input-description">800x560 jesli poziome, 560x800 jesli pionowe, najlepiej .jpg</span>
                    </div>

                    <div class="form__input">
                        <label>Cena</label>
                        <input type="text" placeholder="Cena" v-model="price" required>
                        <span class="form__input-description">W dolarach np. "120.99"</span>
                    </div>

                    <div class="form__input">
                        <label>Znizka</label>
                        <input type="text" placeholder="Znizka" v-model="discount" required>
                        <span class="form__input-description">W procentach np. "20"</span>
                    </div>

                    <div class="form__input">
                        <label>Orientacja</label>
                        <select v-model="landscape">
                            <option value="true">Pozioma</option>
                            <option value="false">Pionowa</option>
                        </select>
                    </div>

                    <div class="form__input">
                        <label>Tagi</label>
                        <input type="text" placeholder="Tagi" v-model="tags" required>
                        <span class="form__input-description">Bedzie uzyte w wyszukiwarce produktow. Najelpiej dodac ok 5-10 po przecinku np. "art, fruit, bright"</span>
                    </div>

                    <div class="form__input form__input--buttons">
                        <button type="button" @click="addProduct" class="button">Dodaj produkt</button>
                    </div>
                </form>
            </div>
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
            tags: '',
            latestId: 0
        }
    },
    computed: {
        categories() {
            this.category = this.$store.state.categories[0].slug;
            return this.$store.state.categories;
        },
        products() {
            return this.$store.state.products;
        }
    },
    methods: {
        addProduct: function() {
            if (
                this.title === '' ||
                this.slug === '' ||
                this.image === '' ||
                this.canvasImage === '' ||
                this.price === 0
            ){
                this.$store.commit('addMessage', ['Cos jest nie tak, sprawdz wszystkie pola.', 'bad']);
            } else {
                let date = new Date();
                let dd = String(date.getDate()).padStart(2, '0');
                let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = date.getFullYear();

                date = yyyy + '-' + mm + '-' + dd;
                
                this.products.forEach(product => {
                    if (parseInt(product.id) > this.latestId) {
                        this.latestId = product.id;
                    }
                })

                this.latestId = this.latestId + 1;

                this.$store.commit('addProduct', {
                    id: this.latestId,
                    title: this.title,
                    slug: this.slug,
                    category: this.category,
                    image: this.image,
                    canvasImage: this.canvasImage,
                    price: this.price,
                    discount: parseInt(this.discount),
                    landscape: this.landscape === 'true' ? true : false,
                    tags: this.tags,
                    date: date,
                    bought: 0
                });
                this.$store.commit('addMessage', ['Produkt ' + this.title + ' dodany.', 'good']);
            }

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
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