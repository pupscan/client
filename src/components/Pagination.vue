<template>
    <ul class="pagination pull-right">
        <li class="footable-page-arrow"><a data-page="first" v-on:click="goTo(0)">«</a></li>
        <li class="footable-page-arrow"><a data-page="prev" v-on:click="goTo(current - 1)">‹</a></li>
        <li class="footable-page" v-for="n in totalPages" :class="{active: (n === current)}">
            <a v-on:click="goTo(n - 1)">{{n}}</a>
        </li>
        <li class="footable-page-arrow"><a data-page="next" v-on:click="goTo(current + 1)">›</a></li>
        <li class="footable-page-arrow"><a data-page="last" v-on:click="goTo(totalPages - 1)">»</a></li>
    </ul>
</template>

<script>
  export default {
    name: 'pagination',
    props: ['totalPages', 'current', 'goTo']
  }
</script>
