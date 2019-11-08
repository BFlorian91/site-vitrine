<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div class="container">
          <a href class="navbar-brand">Share Your Passion</a>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item" v-for="(value, name, index) in items" :key="index">
                <span
                  @click="selectItem(value)"
                  class="nav-link"
                  style="cursor: pointer;"
                >{{ name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <section id="home-section">
        <home-section />
      </section>
      <section id="explore-header">
        <explore-header />
      </section>
      <section id="explore-section" class="bg-light text-muted py-5">
        <explore-section />
      </section>
      <section id="create-header" class="bg-primary">
        <create-header />
      </section>
      <section id="create-section" class="py-5 bg-dark">
        <create-section />
      </section>
      <section id="share-header" class="bg-primary">
        <share-header />
      </section>
      <section id="share-section" class="bg-light py-5">
        <share-section />
      </section>
      <footer id="footer-section" class="bg-dark">
        <footer-section />
      </footer>
    </div>
  </div>
</template>

<script>
import HomeSection from "@/views/HomeSection";
import ExploreHead from "@/views/ExploreHeader";
import ExploreSection from "@/views/ExploreSection";
import CreateHeader from "@/views/CreateHeader";
import CreateSection from "@/views/CreateSection";
import ShareHeader from "@/views/ShareHeader";
import ShareSection from "@/views/ShareSection";
import Footer from "@/views/Footer";

export default {
  components: {
    "home-section": HomeSection,
    "explore-header": ExploreHead,
    "explore-section": ExploreSection,
    "create-header": CreateHeader,
    "create-section": CreateSection,
    "share-header": ShareHeader,
    "share-section": ShareSection,
    "footer-section": Footer
  },
  data() {
    return {
      items: {
        Home: "home-section",
        Explore: "explore-header",
        Create: "create-header",
        Share: "share-header"
      },
      modal: false
    };
  },
  methods: {
    selectItem(item) {
      // eslint-disable-next-line no-console
      // console.log("#" + item);
      document.querySelector("#" + item).scrollIntoView({ behavior: "smooth" });
    },

  }
};
</script>

<style>
#share-section {
  color: #333;
}
.navbar {
  border-bottom: #008ed6 3px solid;
  color: azure;
  opacity: 0.8;
}
</style>