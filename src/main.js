import Vue from 'vue'
import App from './App.vue'
import './assets/css/commons.css'
import store from './store'
//不显示提示信息
Vue.config.productionTip = false
// 创建一个vue实例
new Vue({
  store,

  // 利用render函数渲染APP.vue组件到容器中
  // 挂载到id为APP的容器
  render: h => h(App)
}).$mount('#app')
