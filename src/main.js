// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Button } from 'element-ui';
Vue.use(Button);
Vue.config.productionTip = false;
/* eslint-disable no-new */
var app = new Vue({
    el: '#app',
    router: router,
    components: { App: App },
    template: '<App/>'
});
//# sourceMappingURL=main.js.map