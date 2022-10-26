<template>

    <div id="page">
<!--
        <div class="header header-fixed header-logo-center">
            <a href="index.html" class="header-title">Sticky Mobile</a>
            <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-arrow-left"></i></a>
            <a href="#" data-toggle-theme class="header-icon header-icon-4"><i class="fas fa-lightbulb"></i></a>
        </div>
-->
        <head-bar></head-bar>
        <nav-bar></nav-bar>

<!--        <div id="footer-bar" class="footer-bar-1">-->

<!--            <router-link :to="{name: 'home2'}"><i class="fa fa-home"></i><span>Home</span></router-link>-->

<!--            <a href="#" @click="logout"><i class="fa fa-star"></i><span>Logout</span></a>-->
<!--            <a href="index-pages.html" class="active-nav"><i class="fa fa-heart"></i><span>Pages</span></a>-->

<!--            <router-link :to="{name: 'news'}"><i class="fa fa-search"></i><span>News</span></router-link>-->
<!--            <a href="#" data-menu="menu-settings"><i class="fa fa-cog"></i><span>Settings</span></a>-->
<!--        </div>-->


        <div class="page-content header-clear-medium">


            <card-balance
                :balance="userinfo.balance"
                :dogovor="userinfo.dogovor"
            >
            </card-balance>



<!--     Включен / Отключен Интернет       -->
<!--            -->
            <div  v-if="userinfo.enable_internet == 1" class="ms-3 me-3 mb-4 alert alert-small rounded-s shadow-bg shadow-bg-l bg-green-dark" role="alert">
                <span><i class="fa fa-check-circle font-18"></i></span>
                <h4 class="text-uppercase color-white">Интернет подключен</h4>
                <strong>вы можете пользоваться интернетом</strong>
<!--                <button type="button" class="close color-white opacity-60 font-16" data-bs-dismiss="alert" aria-label="Close">&times;</button>-->
            </div>
<!--            -->
            <div v-else class="alert me-3 ms-3 rounded-s bg-red-dark shadow-bg shadow-bg-l mb-4" role="alert">
                <span class="alert-icon"><i class="fa fa-times-circle font-18"></i></span>
                <h4 class="text-uppercase color-white">Интернет отключен</h4>
                <div v-if="userinfo.prolong">
                    <strong>Но вы можете самостоятельно <br> </strong>
                    <strong>включить его на 1 день. <br></strong>
                    <div v-if="userinfo.prolong_time>0">
                        <strong>Осталось попыток: {{userinfo.prolong_time}} <br> </strong>
                        <strong class="alert-icon-text"><a @click.prevent="enable_internet" href="#" class="shadow-bg shadow-bg-m rounded-s btn btn-m mb-3 rounded-0 text-uppercase font-900 shadow-s border-0 color-white gradient-green">Включить Интернет на 1 день</a></strong> <br>
                    </div>
                    <div v-else>
                        <strong>Вы исчерпали все попытки продления Интернета <br> </strong>
                    </div>
                </div>
                <div v-else>
                    <strong> Вы не можете самостоятельно продлевать Интернет.<br> </strong>
                    <strong> Обратитесь в техническую поддержку <br> </strong>
                </div>
<!--                <button type="button" class="close color-white opacity-60 font-16" data-bs-dismiss="alert" aria-label="Close">&times;</button>-->
            </div>
 <!--     Включен / Отключен Интернет       -->


            <history-pay
                :history_pay="userinfo.history_pay_short"
            >
            </history-pay>


            <footer-ads></footer-ads>


        </div>
        <!-- End of Page Content-->
        <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

        <!-- Menu - пополнить счет -->
        <div id="menu-add-funds" class="menu menu-box-bottom menu-box-detached">
            <div class="menu-title"><h1>Пополнить счет</h1><p class="color-highlight">on-line</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="divider divider-margins mb-1 mt-3"></div>
            <div class="content px-1">

<!--                <div class="card card-style mx-3">-->
                    <div class="card card-style mx-0">
                        <div class="content">
                            <div class="row mb-0">
                                <a href="https://my-payments.privatbank.ua/mypayments/customauth/identification/fp/static?staticToken=cedc3b270b2557db02d8c5bca8ece918k0dbw2nq" class="close-menu col-6 pe-0">
<!--                                    <div class="col-6">-->
                                        <div class="card card-style m-0" style="background-image: url(images/privatbank.jpeg); width: 140px; height: 140px; background-size: 90%; background-repeat: no-repeat;"  data-card-height="140">
                                            <div class="card-top p-2">
                                                <span class="bg-green-dark p-2 py-1 rounded-sm font-13 font-600">on-line</span>
                                            </div>
    <!--                                        <div class="card-bottom text-center pb-3">-->
    <!--                                            <a href="#" data-toast="snackbar-favorites" class="icon icon-xxs bg-theme rounded-l shadow-xl rounded-m mx-2 color-theme"><i class="fa fa-heart color-red-dark font-12"></i></a>-->
    <!--                                            <a href="#" data-toast="snackbar-cart" class="icon icon-xxs bg-theme rounded-l shadow-xl rounded-m mx-2 color-theme"><i class="fa fa-shopping-bag font-12"></i></a>-->
    <!--                                        </div>-->
                                        </div>
                                        <h5 class="font-600 font-16 line-height-sm pt-3">PrivatBank</h5>
    <!--                                    <span class="color-blue-dark d-block font-11 font-600">Featured this Week</span>-->
    <!--                                    <h2 class="pb-3 mt-n1">$2999.<sup class="font-14 font-400 opacity-50">99</sup></h2>-->
<!--                                    </div>-->
                                </a>
                                <a href="https://easypay.ua/internet-tv/home-net-link" class="close-menu col-6 pe-0">
<!--                                <div class="col-6">-->
                                    <div class="card card-style m-0"  style="background-image: url(images/easypay.svg);  width: 140px; height: 140px; background-size: 90%; background-repeat: no-repeat;" data-card-height="140">
                                        <div class="card-top p-2">
                                            <span class="bg-red-dark p-2 py-1 rounded-sm font-13 font-600">on-line</span>
                                        </div>
<!--                                        <div class="card-bottom text-center pb-3">-->
<!--                                            <a href="#" data-toast="snackbar-favorites" class="icon icon-xxs bg-theme rounded-l shadow-xl rounded-m mx-2 color-theme"><i class="fa fa-heart color-red-dark font-12"></i></a>-->
<!--                                            <a href="#" data-toast="snackbar-cart" class="icon icon-xxs bg-theme rounded-l shadow-xl rounded-m mx-2 color-theme"><i class="fa fa-shopping-bag font-12"></i></a>-->
<!--                                        </div>-->
                                    </div>
                                    <h5 class="font-600 font-16 line-height-sm pt-3">EasyPay</h5>
<!--                                    <span class="color-red-dark d-block font-11 font-600">Out of Stock</span>-->
<!--                                    <h2 class="pb-3 mt-n1">$1999.<sup class="font-14 font-400 opacity-50">99</sup></h2>-->
<!--                                </div>-->
                                </a>
                            </div>
                        </div>
                    </div>
<!--                </div>-->
            </div>
        </div>



        <history-pay-menu
            :history_pay="userinfo.history_pay_short"
        ></history-pay-menu>



        <nav-bar-menu></nav-bar-menu>

    </div>

</template>

<script>

import navBar from "../components/navBar";
import navBarMenu from "../components/navBarMenu";
import headBar from "../components/headBar";
import HistoryPay from "../components/historyPay";
import CardBalance from "../components/cardBalance";
import footerAds from "../components/footerAds";

import FundsMenu from "../components/fundsMenu";
import HistoryPayMenu from "../components/HistoryPayMenu";

export default {
    name: "Home",
    components: {
        HistoryPayMenu,
        HistoryPay,
        CardBalance,
        FundsMenu,
        navBar, navBarMenu,
        headBar,
        footerAds
    },
    data(){
        return {
            userinfo: [],
        }
    },
    mounted() {
        console.log('Component views/Home mounted....')

        axios.get('/api/userinfo').then(res => {
            console.log('userinfo: ')
            console.log(res.data)
            //this.userinfo = res.data.data[0]
            this.userinfo = res.data.data[0]
            this.userinfo.history_pay_short = this.userinfo.history_pay.slice(0,5)
        }).catch(err => {
                console.log(err.response)
        })


        console.log('Component views/Home mounted......done!')
    },
    created(){
        console.log('Component views/Home created.')
    },
    updated() {
        console.log('updated')
        update_template()
    },
    methods: {
        enable_internet(){
            console.log('do enable')
            axios.post('/api/enableinternet').then(res => {
                console.log('enableinsternet(): '+ res.data)
                if(res.data)
                    this.userinfo.enable_internet = res.data
                else
                    console.error('не получилось включить интернет')
            }).catch(err => {
                    console.log(err.response)
            })
        },
        //  getData() {
        //     // axios.get('/api/balance').then(res => {
        //     //     console.log('get balance')
        //     //     console.log(res.data)
        //     //     this.balance = res.data
        //     // })
        //     // .catch(err => {
        //     //     console.log('/Home page - auth ERROR!');
        //     //     console.log(err.response)
        //     // })
        //
        //     axios.get('/api/userinfo').then(res => {
        //         console.log('getData() - userinfo')
        //         console.log(res.data)
        //         //this.userinfo = res.data.data[0]
        //         this.userinfo = res.data.data[0]
        //         this.userinfo.history_pay_short = this.userinfo.history_pay.slice(0,5)
        //     })
        //     .catch(err => {
        //         console.log(err.response)
        //     })
        // },

        logout() {
            axios.post('/logout')
                .then((response) => {
                    localStorage.removeItem('x_xsrf_token')
                    console.log('logout')
                    //this.$router.push({name: 'welcome'});
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    },
    computed:{
        // shortHistoryPay(){
        //     console.log('computed')
        //     return this.userinfo.history_pay.slice(0,5)
        // }
    }
}
</script>

