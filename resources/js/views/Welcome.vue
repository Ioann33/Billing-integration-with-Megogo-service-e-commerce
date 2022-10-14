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
              // user_login: '',
              // user_password: ''

              user_login: 'graf',
              user_password: 'Rkfcnth45'
            }
        },
        methods: {
          login(){
              console.log('Auth...');
              axios.get('/sanctum/csrf-cookie').then(response => {
                  axios.post('/login', {
                      // email: this.user_login,
                      login: this.user_login,
                      password: this.user_password
                  })
                  .then(r => {
                      console.log('Auth...ok');
                      console.log(r);
                      console.log('token: '+r.config.headers['X-XSRF-TOKEN']);

                      localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN']);


                      // axios.get('/api/get').then(res => {
                      //     console.log('get: '+res.data)
                      // })

                      console.log('Redirect to /home');
                      this.$router.push({name: 'home'});
                      // location.reload();
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
