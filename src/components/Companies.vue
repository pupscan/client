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
        </table>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'companies',
    props: [],
    computed: {
      ...mapGetters({
        companies: 'companies'
      })
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