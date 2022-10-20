<template>
<div>
    <div class="card card-style">
        <div class="content mb-0">
            <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-3 mt-n2">Последние начисления</h4>

            <!--<a href="#" data-menu="menu-expense-3" class="d-flex mb-3">
                <div class="align-self-center">
                    <span class="icon icon-s rounded-xl bg-dark-dark me-3"><i class="fab fa-apple font-18"></i></span>
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Пополнение счета</h1>
                    <p class="font-11 opacity-60">Терминал: E-pay</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-green-dark">₴ 55.19</h2>
                    <p class="font-12 opacity-50">15 апреля 2022</p>
                </div>
            </a>
            <a href="#" data-menu="menu-expense-2" class="d-flex mb-3">
                <div class="align-self-center">
                    <span class="icon icon-s rounded-xl bg-red-dark me-3"><i class="fa fa-mobile-alt font-14"></i></span>
                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-16">Списание: Безлим-20Мбит</h1>
                    <p class="font-11 opacity-60">абонентская плата: Интернет</p>
                </div>
                <div class="align-self-center ms-auto text-end">
                    <h2 class="mb-n1 font-18 color-red-dark">- ₴ 150</h2>
                    <p class="font-12 opacity-50">1 апреля 2022</p>
                </div>
            </a>-->


<div v-for="(h, index) in history_pay">
            <a href="#"  :data-menu="'menu-expense-' + (index + 1)" class="d-flex mb-3" >
<!--            <a href="#" data-menu="menu-expense-3" class="d-flex mb-3" >-->
                <div class="align-self-center">

                    <span      v-if="h.type === 'tariff'"       class="icon icon-s rounded-xl me-3 bg-red-dark">     <i class="fa fa-calendar-alt font-16"></i>      </span>
                    <span v-else-if="h.type === 'fresh_account'"       class="icon icon-s rounded-xl me-3 bg-green-dark">   <i class="fa fa-money-bill-wave font-14"></i></span>
                    <span v-else-if="h.type === 'real_ip'"      class="icon icon-s rounded-xl me-3 bg-yellow-dark">  <i class="fas fa-bolt font-18"></i>    </span>
                    <span v-else-if="h.type === 'iptv'"      class="icon icon-s rounded-xl me-3 bg-yellow-dark">  <i class="fas fa-tv font-18"></i>    </span>
                    <span v-else-if="h.type === 'paid_service'" class="icon icon-s rounded-xl me-3 bg-dark-dark">    <i class="fab fa-superpowers font-18"></i>       </span>
                    <span v-else-if="h.type === 'balance_9999'" class="icon icon-s rounded-xl me-3 bg-mint-dark">    <i class="fas fa-money-check font-18"></i>       </span>
                    <span v-else-if="h.type === 'internet_8888'" class="icon icon-s rounded-xl me-3 bg-blue-dark">    <i class="fas fa-globe font-18"></i>       </span>
                    <span v-else                                class="icon icon-s rounded-xl me-3 bg-dark-dark">    <i class="fab fa-handshake-o font-18"></i>       </span>

                </div>
                <div class="align-self-center">
                    <h1 class="mb-n2 font-14">{{ h.category }}</h1>
                    <p class="font-11 opacity-60">{{ h.descript }}</p>
                </div>
                <div class="align-self-center ms-auto text-end">

                    <h2 v-if="h.type === 'tariff'"               class="mb-n1 font-18 color-red-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else-if="h.type === 'fresh_account'"          class="mb-n1 font-18 color-green-dark">    {{ h.size_pay}} ₴ </h2>
                    <h2 v-else-if="h.type === 'real_ip'"         class="mb-n1 font-18 color-red-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else-if="h.type === 'iptv'"         class="mb-n1 font-18 color-red-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else-if="h.type === 'paid_service'"    class="mb-n1 font-18 color-red-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else-if="h.type === 'balance_9999'"    class="mb-n1 font-18 color-mint-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else-if="h.type === 'internet_8888'"    class="mb-n1 font-18 color-blue-dark">      {{ h.size_pay}} ₴</h2>
                    <h2 v-else class="mb-n1 font-18 color-blue-dark"> {{ h.size_pay}}</h2>

                    <p class="font-12 opacity-50"> {{ h.date }}</p>
                </div>
            </a>
</div>

<!--
                        <div class="divider"></div>
                        <a href="page-finance-transactions.html" class="btn-center btn-s mb-2 mt-n4 color-highlight font-800 text-center d-block">показать больше</a>
-->
        </div>
    </div>
</div>

<!--    <div class="card card-style">-->
<!--        <div class="content mb-0">-->
<!--            <h4 class="font-700 text-uppercase font-12 color-highlight opacity-70 mb-3 mt-n2">Последние начисления</h4>-->
<!--            &lt;!&ndash;-->
<!--                                <a href="#" data-menu="menu-expense-3" class="d-flex mb-3">-->
<!--                                    <div class="align-self-center">-->
<!--                                        <span class="icon icon-s rounded-xl bg-dark-dark me-3"><i class="fab fa-apple font-18"></i></span>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center">-->
<!--                                        <h1 class="mb-n2 font-16">Пополнение счета</h1>-->
<!--                                        <p class="font-11 opacity-60">Терминал: E-pay</p>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center ms-auto text-end">-->
<!--                                        <h2 class="mb-n1 font-18 color-green-dark">₴ 55.19</h2>-->
<!--                                        <p class="font-12 opacity-50">15 апреля 2022</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                                <a href="#" data-menu="menu-expense-3" class="d-flex mb-3">-->
<!--                                    <div class="align-self-center">-->
<!--                                        <span class="icon icon-s rounded-xl bg-red-dark me-3"><i class="fa fa-mobile-alt font-14"></i></span>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center">-->
<!--                                        <h1 class="mb-n2 font-16">Списание: Безлим-20Мбит</h1>-->
<!--                                        <p class="font-11 opacity-60">абонентская плата: Интернет</p>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center ms-auto text-end">-->
<!--                                        <h2 class="mb-n1 font-18 color-red-dark">- ₴ 150</h2>-->
<!--                                        <p class="font-12 opacity-50">1 апреля 2022</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                                <a href="#" data-menu="menu-expense-3" class="d-flex mb-3">-->
<!--                                    <div class="align-self-center">-->
<!--                                        <span class="icon icon-s rounded-xl bg-yellow-dark me-3"><i class="fa fa-bolt font-16"></i></span>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center">-->
<!--                                        <h1 class="mb-n2 font-16">Списание: Пакет МАКСИ</h1>-->
<!--                                        <p class="font-11 opacity-60">абонентская плата: ТВ</p>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center ms-auto text-end">-->
<!--                                        <h2 class="mb-n1 font-18 color-red-dark">₴ 140</h2>-->
<!--                                        <p class="font-12 opacity-50">1 апреля 2021</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--                                <a href="#" data-menu="menu-expense-1" class="d-flex mb-3">-->
<!--                                    <div class="align-self-center">-->
<!--                                        <span class="icon icon-s rounded-xl bg-yellow-dark me-3"><i class="fa fa-bolt font-16"></i></span>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center">-->
<!--                                        <h1 class="mb-n2 font-16">Списание: Пакет МАКСИ</h1>-->
<!--                                        <p class="font-11 opacity-60">абонентская плата: ТВ</p>-->
<!--                                    </div>-->
<!--                                    <div class="align-self-center ms-auto text-end">-->
<!--                                        <h2 class="mb-n1 font-18 color-red-dark">₴ 140</h2>-->
<!--                                        <p class="font-12 opacity-50">1 апреля 2021</p>-->
<!--                                    </div>-->
<!--                                </a>-->
<!--            &ndash;&gt;-->


<!--            <div  v-for="(h, index) in history_pay">-->
<!--                <a href="#" :data-menu="'menu-expense-' + (index + 1)" class="d-flex mb-3">-->
<!--                    <div class="align-self-center">-->

<!--                        <span v-if="h.type === 'tariff'"            class="icon icon-s rounded-xl me-3 bg-red-dark"> <i class="fa fa-bolt font-16"></i>      </span>-->
<!--                        <span v-else-if="h.type === 'charge'"       class="icon icon-s rounded-xl me-3 bg-green-dark">  <i class="fa fa-money-bill-wave font-14"></i></span>-->
<!--                        <span v-else-if="h.type === 'real_ip'"      class="icon icon-s rounded-xl me-3 bg-yellow-dark">   <i class="fab fa-apple font-18"></i>    </span>-->
<!--                        <span v-else-if="h.type === 'paid_service'" class="icon icon-s rounded-xl me-3 bg-dark-dark">   <i class="fab fa-superpowers font-18"></i>       </span>-->
<!--                        <span v-else                                class="icon icon-s rounded-xl me-3 bg-dark-dark">   <i class="fab fa-handshake-o font-18"></i>       </span>-->

<!--                    </div>-->
<!--                    <div class="align-self-center">-->
<!--                        <h1 class="mb-n2 font-16">{{ h.descript }}</h1>-->
<!--                        <p class="font-11 opacity-60">{{ h.category }}</p>-->
<!--                    </div>-->
<!--                    <div class="align-self-center ms-auto text-end">-->

<!--                        <h2 v-if="h.type === 'tariff'"          class="mb-n1 font-18 color-red-dark"> {{ h.size_pay}}</h2>-->
<!--                        <h2 v-else-if="h.type === 'charge'"          class="mb-n1 font-18 color-green-dark"> {{ h.size_pay}}</h2>-->
<!--                        <h2 v-else-if="h.type === 'real_ip'"         class="mb-n1 font-18 color-red-dark"> {{ h.size_pay}}</h2>-->
<!--                        <h2 v-else-if="h.type === 'paid_service'"    class="mb-n1 font-18 color-red-dark"> {{ h.size_pay}}</h2>-->
<!--                        <h2 v-else class="mb-n1 font-18 color-blue-dark"> {{ h.size_pay}}</h2>-->

<!--                        <p class="font-12 opacity-50"> {{ h.date }}</p>-->
<!--                    </div>-->
<!--                </a>-->
<!--            </div>-->


<!--            <div class="divider"></div>-->
<!--            <a href="page-finance-transactions.html" class="btn-center btn-s mb-2 mt-n4 color-highlight font-800 text-center d-block">показать больше</a>-->
<!--        </div>-->
<!--    </div>-->

</template>

<script>
export default {
    name: "historyPay",
    // data(){
    //     return {
    //         history_pay: [],
    //     }
    // },
    props: [
        'history_pay',
    ],
    mounted() {
        console.log('Component HistoryPay mounted')
    },


}
</script>

