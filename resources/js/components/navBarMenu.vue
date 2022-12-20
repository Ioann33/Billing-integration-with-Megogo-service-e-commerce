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
                <a @click="removeGoogle" class="border-0" v-if="google_id">
                    <img v-bind:src="avatar" style="border-radius: 10px; width: 32px; margin-right: 10px" alt="avatar">

                    <span>Выйти из Google аккаунта</span>
                    <strong>{{this.email}}</strong>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a @click="attachGoogle" class="border-0" v-else>
                    <i class="bg-gray-light" style="border-radius: 10px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" class="lazy-loaded">
                            <g>
                                <path style="fill:#E94435" d="M12.1,5.8c1.6-0.1,3.1,0.5,4.3,1.6l2.6-2.7c-1.9-1.8-4.4-2.7-6.9-2.7c-3.8,0-7.2,2-9,5.3l3,2.4C7.1,7.2,9.5,5.7,12.1,5.8z"></path>
                                <path style="fill:#F8BB15" d="M5.8,12c0-0.8,0.1-1.6,0.4-2.3l-3-2.4C2.4,8.7,2,10.4,2,12c0,1.6,0.4,3.3,1.1,4.7l3.1-2.4C5.9,13.6,5.8,12.8,5.8,12z"></path>
                                <path style="fill:#34A751" d="M15.8,17.3c-1.2,0.6-2.5,1-3.8,0.9c-2.6,0-4.9-1.5-5.8-3.9l-3.1,2.4C4.9,20,8.3,22.1,12,22c2.5,0.1,4.9-0.8,6.8-2.3L15.8,17.3z"></path>
                                <path style="fill:#547DBE" d="M22,12c0-0.7-0.1-1.3-0.2-2H12v4h6.1v0.2c-0.3,1.3-1.1,2.4-2.2,3.1l3,2.4C21,17.7,22.1,14.9,22,12z"></path>
                            </g>
                        </svg>
                    </i>

                    <span>Прязвязать Google аккаунт</span>
                    <strong>Возможность входа через Google</strong>
                    <i class="fa fa-angle-right"></i>
                </a>
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
    data(){
        return {
            email: '',
            google_id: '',
            name: '',
            avatar: '',
        }
    },
    mounted() {
        console.log('Component navBarMenu mounted')
        this.getGoogleAccount()
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
        async attachGoogle(){
            let google_user = await this.$gAuth.signIn();
            this.email = google_user.vv.hw;
            this.google_id = google_user.vv.tY;
            this.name = google_user.vv.yf;
            this.avatar = google_user.vv.TO;
            this.updateUser();
        },
        removeGoogle(){
            axios.get('/api/removeGoogleAccount')
                .then(r => {
                    this.email = ''
                    this.google_id = ''
                    this.avatar = ''
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        },
        getGoogleAccount(){
            axios.get('/api/getGoogleAccount')
                .then(r => {
                    this.email = r.data.email
                    this.google_id = r.data.google_id
                    this.avatar = r.data.avatar
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        },
        updateUser(){
            axios.post('/api/googleAttach', {
                    email: this.email,
                    google_id: this.google_id,
                    avatar: this.avatar,
            })
                .then(r => {
                    this.getGoogleAccount()
                })
                .catch(err => {
                    console.log(err.response.data);
                })
        }
    }
}
</script>


