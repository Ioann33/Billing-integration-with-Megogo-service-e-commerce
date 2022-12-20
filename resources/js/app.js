

require('./bootstrap');

window.Vue = require('vue').default;



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('login-component', require('./components/LoginComponent.vue').default);

import router from "./router";
// Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
    clientId: '549865165453-sgda1rdhfpgcsghoffe8hshsu9iuqh6a.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'consent',
    plugin_name: "PWA",
    fetch_basic_profile: true,
}
Vue.use(GAuth, gauthOption)

const app = new Vue({
    el: '#app',
    components: {

    },
    router
});
