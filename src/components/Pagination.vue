<template>
    <ul class="pagination pull-right" v-if="totalPages > 1">
        <li class="footable-page-arrow" :class="{ disabled: firstPageSelected() }">
            <a @click="prevPage()" @keyup.enter="prevPage()">‹</a>
        </li>
        <li v-for="page in pages" class="footable-page" :class="{ active: page.selected, disabled: page.disabled }">
            <a v-if="page.disabled">{{ page.content }}</a>
            <a v-else @click="handlePageSelected(page.index)"
               @keyup.enter="handlePageSelected(page.index)">{{ page.content }}</a>
        </li>
        <li class="footable-page-arrow" :class="{ disabled: lastPageSelected() }">
            <a @click="nextPage()" @keyup.enter="nextPage()">›</a>
        </li>
    </ul>
</template>

<script>
  export default {
    name: 'pagination',
    props: {
      totalPages: {
        type: Number,
        required: true
      },
      initialPage: {
        type: Number,
        default: 0
      },
      current: {
        type: Number
      },
      goTo: {
        type: Function,
        required: true
      },
      pageRange: {
        type: Number,
        default: 5
      },
      marginPages: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        selected: this.initialPage
      }
    },
    beforeUpdate () {
      if (this.current === undefined) return
      if (this.current !== this.selected) {
        this.selected = this.current
      }
    },
    computed: {
      pages: function () {
        let items = {}
        if (this.totalPages <= this.pageRange) {
          for (let index = 0; index < this.totalPages; index++) {
            let page = {
              index: index,
              content: index + 1,
              selected: index === this.selected
            }
            items[index] = page
          }
        } else {
          let leftPart = this.pageRange / 2
          let rightPart = this.pageRange - leftPart
          if (this.selected < leftPart) {
            leftPart = this.selected
            rightPart = this.pageRange - leftPart
          } else if (this.selected > this.totalPages - this.pageRange / 2) {
            rightPart = this.totalPages - this.selected
            leftPart = this.pageRange - rightPart
          }
          // items logic extracted into this function
          let mapItems = index => {
            let page = {
              index: index,
              content: index + 1,
              selected: index === this.selected
            }
            if (index <= this.marginPages - 1 || index >= this.totalPages - this.marginPages) {
              items[index] = page
              return
            }
            let breakView = {
              content: '...',
              disabled: true
            }
            if ((this.selected - leftPart) > this.marginPages && items[this.marginPages] !== breakView) {
              items[this.marginPages] = breakView
            }
            if ((this.selected + rightPart) < (this.totalPages - this.marginPages - 1) && items[this.totalPages - this.marginPages - 1] !== breakView) {
              items[this.totalPages - this.marginPages - 1] = breakView
            }
            let overCount = this.selected + rightPart - this.totalPages + 1
            if (overCount > 0 && index === this.selected - leftPart - overCount) {
              items[index] = page
            }
            if ((index >= this.selected - leftPart) && (index <= this.selected + rightPart)) {
              items[index] = page
              return
            }
          }
          // 1st - loop thru low end of margin pages
          for (let i = 0; i < this.marginPages; i++) {
            mapItems(i);
          }
          // 2nd - loop thru high end of margin pages
          for (let i = this.totalPages - 1; i >= this.totalPages - this.marginPages; i--) {
            mapItems(i);
          }
          // 3rd - loop thru selected range
          let selectedRangeLow = 0;
          if (this.selected - this.pageRange > 0) {
            selectedRangeLow = this.selected - this.pageRange;
          }
          let selectedRangeHigh = this.totalPages;
          if (this.selected + this.pageRange < this.totalPages) {
            selectedRangeHigh = this.selected + this.pageRange;
          }
          for (let i = selectedRangeLow; i < selectedRangeHigh; i++) {
            mapItems(i);
          }
        }
        return items
      }
    },
    methods: {
      handlePageSelected (selected) {
        if (this.selected === selected) return
        this.selected = selected
        this.goTo(this.selected)
      },
      prevPage () {
        if (this.selected <= 0) return
        this.selected--
        this.goTo(this.selected)
      },
      nextPage () {
        if (this.selected >= this.totalPages - 1) return
        this.selected++
        this.goTo(this.selected)
      },
      firstPageSelected () {
        return this.selected === 0
      },
      lastPageSelected () {
        return (this.selected === this.totalPages - 1) || (this.totalPages === 0)
      }
    }
  }
</script>
