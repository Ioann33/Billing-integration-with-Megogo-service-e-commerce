<template>
    <div id="page">
        <head-bar></head-bar>
        <nav-bar></nav-bar>
        <div class="page-content header-clear-medium">
            <div class="card card-style bg-yellow-dark">
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
                        <input type="email" class="form-control validate-text" id="form2" placeholder="Email" v-model="email" readonly>
                        <label for="form2" class="color-highlight">Email</label>
                        <i class="fa fa-times disabled invalid color-red-dark"></i>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                    </div>
                    <div class="input-style has-borders no-icon validate-field mb-4">
                        <input type="text" class="form-control validate-text" id="form3" placeholder="Пароль | минимум 6 символов" v-model="password">
                        <label for="form3" class="color-highlight">Password</label>
                        <i class="fa fa-times disabled invalid color-red-dark"></i>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                    </div>
                    Эти данные необходимы для входа в приложение Megogo на Вашем устройстве (ТВ-приставка, Телевизор или в Вашем смартфоне)
                    <a href="#" v-on:click.prevent="savePass" class="btn shadow-bg shadow-bg-m btn-m btn-full mb-3 rounded-s text-uppercase font-900 shadow-s bg-green-dark mt-1">Подтвердить</a>
                    <a href="#" v-on:click.prevent="cancel" class="btn shadow-bg shadow-bg-m btn-m btn-full mb-3 rounded-s text-uppercase font-900 shadow-s bg-red-dark mt-1">Отменить</a>
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
    name: "ChangePassword",
    components:{
        navBar, navBarMenu,
        headBar, footerAds
    },
    data(){
        return {
            email: null,
            password: null,
            error: null,
        }
    },
    mounted() {
        this.email = localStorage.getItem('email')
    },
    updated() {

    },
    methods: {
        cancel(){
            localStorage.removeItem('email')
            this.$router.push({name: 'iptv'})
        },
        savePass(){
            axios.post('api/changeCredentials',{
                email: this.email,
                password: this.password
            })
                .then(res =>{
                    if (res.status === 200){
                        localStorage.removeItem('email')
                        this.$router.push({name: 'iptv'})
                    }
                })
                .catch(err =>{
                    if (err.response.status === 422){
                        this.error = 'Введенный пароль неправильного формата!'
                    }
                })
        }
    },
}
</script>

