<template>
  <div>
    <section id="home-section">
      <home-section />
    </section>
    <section id="explore-head-section">
      <explore-head />
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
</template>

<script>
import bus from "@/bus";

import HomeSection from "@/views/HomeSection";
import ExploreHead from "@/views/ExploreHead";
import ExploreSection from "@/views/ExploreSection";
import CreateHeader from "@/views/CreateHeader";
import CreateSection from "@/views/CreateSection";
import ShareHeader from "@/views/ShareHeader";
import ShareSection from "@/views/ShareSection";
import Footer from "@/views/Footer";

export default {
  components: {
    "home-section": HomeSection,
    "explore-head": ExploreHead,
    "explore-section": ExploreSection,
    "create-header": CreateHeader,
    "create-section": CreateSection,
    "share-header": ShareHeader,
    "share-section": ShareSection,
    "footer-section": Footer
  },
  data() {
    return {
      refName: [],
      refSave: []
    };
  },
  computed: {
    get: () => {
      bus.$on("selected", selected => {
        this.refName = selected;
      }
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    // console.log(this.refName);
      // alert("#" + this.refName)
      this.$path = "#" + this.refName
      alert(this.$path)
      // if (this.$path === "#")
      //   this.refName = "home-section"
      // alert(this.refName)
      document
        .querySelector("#" + this.refName)
        .scrollIntoView({ behavior: "smooth" });
  },
  beforeCreate() {
    bus.$on("selected", selected => {
      this.refName = selected;
    });
  },
};
</script>

<style>
#share-section {
  color: #333;
}
</style>