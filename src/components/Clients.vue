<template>
    <div class="ibox">
        <div class="ibox-content">
            <!--<span class="text-muted small pull-right">Last modification: <i class="fa fa-clock-o"></i> 2:10 pm - 12.06.2014</span>-->
            <h2>Clients</h2>
            <search></search>
            <div class="clients-list">
                <ul class="nav nav-tabs">
                    <!--<span class="pull-right small text-muted">{{ clients.total }} clients</span>-->
                    <li :class="{'active': isClientsTabActive}">
                        <a data-toggle="tab" v-on:click="activeTab('clients-tab')">
                            <i class="fa fa-user"></i>Contacts
                        </a>
                    </li>
                    <li :class="{'active': isCompaniesTabActive}">
                        <a data-toggle="tab" v-on:click="activeTab('companies-tab')">
                            <i class="fa fa-briefcase"></i>Companies
                        </a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="private" class="tab-pane" :class="{'active': isClientsTabActive}">
                        <div class="full-height-scroll">
                            <contacts></contacts>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Search from './Search'
  import Contacts from './Contacts'

  export default {
    name: 'clients',
    props: [],
    components: {
      Search,
      Contacts
    },
    data: () => ({
      isClientsTabActive: true,
      isCompaniesTabActive: false
    }),
    methods: {
      activeTab (tab) {
        if (tab === 'clients-tab') {
          this.isClientsTabActive = true
          this.isCompaniesTabActive = false
        }
        else {
          this.isClientsTabActive = false
          this.isCompaniesTabActive = true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .contact-type a {
        color: inherit;
    }

    .tag {
        margin-right: 4px;
    }
</style>