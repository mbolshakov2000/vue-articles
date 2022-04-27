import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InputLine from './components/InputLine.vue'

Vue.config.productionTip = false
Vue.component('InputLine', InputLine);

store.dispatch('fetchArticles');

new Vue({
  router,
  // data: store,
  store,
  render: h => h(App)
}).$mount('#app')
