<template>
<div class="vacuumators">
  <table class="table">
    <tabs-header/>
    <tabs v-for="product in products"
          :key="product.id"
          :product ="product"/>
  </table>
</div>
</template>

<script>
  import Tabs from "../components/Tabs";
  import { mapState } from 'vuex'
  import TabsHeader from "../components/TabsHeader";
  export default {
    name: "Vacuumators",
    components: {TabsHeader, Tabs},
    data() {
      return {
        titles: ['Изображение', "Наименование", "Наличие", "Цена"]
      }
    },
    computed: mapState({products: state => state.vacuumators})
  }
</script>

<style scoped lang="scss">
  .vacuumators{
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
