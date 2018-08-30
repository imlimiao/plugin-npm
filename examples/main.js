// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from "./components/toast/index";
import TipsLayer from "./components/tipslayer/index";

Vue.config.productionTip = false

Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$TipsLayer = Vue.prototype.$TipsLayer = TipsLayer;
Vue.use(Toast);
Vue.use(TipsLayer);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
