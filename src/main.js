import Vue from 'vue'
import App from './App.vue'
import InputLine from './components/InputLine.vue'
Vue.config.productionTip = false
Vue.component('InputLine', InputLine);
new Vue({
  render: h => h(App),
}).$mount('#app')
