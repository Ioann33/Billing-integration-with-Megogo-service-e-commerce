<template>
    <div id="page">
        <div class="page-content pb-0">

            <div data-card-height="cover" class="card">
                <div class="card-top notch-clear">
                    <a href="#" data-back-button class="me-auto icon icon-m"><i class="font-14 fa fa-arrow-left color-white"></i></a>
                </div>
                <div class="card-center bg-white rounded-m mx-3">
                    <div class="p-4">
                        <h1 class="text-center font-800 font-40 mb-1">Вход</h1>
                        <p class="color-highlight text-center font-12">в личный кабинет</p>

                        <div class="input-style no-borders has-icon validate-field">
                            <i class="fa fa-user"></i>
                            <input v-model="user_login" type="name" class="form-control validate-name" id="form1a" placeholder="Логин">
                            <label for="form1a" class="color-blue-dark font-10 mt-1">Логин</label>
                            <i class="fa fa-times disabled invalid color-red-dark"></i>
                            <i class="fa fa-check disabled valid color-green-dark"></i>
                            <em>(обязательно)</em>
                        </div>

                        <div class="input-style no-borders has-icon validate-field mt-4">
                            <i class="fa fa-lock"></i>
                            <input
                                v-model="user_password"
                                v-on:keydown.enter="login"
                                type="password"
                                class="form-control validate-password"
                                id="form3a"
                                placeholder="Пароль"
                            >
                            <label for="form3a" class="color-blue-dark font-10 mt-1">Пароль</label>
                            <i class="fa fa-times disabled invalid color-red-dark"></i>
                            <i class="fa fa-check disabled valid color-green-dark"></i>
                            <em>(обязательно)</em>
                        </div>

                        <div class="d-flex mt-4 mb-4">
                            <div class="w-50 font-11 pb-2 color text-start"><a href="page-signup-4.html">Хочу подключиться</a></div>
                            <div class="w-50 font-11 pb-2 text-end"><a href="page-forgot-4.html">Забыл пароль</a></div>
                        </div>
                        <a @click.prevent="login" href="#" class="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight">Вход</a>
                        <a @click.prevent="loginByGoogle" style="margin-top: 10px" class="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-blue-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px" height="20px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" class="lazy-loaded">
                                <g>
                                    <path style="fill:#E94435" d="M12.1,5.8c1.6-0.1,3.1,0.5,4.3,1.6l2.6-2.7c-1.9-1.8-4.4-2.7-6.9-2.7c-3.8,0-7.2,2-9,5.3l3,2.4C7.1,7.2,9.5,5.7,12.1,5.8z"></path>
                                    <path style="fill:#F8BB15" d="M5.8,12c0-0.8,0.1-1.6,0.4-2.3l-3-2.4C2.4,8.7,2,10.4,2,12c0,1.6,0.4,3.3,1.1,4.7l3.1-2.4C5.9,13.6,5.8,12.8,5.8,12z"></path>
                                    <path style="fill:#34A751" d="M15.8,17.3c-1.2,0.6-2.5,1-3.8,0.9c-2.6,0-4.9-1.5-5.8-3.9l-3.1,2.4C4.9,20,8.3,22.1,12,22c2.5,0.1,4.9-0.8,6.8-2.3L15.8,17.3z"></path>
                                    <path style="fill:#547DBE" d="M22,12c0-0.7-0.1-1.3-0.2-2H12v4h6.1v0.2c-0.3,1.3-1.1,2.4-2.2,3.1l3,2.4C21,17.7,22.1,14.9,22,12z"></path>
                                </g>
                            </svg>
                            <span class="google-sign-in-cta__text">Вход через Google</span>
                        </a>
                    </div>
                </div>
                <div class="card-overlay-infinite preload-img" data-src="images/pictures/_bg-infinite.jpg"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return {
              user_login: '',
              user_password: '',
              google_id : '',
              // user_login: 'graf',
              // user_password: 'Rkfcnth45'
            }
        },
        methods: {
       async loginByGoogle(){
            let google_user = await this.$gAuth.signIn();
            this.google_id = google_user.getId();
            this.login()
           console.log(google_user.getId())
        },
            // loginByGoogle(){
            //     this.$gAuth.getAuthCode().then((authcode) => {
            //         console.log(authcode)
            //     });
            // },
          login(){
              console.log('Auth...');
              let resObj = {}
              axios.get('/sanctum/csrf-cookie').then(response => {
                  if (this.google_id){
                      resObj = {
                          google_id: this.google_id
                      }
                      this.google_id = '';
                  }else{
                      resObj = {
                          login: this.user_login,
                          password: this.user_password
                      }
                  }
                  axios.post('/login', resObj)
                  .then(r => {
                      console.log(r.data)
                      console.log('Auth...ok');
                      console.log(r);
                      console.log('token: '+r.config.headers['X-XSRF-TOKEN']);

                      localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN']);


                      // axios.get('/api/get').then(res => {
                      //     console.log('get: '+res.data)
                      // })

                      console.log('Redirect to /home');
                      this.$router.push({name: 'home'});
                      location.reload();
                  })
                  .catch(err => {
                      console.log('Auth...no');
                      console.log(err.response.data);
                  })
              })
              .catch(err => {
                      console.log('Auth...no');
                      console.log(err.response.data);
              });

          }
        },
        mounted() {
            console.log('Component Welcome mounted.')
            //init_template2()
            update_template()
        },
        updated() {
            console.log('Component Welcome updated.')
            //update_template()
        }

    }
</script>
