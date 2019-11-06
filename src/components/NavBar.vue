<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
    <div class="container">
      <a href class="navbar-brand">Share Your Passion</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <a :href="'#' + item + '-head-section'" class="nav-link">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: ["Home", "Explore", "Create", "Share"]
    };
  }
};
</script>

<style>
.navbar {
  border-bottom: #008ed6 3px solid;
  color: azure;
  opacity: 0.8;
}
</style>