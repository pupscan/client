import Vue from 'vue'
import App from './src/App.vue'
import store from './src/store'
import filters from './src/filters'
import './style/style.scss' // eslint-disable-line import/no-unassigned-import

// Add filters
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  render: h => h(App)
})
