<template>
  <div class="error">
    <img src="@/assets/img/test.gif" alt="">
  </div>
</template>

<script>
  export default {
    name: "404"
  }
</script>

<style scoped lang="scss">
  .error {
    padding: 5px;
    background: #000;
    height: calc(100vh - 78px);
    display: flex;
    align-items: center;

    img {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
      margin: auto;
      display: block;
      height: 50vh;
    }
  }
</style>
