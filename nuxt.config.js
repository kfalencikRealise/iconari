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
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Iconari - Beautiful canvases for your home or office',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Best canvas shop in USA! Free shipping. Lowest prices ever. Quality canvas and beautiful artwork. ​Environmentally friendly. Customer-Rating excellent. Effortless to order. Ready to hang on the wall.' },
        { name: 'keywords', content: 'canvas, frame, artwork, art, canvas shop, usa, florida, quality, low prices, environmental, effortless, paintings, wall' },
        { hid: 'twittercard', name: 'twitter:card', content: 'summary_large_image'},
        { hid: 'twittersite', name: 'twitter:site', content: '@iconari'},
        { hid: 'twittertitle', name: 'twitter:title', content: 'Iconari - Beautiful canvases for your home or office'},
        { hid: 'twitterdesc', name: 'twitter:description', content: 'Best canvas shop in USA! Free shipping. Lowest prices ever. Quality canvas and beautiful artwork. ​Environmentally friendly. Customer-Rating excellent. Effortless to order. Ready to hang on the wall.'},
        { hid: 'twitterimage', name: 'twitter:image', content: 'https://d33wubrfki0l68.cloudfront.net/c65ae7c78c877a2b79ca8c12efc08fbfdf7e6409/32cd5/_nuxt/img/7aadeb4.png'},
        { hid: 'ogtitle', property: 'og:title', content: 'Iconari - Beautiful canvases for your home or office'},
        { hid: 'ogtype', property: 'og:type', content: 'Website'},
        { hid: 'ogurl', property: 'og:url', content: 'https://www.iconari.com'},
        { hid: 'ogdesc', property: 'og:description', content: 'Best canvas shop in USA! Free shipping. Lowest prices ever. Quality canvas and beautiful artwork. ​Environmentally friendly. Customer-Rating excellent. Effortless to order. Ready to hang on the wall.'},
        { hid: 'ogimage', property: 'og:image', content: 'https://d33wubrfki0l68.cloudfront.net/c65ae7c78c877a2b79ca8c12efc08fbfdf7e6409/32cd5/_nuxt/img/7aadeb4.png'}
      ],
      link: [
        { rel: 'canonical', href: 'https://www.iconari.com'},
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
    render: {
      static: {
        maxAge: 1000 * 60 * 60 * 24 * 7
      }
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
      { src: '~/plugins/paypal.js', ssr: false },
      { src: '~/plugins/ga.js', mode: 'client' },
      { src: '~/plugins/jsonld.js' }
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
      'nuxt-vuex-localstorage',
      '@nuxtjs/sitemap',
      'nuxt-compress'
    ],
    "nuxt-compress": {
      gzip: {
        cache: true
      },
      brotli: {
        threshold: 10240
      }
    },
    sitemap: {
      hostname: 'https://iconari.com',
      gzip: true,
      exclude: [
        '/dashboard/**',
        '/shop/checkout/complete'
      ],
      routes: [...productPaths]
    },
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
      transpile: [
        'nuxt-vuex-localstorage'
      ],
      maxChunkSize: 30000,
      /*
      ** You can extend webpack config here
      */
      extend (config, ctx) {
      }
    }
  }
}
