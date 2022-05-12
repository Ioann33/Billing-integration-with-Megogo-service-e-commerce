import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Welcome from "./views/Welcome";

import Home2 from "./views/Home2";
import Home3 from "./views/Home3";
import Prices from "./views/Prices";
import News from "./views/News";
import Contacts from "./views/Contacts";

const router = new vueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: 'root',
            component: Welcome
        },
        {
            path: "/home3",
            name: 'home3',
            component: Home3
        },        {
            path: "/home2",
            name: 'home2',
            component: Home2
        },
        {
            path: "/news",
            name: 'news',
            component: News
        },
        {
            path: "/contacts",
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/prices',
            name: 'prices',
            component: Prices
        },
        {
            path: "/welcome",
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/:catchAll(.*)*',
            name: "PageNotFound",
            component: Welcome
        }
    ]
})


router.beforeEach((to, from, next)=>{
    const token = localStorage.getItem('x_xsrf_token')

    if(!token){
        if(to.name==='welcome' || to.name==='root'){
            return next()
        } else {
            return next({
                name: 'welcome'
            })
        }
    }

    if((to.name==='welcome' || to.name==='root') && token){
        return next({
            name: 'home2'
        })
    }

    next()
})

export default router
