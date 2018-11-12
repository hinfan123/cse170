import Vue from 'vue'
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

Vue.mixin({
  methods: {
    genURL: function (url) {
			let actual = url? url :
					'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg'
			return 'url(' + actual + ')'
		}
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')