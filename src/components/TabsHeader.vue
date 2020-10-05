<template>
  <tr class="table-title">
    <th v-for="title in titles" :key="title" @click="doSort(title)" :class="[title === 'Цена' ? 'pointer': '']">{{title}}</th>
  </tr>
</template>

<script>
  export default {
    name: "TabsHeader",
    data() {
      return {
        titles: ['Изображение', "Наименование", "Наличие", "Цена"],
        isDesc: true
      }
    },
    methods: {
      doSort(title) {
        if (title !== "Цена") {
          return
        }
        let path = this.$route.path
        path = path.substr(1);
        let obj = {
          path,
          isDesc: this.isDesc
        }
        this.$store.dispatch('sortByPrice', obj);
        this.isDesc = !this.isDesc
      }
    }
  }
</script>

<style scoped lang="scss">
  .table-title {
    background: #1b805c;
    line-height: 50px;
    color: white;

    th {
      padding: 5px;
      font-weight: 400;
    }
    .pointer{
      cursor: pointer;
    }
  }
</style>
