<template>
    <div id="page">
        <head-bar></head-bar>
        <nav-bar></nav-bar>

        <div class="page-content header-clear-medium">

            <div class="content mt-2">
                <div class="d-flex">
                    <div class="align-self-center">
                        <h1 class="font-30" v-if="login">Логин в Megogo:  {{ login }}</h1>
                        <p class="mb-0 mt-n2 font-25 mt-5" v-if="current_tariff">Ваш тариф:  {{current_tariff}}</p>
                    </div>
                </div>
            </div>

            <a href="#" v-on:click.prevent="connectService(t.serviceID)" class="card card-style" v-for="t in tariff_plans">
                <div class="card mb-0" data-card-height="155" style="background-image:url(images/glavnoe.jpeg)">
                    <div class="card-top m-2">
                        <p class="px-3 py-1 color-black rounded-s text-uppercase font-700 bg-white float-end font-15"> {{t.price}} ₴</p>
                    </div>
                    <div class="card-bottom px-3 py-2">
                        <h1 class="color-white font-28 pb-1">{{ t.name }}</h1>
                        <p class="color-white opacity-50 mb-2">
                            {{ t.description }}
                        </p>
                    </div>
                    <div class="card-overlay bg-gradient"></div>
                </div>
            </a>

        <nav-bar-menu></nav-bar-menu>
    </div>
    </div>
</template>

<script>
import headBar from "../components/headBar";
import navBar from "../components/navBar";
import navBarMenu from "../components/navBarMenu";
import footerAds from "../components/footerAds";
export default {
    name: "Iptv",
    components:{
        navBar, navBarMenu,
        headBar, footerAds
    },

    data(){
        return {
            login: null,
            current_tariff : null,
            tariff_plans: [],
        }
    },
    methods : {
        //TODO  сделать обработку ответа на массив и строку
        getUserInfo(){
            axios.get('/api/getUserInfo')
                .then(response => {
                    console.log(response.data.data)
                    if (response.data.data.svod[0]){
                        this.current_tariff = response.data.data.svod[0].serviceName
                    }

                    this.login = response.data.data.login
                })
                .catch(console.log('some problem'))
        },
        getTariffPlans(){
            axios.get('/api/getTariffPlans')
                .then(res => {
                    this.tariff_plans = res.data.data;
                })
        },
        connectService(serviceID){
            console.log(serviceID)
        }
    },
    updated() {
         init_template2()
    },
    mounted() {
        this.getTariffPlans()
        this.getUserInfo()
        init_template2()
    }
}
</script>

