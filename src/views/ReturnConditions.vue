<template>
<div class="returns" v-html="returns">return conditions</div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "ReturnConditions",
    data(){
      return{
        returns: ''
      }
    },
    created() {
      axios("https://dev.alcotec.com.ua/api/pages/purchase-returns").then(res=> {
        this.returns = res.data.content.ru
      })
    }
  }
</script>

<style scoped>
  .returns{
    padding-top: 20px;
    margin: auto;
    width: 50vw;
    flex-wrap: wrap;
    text-align: left;
  }
</style>
