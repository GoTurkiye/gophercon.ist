import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import en from './languages/en.json'
import tr from './languages/tr.json'

Vue.use(VueI18n)
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


new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
