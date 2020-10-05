<template>
  <tr>

    <td><img :src="url" alt="" class="product"></td>
    <td>{{product.title}}</td>
    <td>{{product.availability.ru}}</td>
    <td>{{product.priceUAH}}</td>
  </tr>
</template>

<script>


  export default {
    name: "Tabs",
    props: {
      product: {
        type: Object,
        required: true,
        default: {}
      }
    },
    computed:{
      url(){
        return 'https://dev.alcotec.com.ua' + this.product.img
      }
    }
  }
</script>

<style scoped lang="scss">

  tr {
    border-bottom: 1px solid grey;
    margin-bottom: 10px;
    font-size: 12px;
    height: 40px;
  }
  .product{
    max-width: 30px;
    height: inherit;
  }
</style>
