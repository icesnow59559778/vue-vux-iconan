import Vue from "vue"
import App from "./App"
import router from "./tools/router"
import store from "./tools/store"
import { ToastPlugin } from "vux"
import TestDirective from "./directives/common/TestDirective"
import api from "./tools/api"
import errorHandle from ".//tools/errorHandle"

Vue.config.productionTip = false;

const FastClick = require("fastclick");
FastClick.attach(document.body);

Vue.use(ToastPlugin, { type: "text", position: "bottom", width: "70vw" });
Vue.use(TestDirective);
Vue.use(api);
Vue.use(errorHandle);

Vue.prototype.instance = new Vue({
    el: ".app",
    router: router,
    store: store,
    template: "<App/>",
    components: { App }
});
