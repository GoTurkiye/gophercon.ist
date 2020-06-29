import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2'
import VueMeta from 'vue-meta'
import en from './languages/en.json'
import tr from './languages/tr.json'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueI18n)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

const languages = {
  en: en,
  tr: tr
}

const messages = Object.assign(languages)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

Vue.use(VueRouter)

const routes = [
  {name: 'en', path: '/en', component: App},
  {name: 'tr', path: '/tr', component: App},
  {name: '404', path: '*', redirect: {name: 'en'}},
]

const router = new VueRouter({
  routes,
  hashbang: false,
  history: true,
  mode: 'history'
});

Vue.use(VueMeta)

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
