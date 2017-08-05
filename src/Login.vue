<template>
    <div class="body gray-bg">
        <div class="loginColumns animated fadeInDown">
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <div class="ibox-content">
                        <h1 class="title">Clients {{ error }}</h1>
                        <form class="m-t" @submit.prevent="login">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>

                        </form>
                        <button class="btn btn-primary block full-width m-b" v-on:click="login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import auth from './authentication'

  export default {
    name: 'login',
    data: () => ({
      email: '',
      password: '',
      error: false
    }),
    methods: {
      login() {
        auth.login(this.email, this.password)
          .then(() => this.$router.replace(this.$route.query.redirect || '/'))
          .catch(() => this.error = true)
      }
    }
  }
</script>

<style lang="scss">
    .body {
        height: 100%;
    }

    .title {
        text-align: center;
        margin: 40px 40px;
    }
</style>
