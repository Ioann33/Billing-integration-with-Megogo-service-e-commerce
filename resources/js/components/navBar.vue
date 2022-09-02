<template>

<!--    <div id="footer-bar" class="footer-bar-1">-->
<!--        &lt;!&ndash;<a @click="logout" href="#"><i class="fa fa-home"></i><span>Главная</span></a>&ndash;&gt;-->
<!--        <router-link :to="{name: 'home2'}"><i class="fa fa-home"></i><span>Главная</span></router-link>-->
<!--        <router-link :to="{name: 'prices'}"><i class="fa fa-star"></i><span>Тарифы</span></router-link>-->


<!--        <a href="#" class="active-nav"><i class="fa fa-heart"></i><span>Pages</span></a>-->
<!--        &lt;!&ndash;<a href="#"><i class="fa fa-hand-sparkles"></i><span>Новости и Акции</span></a>&ndash;&gt;-->
<!--        <router-link to="/news"><i class="fa fa-hand-sparkles"></i><span>Информация</span></router-link>-->
<!--        <a href="" data-menu="menu-settings"><i class="fa fa-cog"></i><span>Настройки</span></a>-->
<!--    </div>-->

    <div id="footer-bar" class="footer-bar-1">
        <router-link :to="{name: 'home2'}"><i class="fa fa-home"></i><span>Главная</span></router-link>
        <router-link :to="{name: 'prices'}"><i class="fa fa-star"></i><span>Тарифы</span></router-link>
        <router-link :to="{name: 'iptv'}"><i class="fa fa-tv"></i><span>Цифровое ТВ</span></router-link>
        <router-link :to="{name: 'contacts'}"><i class="fa fa-heart"></i><span>Контакты</span></router-link>
        <router-link :to="{name: 'news'}"><i class="fa fa-search"></i><span>Новости и Акции</span></router-link>
        <a href="#" data-menu="menu-settings"><i class="fa fa-cog"></i><span>Настройки</span></a>
    </div>

</template>

<script>
export default {
    name: "navBar",
    mounted() {
        console.log('Component navBar mounted')
    }

}
</script>


