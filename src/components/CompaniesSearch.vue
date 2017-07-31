<template>
    <div class="input-group">
        <input v-on:input="search" placeholder="Search company" class="input form-control" :value="searchRequest">
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
    name: 'search-companies',
    components: {
      Loader
    },
    computed: {
      ...mapGetters({
        status: 'companiesStatus',
        searchRequest: 'companiesSearchRequest'
      })
    },
    methods: {
      search: _.debounce(function (input) {
        this.$store.dispatch('fetchCompanies', {search: input.target.value})
      }, 500)
    }
  }
</script>

<style lang="scss">
    .btn.search {
        width: 86px;
    }
</style>
