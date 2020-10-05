<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="route in routes"
                   :key="route.title"
                   exact="route.exact"
                   :to="route.url">{{route.title}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        routes: [
          {title: "Главная", url: "/", exact: true},
          {title: "Вакууматоры", url: "/vacuumators"},
          {title: "Дозаторы", url: "/dosators"},
          {title: "Условия возврата", url: "/return-conditions"},
          {title: "Условия оплаты", url: "/payment-conditions"}]
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
