<template>
<div id="page">

    <head-bar></head-bar>


    <div class="page-content header-clear-medium">

        <card-balance
        :balance="userinfo.balance"
        :dogovor="userinfo.dogovor"></card-balance>

        <history-pay :history_pay="userinfo.history_pay"></history-pay>

        <footer-ads></footer-ads>

    </div>

    <nav-bar></nav-bar>

<!--<funds-menu-->
<!--    :history_pay="userinfo.history_pay"></funds-menu>-->

    <div id="menu-expense-1" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-2" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-3" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>
    <div id="menu-expense-4" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title"><h1>Subscription</h1><p class="color-highlight">Transaction Details for Payment</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-1 mt-3"></div>
        <div class="content">
            <div class="row mb-0">
                <div class="col-2">
                    <span class="icon icon-xl rounded-xl bg-dark-dark"><i class="fab fa-apple font-30"></i></span>
                </div>
                <div class="col-10 ps-4">
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Service</p></div>
                        <div class="ms-auto"><p>Apple Music</p></div>
                    </div>
                    <div class="d-flex">
                        <div><p class="font-700 color-theme ps-2">Date</p></div>
                        <div class="ms-auto"><p>15th July 2025</p></div>
                    </div>
                </div>
            </div>
            <div class="divider mt-3 mb-3"></div>
            <div class="row mb-0">
                <div class="col-6"><h4 class="font-14">Details</h4></div>
                <div class="col-6"><h4 class="font-14 text-end">Monthly Subscription</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Amount</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">$9.99 / month</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                <div class="col-6"><h4 class="font-14 mt-1">Transaction ID</h4></div>
                <div class="col-6"><h4 class="font-14 text-end mt-1">#987-456-165</h4></div>
                <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                <div class="col-12"><a href="#" class="close-menu btn btn-full btn-m bg-red-dark rounded-sm text-uppercase font-800 mb-3">Cancel Subscription</a></div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import navBar from "../components/navBar";
import headBar from "../components/headBar";
import CardBalance from "../components/cardBalance";
import HistoryPay from "../components/historyPay";
import FooterAds from "../components/footerAds";
import FundsMenu from "../components/fundsMenu";

export default {
    name: "Home3",
    components: {
        FundsMenu,
        FooterAds,
        HistoryPay,
        CardBalance,
        navBar,
        headBar
    },
    data(){
        return {
            userinfo: [],
            balance: '',

        }
    },
    mounted() {
        console.log('Component views/Home3 mounted.')
        this.getData()

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

            // axios.get('/sanctum/csrf-cookie').then(response => {
            //     axios.get('/api/userinfo').then(res => {
            //         console.log('get userinfo')
            //         console.log(res.data)
            //         //this.userinfo = res.data.data[0]
            //         this.userinfo = res.data
            //
            //     })
            //         .catch(err => {
            //             console.log(err.response)
            //         })
            // }).catch(err => {
            //     console.log('Auth...no');
            //     console.log(err.response.data);
            // });

            axios.get('/api/userinfo').then(res => {
                console.log('get userinfo')
                console.log(res.data)
                //this.userinfo = res.data.data[0]
                this.userinfo = res.data

            })
                .catch(err => {
                    console.log(err.response)
                })
        },
    }
}
</script>

