<template>
    <div id="page">
        <head-bar></head-bar>
        <nav-bar></nav-bar>

        <div class="page-content header-clear-medium">

            <div class="content mt-2">
                <div class="d-flex">
                    <div class="align-self-center">
                        <h1 class="font-30">Тарифы Частный сектор</h1>
                        <p class="mb-0 mt-n2 font-11">Интернет</p>
                    </div>
                </div>
            </div>

            <a href="#" class="card card-style" v-for="p in prices_private">
                <div class="card mb-0" data-card-height="155" style="background-image:url(images/bg1.jpeg)">
                    <div class="card-top m-2">
                        <p class="px-3 py-1 color-black rounded-s text-uppercase font-700 bg-white float-end font-15"> {{ p.cost}} ₴</p>
                    </div>
                    <div class="card-bottom px-3 py-2">
                        <h1 class="color-white font-28 pb-1">{{ p.name }}</h1>
                        <p class="color-white opacity-50 mb-2">
                            {{ p.features }}
                        </p>
                    </div>
                    <div class="card-overlay bg-gradient"></div>
                </div>
            </a>

            <div class="splide single-slider slider-no-arrows slider-no-dots visible-slider" id="double-slider-2">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-for="p in prices_private">
                            <div class="card card-style mx-3">
                                <img src="images/store/2w.png" class="img-fluid my-3">
                                <div class="content">
                                    <h3 class="mb-0">{{ p.name }}</h3>
                                  <!--  <a href="#">
                                        <i class="fa fa-star color-yellow-dark font-10"></i>
                                        <i class="fa fa-star color-yellow-dark font-10"></i>
                                        <i class="fa fa-star color-yellow-dark font-10"></i>
                                        <i class="fa fa-star color-yellow-dark font-10"></i>
                                        <i class="fa fa-star color-yellow-dark font-10"></i>
                                        <span class="font-11 ps-2 color-theme opacity-30">Based on 331 Reviews</span>
                                    </a> -->
                                    <h5 class="font-13 font-600 opacity-50 pt-1 pb-2">{{ p.features }}</h5>
                                    <div class="divider mb-2"></div>
                                    <div class="d-flex">
                                        <div class="align-self-center">
                                            <h1 class="mt-1 mb-n2 font-800"> {{ p.cost }} <sup class="font-400 font-14">₴</sup></h1>
                                            <!--<span class="opacity-60 font-11"><del>$299<sup>.99</sup></del> (- 40%)</span>-->
                                        </div>
                                        <!--<div class="align-self-center ms-auto">
                                            <a href="#" data-toast="snackbar-favorites" class="icon icon-s bg-theme rounded-l shadow-xl rounded-m ms-2 color-theme"><i class="fa fa-heart color-red-dark font-14"></i></a>
                                            <a href="#" data-toast="snackbar-cart" class="icon icon-s bg-theme rounded-l shadow-xl rounded-m ms-2 color-theme"><i class="fa fa-shopping-bag font-14"></i></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content mt-2">
                <div class="d-flex">
                    <div class="align-self-center">
                        <h1 class="font-30">Тарифы высотки</h1>
                        <p class="mb-0 mt-n2 font-11">Интернет</p>
                    </div>
                    <div class="align-self-center ms-auto">
                        <a href="#" class="icon icon-s bg-theme rounded-l shadow-l rounded-m ms-2 color-theme"><i class="fa fa-heart color-red-dark font-14"></i></a>
                        <a href="#" class="icon icon-s bg-theme rounded-l shadow-l rounded-m ms-2 color-theme"><i class="fa fa-shopping-bag font-14"></i></a>
                    </div>
                </div>
            </div>


            <div class="splide single-slider slider-no-arrows slider-no-dots visible-slider" id="double-slider-3">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-for="p in prices_private">
                            <div class="card card-style mx-3">
                                <img src="images/store/2w.png" class="img-fluid my-3">
                                <div class="content">
                                    <h3 class="mb-0">{{ p.name }}</h3>
                                    <!--  <a href="#">
                                          <i class="fa fa-star color-yellow-dark font-10"></i>
                                          <i class="fa fa-star color-yellow-dark font-10"></i>
                                          <i class="fa fa-star color-yellow-dark font-10"></i>
                                          <i class="fa fa-star color-yellow-dark font-10"></i>
                                          <i class="fa fa-star color-yellow-dark font-10"></i>
                                          <span class="font-11 ps-2 color-theme opacity-30">Based on 331 Reviews</span>
                                      </a> -->
                                    <h5 class="font-13 font-600 opacity-50 pt-1 pb-2">{{ p.features }}</h5>
                                    <div class="divider mb-2"></div>
                                    <div class="d-flex">
                                        <div class="align-self-center">
                                            <h1 class="mt-1 mb-n2 font-800"> {{ p.cost }} <sup class="font-400 font-14">₴</sup></h1>
                                            <!--<span class="opacity-60 font-11"><del>$299<sup>.99</sup></del> (- 40%)</span>-->
                                        </div>
                                        <!--<div class="align-self-center ms-auto">
                                            <a href="#" data-toast="snackbar-favorites" class="icon icon-s bg-theme rounded-l shadow-xl rounded-m ms-2 color-theme"><i class="fa fa-heart color-red-dark font-14"></i></a>
                                            <a href="#" data-toast="snackbar-cart" class="icon icon-s bg-theme rounded-l shadow-xl rounded-m ms-2 color-theme"><i class="fa fa-shopping-bag font-14"></i></a>
                                        </div>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer-ads></footer-ads>
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
    name: "Prices",
    components:{
        navBar, navBarMenu,
        headBar, footerAds
    },

    data(){
        return {
            prices_private: [
                {
                    'name': 'Безлим-20',
                    'cost': '150',
                    'features': 'достаточно для одного человека'
                },
                {
                    'name': 'Безлим-50',
                    'cost': '210',
                    'features': 'комфортно пользоваться нескольким людям'
                },
                {
                    'name': 'Безлим-100',
                    'cost': '250',
                    'features': 'небольшая доплата, а возможностей вагон'
                },
                {
                    'name': 'Безлим-500',
                    'cost': '450',
                    'features': 'делай, все что хочешь - скорости хватит всем'
                }
            ]

        }
    },
    updated() {
         //init_template2()
    },
    mounted() {
        init_template2()
    }
}
</script>

