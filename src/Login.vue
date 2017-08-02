<template>
    <div class="body gray-bg">
        <div class="loginColumns animated fadeInDown">
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <div class="ibox-content">
                        <form class="m-t" role="form" action="index.html">
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Username" required="">
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" required="">
                            </div>
                            <button type="submit" class="btn btn-primary block full-width m-b">Login</button>

                            <a href="#">
                                <small>Forgot password?</small>
                            </a>

                            <p class="text-muted text-center">
                                <small>Do not have an account?</small>
                            </p>
                            <a class="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                        </form>
                        <p class="m-t">
                            <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
                        </p>
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
</style>