<template>
    <span class="pull-right small text-muted">{{ count }} contact<span v-if="count > 1">s</span></span>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'contact-counter',
    computed: {
      ...mapGetters({
        count: 'clientsCount'
      })
    }
  }
</script>
