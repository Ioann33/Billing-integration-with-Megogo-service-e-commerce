<template>
    <div id="page">
        <head-bar></head-bar>
        <nav-bar></nav-bar>

        <div class="page-content header-clear-medium">

            <div class="content mt-2">
                <div class="d-flex">
                    <div class="align-self-center">
                        <h1 class="font-30" v-if="login">Логин в Megogo:  {{ login }}</h1>
                        <p class="mb-0 mt-n2 font-25 mt-5" v-if="current_tariff['plan_name']">Ваш активный тариф:  {{current_tariff['plan_name']}}</p>
                    </div>
                </div>
            </div>

            <div v-if="alertWindow">
                <a href="#" v-on:click.prevent="choiceService(t.serviceID, t.price, t.name)" class="card card-style" v-for="t in tariff_plans">
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
            </div>
            <div class="alert-warning text-center h-25" v-else>
                <div class="alert-info" v-if="current_tariff['plan_name']">Ваша текущая подписка : "{{ current_tariff['plan_name']}}", хотите сменить на "{{ name }} ?"</div>
                Подтвердить подключение подписки: "{{name}}".  Стоимость подключения:  {{ price}} грн
                <div style="display: flex; justify-content: space-around">
                    <button class="btn btn-success" v-on:click="connectService">Подтвердить</button>
                    <button class="btn btn-danger " v-on:click="cancel">Отменить</button>
                </div>
            </div>

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
            current_tariff : [],
            tariff_plans: [],
            alertWindow: true,
            name: null,
            price: null,
            serviceID: null,
        }
    },
    methods : {
        //TODO  сделать обработку ответа на массив и строку
        getUserInfo(){
            axios.get('/api/getUserInfo')
                .then(response => {
                    console.log(response.data.login)
                    if (response.data.plan_name){
                        this.current_tariff = response.data
                    }
                    if (response.data.login){
                        this.login = response.data.login
                    }

                })
                .catch(er => {
                    console.log(er.status)
                })
        },
        getTariffPlans(){
            axios.get('/api/getTariffPlans')
                .then(res => {
                    console.log(res)
                    this.tariff_plans = res.data;
                })
        },
        choiceService(serviceID, price, name){
            console.log(serviceID+price+name)
            this.serviceID = serviceID
            this.name = name;
            this.price = price
            this.alertWindow = false;
        },
        cancel(){
            this.alertWindow = true;
        },
        connectService(){
            if (this.current_tariff){
                console.log('turn off current')
                axios.get(`api/changeTariffStatus?serviceID=${this.current_tariff['plan_serviceID']}&action=unsubscribe`)
                    .then(res => {
                        console.log('status unsubscribe '+res.status)
                    })
            }
            console.log('turn on new tariff')
            axios.get(`api/connectService?serviceID=${this.serviceID}`)
                .then(res => {
                    console.log(res.data)
                })
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

