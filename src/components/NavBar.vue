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
            <a href="" @click="handleSelectItem(item)" class="nav-link">{{ item }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import bus from '@/bus'

export default {
  props: {
    href: String
  },
  data() {
    return {
      menuItems: [
        "home-section",
        "explore-head",
        "create-head",
        "share-head"
      ]
    };
  },
  methods: {
    handleSelectItem(item) {
      // eslint-disable-next-line no-console
      //  alert(item)

      bus.$emit('selected', item)
    },
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