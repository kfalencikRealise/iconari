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
    productPaths.push('/dashboard/products/' + product.id);
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
        { hid: 'description', name: 'description', content: 'Best Canvas Shop in USA! Free shipping Lowest Prices Ever. Quality canvas and beautiful artwork. ​Environmentally Friendly. Customer-Rating Excellent. Effortless to order. Ready to Hang.' },
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:site', content: '@iconari'},
        { name: 'twitter:title', content: 'Iconari'},
        { name: 'twitter:description', content: 'Beautiful canvases for your home or office'},
        { name: 'twitter:image', content: 'https://d33wubrfki0l68.cloudfront.net/c65ae7c78c877a2b79ca8c12efc08fbfdf7e6409/32cd5/_nuxt/img/7aadeb4.png'}
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
    env: {
      PP_ENV: process.env.PP_ENV || 'sandbox',
      PP_CID: process.env.PP_CID || 'AVW9mgQzfnpBUadBxQzNesRvzoMrb3YrnVZtwmaAgSUkdJHHY_uxRkfeMvZXeFrZYKXXUF1eop7pocXY',
      PP_CIDD: process.env.PP_CIDD || 'AVW9mgQzfnpBUadBxQzNesRvzoMrb3YrnVZtwmaAgSUkdJHHY_uxRkfeMvZXeFrZYKXXUF1eop7pocXY',
      EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'default_service',
      EMAIL_USER: process.env.EMAIL_USER || 'user_10niH9eYCXacdIs7NmDIs'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
      { src: '~/plugins/paypal.js', ssr: false }
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
      '@nuxtjs/style-resources',
      'nuxt-buefy',
      'nuxt-vuex-localstorage'
    ],
    styleResources: {
      scss: [
        'assets/scss/main.scss',
      ]
    },
    router: {
      middleware: 'index'
    },
    /*
    ** Build configuration
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend (config, ctx) {
      }
    }
  }
}
