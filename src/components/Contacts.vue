<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <tbody>
            <tr v-for="client in clients">
                <td><a data-toggle="tab" v-on:click="displayClient(client.id)"
                       class="client-link">{{client.name}}</a>
                </td>
                <td>
                    <span class="label tag" v-for="tag in client.tags">{{tag}}</span>
                </td>
                <td class="contact-type">
                    <a :href="'mailto:'+client.email"><i class="fa fa-envelope"> </i></a>
                </td>
                <td class="email">{{client.email}}</td>
                <td class="client-status">
                    <span class="label"
                          :class="{ 'label-success': (client.status==='solved'),
                          'label-warning': (client.status==='pending' || client.status==='hold'),
                          'label-primary': (client.status==='new'),
                          'label-danger': (client.status==='deleted')}">
                        {{client.status}}</span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'contacts',
    props: [],
    computed: {
      ...mapGetters({
        clients: 'clients'
      })
    },
    methods: {
      displayClient (clientId) {
        this.$store.dispatch('fetchClient', {clientId})
      }
    },
    created () {
      this.$store.dispatch('fetchClients')
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

    .tag {
        margin-right: 4px;
    }
</style>