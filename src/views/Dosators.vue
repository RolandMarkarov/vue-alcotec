<template>
  <div class="dosators"> Dosators
    <table class="table">
      <tr class="table-title">
        <th v-for="title in titles" :key="title">{{title}}</th>
      </tr>
        <tabs v-for="product in products"
              :key="product.id"
              :product ="product"/>
    </table>



  </div>
</template>

<script>
  import Tabs from "../components/Tabs";
  import { mapState } from 'vuex'

  export default {
    name: "Dosators",
    components: {Tabs},
    data() {
      return {
        titles: ['Изображение', "Наименование", "Наличие", "Цена"]
      }
    },
    computed: mapState({products: state => state.dosators})
  }
</script>

<style scoped lang="scss">
  .dosators {
    padding: 20px;
    .table {
      border-collapse: collapse;
      width: 50vw;
      margin: 50px auto;

      &-title {
        background: #1b805c;
        color: white;

        th {
          padding: 5px;
          font-weight: 400;
        }
      }
    }
  }
</style>
