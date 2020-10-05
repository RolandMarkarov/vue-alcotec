<template>
<div class="payment" v-html="payments">Payment Conditions</div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "PaymentConditions",
    data(){
      return{
        payments: ''
      }
    },
    created() {
      axios("https://dev.alcotec.com.ua/api/pages/payment").then(res=> {
        this.payments = res.data.content.ru
      })
    }
  }
</script>

<style scoped lang="scss">
  .payment{
    padding-top: 20px;
    margin: auto;
    width: 50vw;
    flex-wrap: wrap;
    text-align: left;
  }


</style>
