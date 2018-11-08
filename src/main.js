import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'

import Buefy from 'buefy'
import VueTextareaAutosize from 'vue-textarea-autosize'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueTextareaAutosize)

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