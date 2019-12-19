import firebase from 'firebase/app';
import 'firebase/firestore'
import firebaseConfig from './assets/data/firebase';

export default async function() {
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  let productPaths = [];
  let products = [];

  await db.collection('products').get().then(querySnapshot => {
    querySnapshot.docs.forEach(doc => {
      products.push(doc.data());
    });
  });

  products.forEach(product => {
    productPaths.push('/shop/' + product.slug);
    productPaths.push('/shop/reviews/' + product.id);
  });

  return {
    mode: 'universal',
    /*
    ** Headers of the page
    */ 
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap' }
      ]
    },
    generate: {
      routes: [
        ...productPaths,
        '/shop',
        '/shop/checkout'
      ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
      // Doc: https://buefy.github.io/#/documentation
      'nuxt-buefy',
      '@nuxtjs/style-resources',
      'nuxt-vuex-localstorage'
    ],
    styleResources: {
      scss: [
          'assets/scss/main.scss',
      ]
    },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      analyze: true,
      extend (config, ctx) {
      }
    }
  }
}
