<template>
    <div class="body gray-bg">
        <div class="loginColumns animated fadeInDown">
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <div class="ibox-content">
                        <h1 class="title">Clients</h1>
                        <form class="m-t" role="form" action="index.html">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Username" required="">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" required="">
                            </div>
                            <button type="submit" class="btn btn-primary block full-width m-b">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login'
  }
</script>

<style lang="scss">
    .body {
        height:100%;
    }
    .title {
        text-align: center;
        margin: 40px 40px;
    }
</style>