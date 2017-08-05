<template>
    <div class="body gray-bg">
        <div class="loginColumns animated fadeInDown">
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <div class="ibox-content">
                        <h1 class="title">Clients</h1>
                        <form class="m-t" @submit.prevent="login">
                            <p v-if="status === 'error'" class="text-danger text-center">Email or password wrong</p>
                            <div class="form-group" :class="{'has-error' : status === 'error'}">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            <div class="form-group" :class="{'has-error' : status === 'error'}">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                            </div>

                        </form>
                        <button class="btn btn-primary block full-width m-b" v-on:click="login">
                            <loader v-if="status !== 'error'" :status="status">Login</loader>
                            <div v-if="status === 'error'" :status="status">Login</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import auth from './authentication'
  import Loader from './components/Loader.vue'

  export default {
    name: 'login',
    components: {
      Loader
    },
    data: () => ({
      email: '',
      password: '',
      status: 'loaded'
    }),
    methods: {
      login () {
        this.status = 'loading'
        auth.login(this.email, this.password)
          .then(() => {
            this.$router.replace(this.$route.query.redirect || '/')
            this.status = 'loaded'
          })
          .catch(() => {
            this.status = 'error'
          })
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
