

require('./bootstrap');

window.Vue = require('vue').default;



// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('login-component', require('./components/LoginComponent.vue').default);

import router from "./router";


const app = new Vue({
    el: '#app',
    components: {

    },
    router
});
