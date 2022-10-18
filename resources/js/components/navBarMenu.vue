<template>

    <!--Menu Setting-->
    <div id="menu-settings" class="menu menu-box-bottom menu-box-detached">
        <div class="menu-title mt-0 pt-0"><h1>Налаштування користувача</h1><p class="color-highlight"> &nbsp</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
        <div class="divider divider-margins mb-n2"></div>
        <div class="content">
            <div class="list-group list-custom-small">
                <a href="#" data-toggle-theme data-trigger-switch="switch-dark-mode" class="pb-2 ms-n1">
                    <i class="fa font-12 fa-moon rounded-s bg-highlight color-white me-3"></i>
                    <span>Dark Mode</span>
                    <div class="custom-control scale-switch ios-switch">
                        <input data-toggle-theme type="checkbox" class="ios-input" id="switch-dark-mode">
                        <label class="custom-control-label" for="switch-dark-mode"></label>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
            <div class="list-group list-custom-large">
                <a  @click="logout" href="#" class="border-0">
                    <i class="fa font-14 fa-cog bg-blue-dark rounded-s"></i>
                    <span>Выход</span>
                    <strong>Переход на страницу ввода Логина и Пароля </strong>
                    <i class="fa fa-angle-right"></i>
                </a>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBarMenu",
    mounted() {
        console.log('Component navBarMenu mounted')
    },
    updated() {
        update_template()
    },
    methods:{
        logout() {

            axios.post('/logout')
                .then((response) => {
                    localStorage.removeItem('x_xsrf_token')
                    console.log('logout')
                    //this.$router.push({name: 'welcome'});
                    location.reload();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
    }
}
</script>


