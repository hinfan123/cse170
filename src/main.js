import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)

Vue.directive('input-focus-on-create', {
  bind: function(el) {
    Vue.nextTick(() => {
        el.querySelector('input').focus()
    })
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')