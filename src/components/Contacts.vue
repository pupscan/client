<template>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <tbody>
            <tr v-for="client in clients">
                <td>
                    <a data-toggle="tab" v-on:click="displayClient(client.id)" class="client-link">{{client.name}}</a>
                </td>
                <td class="col-sm-3">
                    <ul class="tag-list" style="padding: 0">
                        <li v-for="tag in client.tags" class="tag" ><i class="fa fa-tag"></i> {{tag}}</li>
                    </ul>
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
        font-size: 10px;
        background-color: #f3f3f4;
        padding: 5px 12px;
        color: inherit;
        border-radius: 2px;
        border: 1px solid #e7eaec;
        margin-right: 5px;
        margin-top: 5px;
        display: block;
    }
</style>