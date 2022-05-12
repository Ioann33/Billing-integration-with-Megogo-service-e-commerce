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
            <div class="menu-title"><h1>Add Funds</h1><p class="color-highlight">Top off your Account</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="divider divider-margins mb-1 mt-3"></div>
            <div class="content px-1">

                <div class="input-style input-style-always-active no-borders no-icon">
                    <label for="f1" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Add Funds To</label>
                    <select id="f1">
                        <option value="default" selected>Default Account</option>
                        <option value="1">Business Account</option>
                        <option value="2">Savings Account</option>
                    </select>
                    <span><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em></em>
                </div>

                <div class="input-style input-style-always-active no-borders no-icon">
                    <label for="f1a" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Add Funds From</label>
                    <select id="f1a">
                        <option value="default" selected>Visa Credit Card</option>
                        <option value="1">Mater Card Limited</option>
                        <option value="2">PayPal Account</option>
                    </select>
                    <span><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em></em>
                </div>

                <div class="input-style input-style-always-active validate-field no-borders no-icon">
                    <input type="number" class="form-control validate-number" id="f3ab" placeholder="12,250">
                    <label for="f3ab" class="color-theme opacity-30 text-uppercase font-700 font-10 mt-1">Amount in USD</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em>(required)</em>
                </div>
                <a href="#" class="close-menu btn btn-full btn-m bg-highlight rounded-sm text-uppercase font-800 mb-4">Add Funds</a>
            </div>
        </div>



        <history-pay-menu
            :history_pay="userinfo.history_pay_short"
        ></history-pay-menu>



<nav-bar-menu></nav-bar-menu>


        <!-- Menu Settings Highlights-->
        <!-- <div id="menu-highlights" class="menu menu-box-bottom menu-box-detached">
            <div class="menu-title"><h1>Highlights</h1><p class="color-highlight">Any Element can have a Highlight Color</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="divider divider-margins mb-n2"></div>
            <div class="content">
                <div class="highlight-changer">
                    <a href="#" data-change-highlight="blue"><i class="fa fa-circle color-blue-dark"></i><span class="color-blue-light">Default</span></a>
                    <a href="#" data-change-highlight="red"><i class="fa fa-circle color-red-dark"></i><span class="color-red-light">Red</span></a>
                    <a href="#" data-change-highlight="orange"><i class="fa fa-circle color-orange-dark"></i><span class="color-orange-light">Orange</span></a>
                    <a href="#" data-change-highlight="pink2"><i class="fa fa-circle color-pink2-dark"></i><span class="color-pink-dark">Pink</span></a>
                    <a href="#" data-change-highlight="magenta"><i class="fa fa-circle color-magenta-dark"></i><span class="color-magenta-light">Purple</span></a>
                    <a href="#" data-change-highlight="aqua"><i class="fa fa-circle color-aqua-dark"></i><span class="color-aqua-light">Aqua</span></a>
                    <a href="#" data-change-highlight="teal"><i class="fa fa-circle color-teal-dark"></i><span class="color-teal-light">Teal</span></a>
                    <a href="#" data-change-highlight="mint"><i class="fa fa-circle color-mint-dark"></i><span class="color-mint-light">Mint</span></a>
                    <a href="#" data-change-highlight="green"><i class="fa fa-circle color-green-light"></i><span class="color-green-light">Green</span></a>
                    <a href="#" data-change-highlight="grass"><i class="fa fa-circle color-green-dark"></i><span class="color-green-dark">Grass</span></a>
                    <a href="#" data-change-highlight="sunny"><i class="fa fa-circle color-yellow-light"></i><span class="color-yellow-light">Sunny</span></a>
                    <a href="#" data-change-highlight="yellow"><i class="fa fa-circle color-yellow-dark"></i><span class="color-yellow-light">Goldish</span></a>
                    <a href="#" data-change-highlight="brown"><i class="fa fa-circle color-brown-dark"></i><span class="color-brown-light">Wood</span></a>
                    <a href="#" data-change-highlight="night"><i class="fa fa-circle color-dark-dark"></i><span class="color-dark-light">Night</span></a>
                    <a href="#" data-change-highlight="dark"><i class="fa fa-circle color-dark-light"></i><span class="color-dark-light">Dark</span></a>
                    <div class="clearfix"></div>
                </div>
                <a href="#" data-menu="menu-settings" class="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4">Back to Settings</a>
            </div>
        </div> -->
        <!-- Menu Settings Backgrounds-->
        <!--  <div id="menu-backgrounds" class="menu menu-box-bottom menu-box-detached">
            <div class="menu-title"><h1>Backgrounds</h1><p class="color-highlight">Change Page Color Behind Content Boxes</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="divider divider-margins mb-n2"></div>
            <div class="content">
                <div class="background-changer">
                    <a href="#" data-change-background="default"><i class="bg-theme"></i><span class="color-dark-dark">Default</span></a>
                    <a href="#" data-change-background="plum"><i class="body-plum"></i><span class="color-plum-dark">Plum</span></a>
                    <a href="#" data-change-background="magenta"><i class="body-magenta"></i><span class="color-dark-dark">Magenta</span></a>
                    <a href="#" data-change-background="dark"><i class="body-dark"></i><span class="color-dark-dark">Dark</span></a>
                    <a href="#" data-change-background="violet"><i class="body-violet"></i><span class="color-violet-dark">Violet</span></a>
                    <a href="#" data-change-background="red"><i class="body-red"></i><span class="color-red-dark">Red</span></a>
                    <a href="#" data-change-background="green"><i class="body-green"></i><span class="color-green-dark">Green</span></a>
                    <a href="#" data-change-background="sky"><i class="body-sky"></i><span class="color-sky-dark">Sky</span></a>
                    <a href="#" data-change-background="orange"><i class="body-orange"></i><span class="color-orange-dark">Orange</span></a>
                    <a href="#" data-change-background="yellow"><i class="body-yellow"></i><span class="color-yellow-dark">Yellow</span></a>
                    <div class="clearfix"></div>
                </div>
                <a href="#" data-menu="menu-settings" class="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4">Back to Settings</a>
            </div>
        </div> -->

        <!-- Menu Share -->
        <!--<div id="menu-share" class="menu menu-box-bottom menu-box-detached">
            <div class="menu-title mt-n1"><h1>Share the Love</h1><p class="color-highlight">Just Tap the Social Icon. We'll add the Link</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="content mb-0">
                <div class="divider mb-0"></div>
                <div class="list-group list-custom-small list-icon-0">
                    <a href="auto_generated" class="shareToFacebook external-link">
                        <i class="font-18 fab fa-facebook-square color-facebook"></i>
                        <span class="font-13">Facebook</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="auto_generated" class="shareToTwitter external-link">
                        <i class="font-18 fab fa-twitter-square color-twitter"></i>
                        <span class="font-13">Twitter</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="auto_generated" class="shareToLinkedIn external-link">
                        <i class="font-18 fab fa-linkedin color-linkedin"></i>
                        <span class="font-13">LinkedIn</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="auto_generated" class="shareToWhatsApp external-link">
                        <i class="font-18 fab fa-whatsapp-square color-whatsapp"></i>
                        <span class="font-13">WhatsApp</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                    <a href="auto_generated" class="shareToMail external-link border-0">
                        <i class="font-18 fa fa-envelope-square color-mail"></i>
                        <span class="font-13">Email</span>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </div>
        </div> -->

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
        console.log('Component views/Home2 mounted....')
         this.getData()


        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                console.log('onreadystatechange=complete in view/Home2')
            }
        }

        // this.$nextTick(function () {
        //     console.log('$nextTick')
        // })

        console.log('Component views/Home2 mounted......done!')
    },
    created(){
        console.log('Component views/Home2 created.')
    },
    updated() {
        console.log('updated')
        init_template2()
    },
    methods: {
         getData() {
            // axios.get('/api/balance').then(res => {
            //     console.log('get balance')
            //     console.log(res.data)
            //     this.balance = res.data
            // })
            // .catch(err => {
            //     console.log('/Home page - auth ERROR!');
            //     console.log(err.response)
            // })

            axios.get('/api/userinfo').then(res => {
                console.log('getData() - userinfo')
                console.log(res.data)
                //this.userinfo = res.data.data[0]
                this.userinfo = res.data
                this.userinfo.history_pay_short = this.userinfo.history_pay.slice(0,5)
            })
            .catch(err => {
                console.log(err.response)
            })
        },

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

