<template>
  <div>
    <div id="menu-section">
      <span
        
      >
      </span>
    </div>
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
  }
};
</script>

<style>
#share-section {
  color: #333;
}
</style>