import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
