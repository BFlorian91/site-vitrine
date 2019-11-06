<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    'nav-bar': NavBar,
  }
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
