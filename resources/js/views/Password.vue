<template>
    <div id="page">
        <head-bar></head-bar>
        <nav-bar></nav-bar>
        <div class="page-content header-clear-medium">
            <div class="card card-style bg-red-dark">
                <div class="content">
                    <h4 class="color-white">Введите пароль</h4>
                    <p class="color-white">
                        это пароль будет использован для  вашей учетной записи в Megogo
                    </p>
                </div>
            </div>
            <div class="card card-style">
                <div class="content mb-0">
                    <div class="input-style has-borders no-icon validate-field mb-4">
                        <input type="text" class="form-control validate-text" id="form3" placeholder="Password" v-model="password">
                        <label for="form3" class="color-highlight">Password</label>
                        <i class="fa fa-times disabled invalid color-red-dark"></i>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                    </div>
                    <a href="#" v-on:click.prevent="createUser" class="btn shadow-bg shadow-bg-m btn-m btn-full mb-3 rounded-s text-uppercase font-900 shadow-s bg-green-dark mt-1">Подтвердить</a>
                </div>
            </div>
            <div class="card card-style bg-red-dark" v-if="error">
                <div class="content">
                    <h4 class="color-white">{{error}}</h4>
                </div>
            </div>
        </div>

        <nav-bar-menu></nav-bar-menu>
    </div>
</template>

<script>

import headBar from "../components/headBar";
import navBar from "../components/navBar";
import navBarMenu from "../components/navBarMenu";
import footerAds from "../components/footerAds";

export default {
    name: "Password",
    components:{
        navBar, navBarMenu,
        headBar, footerAds
    },
    data(){
        return {
            password: null,
            error: null,
            serviceID: null,
        }
    },
    mounted() {

    },
    updated() {

    },
    methods: {
        createUser(){
            if (this.password){
                console.log('attempt create user')
                this.serviceID = localStorage.getItem('serviceID')
                axios.get(`api/createUser?password=${this.password}`)
                    .then(res => {
                        console.log(res.data)
                        console.log(res.status)
                        if (res.status === 201){
                            console.log('user created')
                            axios.get(`api/connectService?serviceID=${this.serviceID}`)
                                .then(res => {
                                    if (res.status === 200){
                                        localStorage.removeItem('serviceID')
                                        console.log('service connected')
                                        this.$router.push({name: 'iptv'})
                                    }
                                })
                        }
                    })
            }else{
                this.error = 'пароль обязательный для ввода'
            }

        }
    },
}
</script>

