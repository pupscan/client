<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <tbody>
            <tr v-for="company in companies">
                <td><a data-toggle="tab" class="client-link">{{company.name}}</a></td>
                <td class="contact-type">
                    <a :href="'mailto:'+company.email"><i class="fa fa-envelope"> </i></a>
                </td>
                <td class="email">{{company.email}}</td>
                <td>
                    <img v-if="company.country" :src="'/img/flags/32/'+company.country+'.png'">
                </td>
                <td>
                    <span v-if="company.country">{{company.country}}</span>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="5" class="footable-visible">
                    <pagination :totalPages="pagination.totalPages"
                                :current="pagination.current"
                                :go-to="goTo"></pagination>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
  import Pagination from './Pagination.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'companies',
    components: {
      Pagination
    },
    computed: {
      ...mapGetters({
        companies: 'companies',
        pagination: 'companiesPagination'
      })
    },
    methods: {
      goTo (page) {
        this.$store.dispatch('fetchCompanies', {page})
      }
    },
    created () {
      this.$store.dispatch('fetchCompanies')
    }
  }
</script>

<style lang="scss" scoped>
    .email {
        word-break: break-all
    }

    .contact-type a {
        color: inherit;
    }
</style>
