import Vue from 'vue'
import App from './App.vue'
import store from './store'
new Vue({
  el: '#app',
  render: h => h(App),
  store
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue