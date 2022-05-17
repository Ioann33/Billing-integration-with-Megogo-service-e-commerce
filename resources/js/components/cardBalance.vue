<template>
<div>
    <div data-card-height="150" style="height: 150px" class="card card-style rounded-m shadow-xl preload-img" data-src="images/bg4.webp">
        <div class="card-top mt-3 ms-3">
            <h1 class="color-white mb-0 mb-n2 font-22"># {{ dogovor }} </h1>
            <p class="bottom-0 color-white opacity-50 under-heading font-11 font-700">Номер договора</p>
        </div>
        <div class="card-top mt-3 me-3">
            <a href="#" data-menu="menu-add-funds" class="mt-1 float-end text-uppercase font-900 font-11 btn btn-s rounded-s shadow-l bg-green-dark">Пополнить</a>
        </div>
        <div class="card-center text-center">
            <h1 class="color-white fa-4x">{{ balance }} ₴ </h1>
            <p class="color-white opacity-70 font-11 mb-n5">Баланс</p>
        </div>
        <!-- <div class="card-bottom">
            <p class="ms-3 font-10 font-500 opacity-50 color-white mb-2">Exp: 10/22</p>
        </div> -->
        <!-- <div class="card-bottom">
            <p class="text-end me-3 font-10 font-500 opacity-50 color-white mb-2"><i class="fab fa-cc-visa font-20 rotate-90"></i></p>
        </div> -->
        <div class="card-overlay bg-black opacity-40"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "cardBalance",
    props: [
        'balance',
        'dogovor'
    ],
    mounted() {
        console.log('Component CardBalance mounted')
    },
    // computed:{
    //     balance_(){
    //         return this.balance.toLocaleString(undefined, {minimumFractionDigits: 2})
    //     }
    // }
}
</script>

