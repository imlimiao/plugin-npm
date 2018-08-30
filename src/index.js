// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Toast from "./components/toast";
import TipsLayer from "./components/tipslayer";
Vue.config.productionTip = false
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.$TipsLayer = Vue.prototype.$TipsLayer = TipsLayer;
Vue.use(Toast);
Vue.use(TipsLayer);
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export {
    Toast,
    TipsLayer
}


/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     components: { App },
//     template: '<App/>'
// })
