import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InputLine from './components/InputLine.vue'
import {Types} from './store/types'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.component('InputLine', InputLine);

store.dispatch(Types.actions.ARTICLES_LOAD);
store.dispatch(Types.actions.WORKERS_LOAD);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
