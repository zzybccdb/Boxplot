import Vue from 'vue'
import App from './App.vue'
import * as PIXI from 'pixi.js'
import * as d3 from 'd3'

Vue.config.productionTip = false
Vue.prototype.$d3 = d3
Vue.prototype.$PIXI = PIXI
window.pixi = PIXI
new Vue({
  render: h => h(App),
}).$mount('#app')
