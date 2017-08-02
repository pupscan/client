<template>
    <div id="wrapper">
        <div id="page-wrapper" class="gray-bg">
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-sm-8">
                        <clients></clients>
                    </div>
                    <div class="col-sm-4">
                        <client></client>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Clients from './components/Clients.vue'
  import Client from './components/Client.vue'

  export default {
    name: 'app',
    components: {
      Client,
      Clients
    }
  }
</script>
