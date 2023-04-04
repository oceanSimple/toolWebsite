import Vue from 'vue'
import App from './App.vue'

//导入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
//导入路由组件
import VueRouter from "vue-router";
import router from "@/components/router";
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
