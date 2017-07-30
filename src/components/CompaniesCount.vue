<template>
    <span class="pull-right small text-muted">{{ count }} {{ (count> 1) ? 'companies' : 'company' }}</span>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'companies-counter',
    computed: {
      ...mapGetters({
        count: 'companiesCount'
      })
    }
  }
</script>
