<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="route in routes"
                   :key="route.title"
                   :exact="route.exact"
                   :to="route.url">{{route.title}}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import {fetchData} from "./utils/fetchApi";

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
    },
    created() {
      fetchData(103, 'post').then(res => {
        this.$store.commit('setDosators', res.products)
      })
      fetchData(322, 'post').then(res => {
        this.$store.commit('setVacuumators', res.products)
      })
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    background: white;
    box-shadow: grey 0px 0px 5px;
    padding: 30px 0px;

    a {
      user-select: none;
      margin-left: 30px;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;

      &:hover {
        color: #ff6a2b;
      }

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
