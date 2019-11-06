<template>
  <div>
    <section id="home-section">
      <div class="dark-overlay">
        <div class="home-inner container">
          <div class="row">
            <div class="col-lg-8 d-none d-lg-block">
              <h1 class="display-4">
                Build
                <strong>social profiles</strong> and gain revenue and
                <strong>profit</strong>
              </h1>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i class="fas fa-check fa-2x"></i>
                </div>
                <div class="p-4 align-self-end">{{ content.text }}</div>
              </div>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i class="fas fa-check fa-2x"></i>
                </div>
                <div class="p-4 align-self-end">{{ content.text }}</div>
              </div>
              <div class="d-flex">
                <div class="p-4 align-self-start">
                  <i class="fas fa-check fa-2x"></i>
                </div>
                <div class="p-4 align-self-end">{{ content.text }}</div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card bg-primary text-center card-form">
                <div class="card-body">
                  <h3>Sign Up Today</h3>
                  <p>Please fill out this form to register</p>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-group">
                      <input type="email" class="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Confirm Password"
                      />
                    </div>
                    <input type="submit" value="submit" class="btn btn-outline-light btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="explore-head-section">
      <explore-head />
    </section>
    <section class="bg-light text-muted py-5">
      <explore-section />
    </section>
    <section class="bg-primary">
      <create-header />
    </section>
    <section class="py-5" style="background-color: #333;">
      <create-section />
    </section>
    <section class="bg-primary">
      <share-header />
    </section>
    <section class="bg-light py-5" style="color: #333">
      <share-section />
    </section>
    <footer class="bg-dark">
      <footer-section />
    </footer>
  </div>
</template>

<script>
import ExploreHead from "@/views/ExploreHead";
import ExploreSection from "@/views/ExploreSection";
import CreateHeader from "@/views/CreateHeader";
import CreateSection from "@/views/CreateSection";
import ShareHeader from "@/views/ShareHeader";
import ShareSection from "@/views/ShareSection";
import Footer from "@/views/Footer";

export default {
  components: {
    "explore-head": ExploreHead,
    "explore-section": ExploreSection,
    "create-header": CreateHeader,
    "create-section": CreateSection,
    "share-header": ShareHeader,
    "share-section": ShareSection,
    "footer-section": Footer,
  },
  data() {
    return {
      content: {
        text:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      }
    };
  }
};
</script>

<style>
#home-section {
  background: url(../img/home.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 640px;
}
#home-section .dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 700px;
  background: rgba(0, 0, 0, 0.7);
}
#home-section .home-inner {
  padding-top: 150px;
}
#home-section .card-form {
  opacity: 0.8;
}
#home-section .fas {
  color: #008ed6;
  background: #fff;
  padding: 5px;
  border-radius: 5px;
}
</style>