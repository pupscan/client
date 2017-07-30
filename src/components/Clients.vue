<template>
    <div class="ibox">
        <div class="ibox-content">
            <h2>Clients</h2>
            <contacts-search v-if="isContactsTabActive"></contacts-search>
            <companies-search v-if="isCompaniesTabActive"></companies-search>
            <div class="clients-list">
                <ul class="nav nav-tabs">
                    <contacts-count v-if="isContactsTabActive"></contacts-count>
                    <companies-count v-if="isCompaniesTabActive"></companies-count>
                    <li :class="{'active': isContactsTabActive}">
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
                    <div class="tab-pane" :class="{'active': isContactsTabActive}">
                        <div class="full-height-scroll">
                            <contacts></contacts>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{'active': isCompaniesTabActive}">
                        <div class="full-height-scroll">
                            <companies></companies>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import CompaniesSearch from './CompaniesSearch'
  import ContactsSearch from './ContactsSearch'
  import Contacts from './Contacts'
  import Companies from './Companies'
  import ContactsCount from './ContactsCount'
  import CompaniesCount from './CompaniesCount'

  export default {
    name: 'clients',
    props: [],
    components: {
      Companies,
      CompaniesCount,
      CompaniesSearch,
      Contacts,
      ContactsCount,
      ContactsSearch
    },
    data: () => ({
      isContactsTabActive: true,
      isCompaniesTabActive: false
    }),
    methods: {
      activeTab (tab) {
        if (tab === 'clients-tab') {
          this.isContactsTabActive = true
          this.isCompaniesTabActive = false
        }
        else {
          this.isContactsTabActive = false
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