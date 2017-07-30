<template>
    <div class="input-group">
        <input v-on:input="clientSearch" placeholder="Search client" class="input form-control">
        <span class="input-group-btn">
            <button type="button" class="btn btn btn-primary search">
                <loader :status="status"><i class="fa fa-search"></i> Search</loader>
            </button>
        </span>
    </div>
</template>

<script>
  import _ from 'lodash'
  import Loader from './Loader'
  import {mapGetters} from 'vuex'

  export default {
    name: 'clientSearch',
    props: [],
    components: {
      Loader
    },
    computed: {
      ...mapGetters({
        status: 'clientsStatus'
      })
    },
    methods: {
      clientSearch: _.debounce(function (input) {
        this.$store.dispatch('fetchClients', {clientSearch: input.target.value})
      }, 500)
    }
  }
</script>

<style lang="scss">
    .btn.search {
        width: 86px;
    }
</style>
