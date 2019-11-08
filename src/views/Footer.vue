<template>
  <div class="container">
    <div class="row">
      <div class="col text-center py-4">
        <h3>static-site</h3>
        <p>Copyright &copy; Beaumont Florian <span>{{ new Date().getFullYear() }}</span> 😎 </p>
        <button class="btn btn-primary" data-toggle="modal" data-target="contactModal"><a class="text-decoration-none text-light" target="_blank" href="https://www.linkedin.com/in/florian-beaumont">Contact Me</a></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>

<style>

</style>