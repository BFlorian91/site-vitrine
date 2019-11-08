<template>
  <div id="app">
    <div id="nav">
      <!-- <nav-bar /> -->
    </div>
    <home />
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar'
import Home from '@/views/Home'

export default {
  components: {
    // 'nav-bar': NavBar,
    'home': Home,
  },
  data () {
    return {
    }
  },
}
</script>

<style>
body {
  background-color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}
</style>
