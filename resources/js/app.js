

require('./bootstrap');

window.Vue = require('vue').default;



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('login-component', require('./components/LoginComponent.vue').default);

import router from "./router";
// Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
    clientId: '346017212428-4a81v69fbijosr9j84j4m07c0sl3qk84.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'consent',
    plugin_name: "TestGoogleAuthApp",
    fetch_basic_profile: true,
}
Vue.use(GAuth, gauthOption)

const app = new Vue({
    el: '#app',
    components: {

    },
    router
});
