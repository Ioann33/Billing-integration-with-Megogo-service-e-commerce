<template>
    <div>
    <div v-for="(h, index) in history_pay">
        <div :id="'menu-expense-' + (index + 1)" class="menu menu-box-bottom menu-box-detached" >
            <div class="menu-title"><h1>{{ h.descript }}</h1><p class="color-highlight">Детали платежа</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
            <div class="divider divider-margins mb-1 mt-3"></div>
            <div class="content">
                <div class="row mb-0">
                    <div class="col-2">
<!--                        <span class="icon icon-xl rounded-xl bg-yellow-dark"><i class="fa fa-bolt font-30"></i></span>-->
                        <span v-if="h.type === 'tariff'"            class="icon icon-s rounded-xl me-3 bg-red-dark"> <i class="fa fa-bolt font-16"></i>      </span>
                        <span v-else-if="h.type === 'charge'"       class="icon icon-s rounded-xl me-3 bg-green-dark">  <i class="fa fa-money-bill-wave font-14"></i></span>
                        <span v-else-if="h.type === 'real_ip'"      class="icon icon-s rounded-xl me-3 bg-yellow-dark">   <i class="fab fa-apple font-18"></i>    </span>
                        <span v-else-if="h.type === 'paid_service'" class="icon icon-s rounded-xl me-3 bg-dark-dark">   <i class="fab fa-superpowers font-18"></i>       </span>
                        <span v-else                                class="icon icon-s rounded-xl me-3 bg-dark-dark">   <i class="fab fa-handshake-o font-18"></i>       </span>

                    </div>
                    <div class="col-10 ps-4">
                        <div class="d-flex">
                            <div><p class="font-700 color-theme ps-2">Сервис</p></div>
                            <div class="ms-auto"><p>{{ h.category }}</p></div>
                        </div>
                        <div class="d-flex">
                            <div><p class="font-700 color-theme ps-2">Дата</p></div>
                            <div class="ms-auto"><p>{{ h.date }}</p></div>
                        </div>
                    </div>
                </div>
                <div class="divider mt-3 mb-3"></div>
                <div class="row mb-0">
                    <div class="col-6"><h4 class="font-14">Подроюности</h4></div>
                    <div class="col-6"><h4 class="font-14 text-end">{{ h.descript }}</h4></div>
                    <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                    <div class="col-6"><h4 class="font-14 mt-1">Сумма</h4></div>
                    <div class="col-6">
<!--                        <h4 class="font-14 text-end mt-1"> {{ h.size_pay }}</h4>-->
                        <h4 v-if="h.type === 'tariff'"          class="text-end mt-1 font-14 color-red-dark"> {{ h.size_pay}}</h4>
                        <h4 v-else-if="h.type === 'charge'"          class="text-end mt-1 font-14 color-green-dark"> {{ h.size_pay}}</h4>
                        <h4 v-else-if="h.type === 'real_ip'"         class="text-end mt-1 font-14 color-red-dark"> {{ h.size_pay}}</h4>
                        <h4 v-else-if="h.type === 'paid_service'"    class="text-end mt-1 font-14 color-red-dark"> {{ h.size_pay}}</h4>
                        <h4 v-else class="mb-n1 font-18 color-blue-dark"> {{ h.size_pay}}</h4>
                    </div>
                    <div class="divider divider-margins w-100 mt-2 mb-2"></div>
                    <div class="col-6"><h4 class="font-14 mt-1"># платежа</h4></div>
                    <div class="col-6"><h4 class="font-14 text-end mt-1"> {{ h.bank_id}}</h4></div>
                    <div class="divider divider-margins w-100 mt-2 mb-3"></div>
                </div>
                <div><a href="#" class="close-menu btn btn-full btn-m bg-highlight rounded-sm text-uppercase font-800 mb-3">Close</a></div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "historyPayMenu",
    // data(){
    //     return {
    //         history_pay: [],
    //     }
    // },
    props: [
        'history_pay'
    ],
    mounted() {
        console.log('Component HistoryPayMenu mounted')
    },


}
</script>


