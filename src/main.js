import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InputLine from './components/InputLine.vue'
import {Types} from './store/types'

Vue.config.productionTip = false
Vue.component('InputLine', InputLine);

store.dispatch(Types.actions.ARTICLES_LOAD);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
