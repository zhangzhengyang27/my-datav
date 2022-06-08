import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'
import './plugins/vcharts'
import ECharts from 'echarts'

// 百度官方提供的插件
import VueECharts from 'vue-echarts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
// v-chart 映射到的是 VueECharts
Vue.component('v-chart', VueECharts)

// "v-charts": "^1.19.0", 是饿了么官方提供的，不推荐使用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
