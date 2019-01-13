<template>
  <div class="container fullhd">
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            PDF CONVERT
          </h1>
          <h2 class="subtitle">
            PDF Split, Join easily
          </h2>
        </div>
      </div>
    </section>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <!-- <img src="" width="112" height="28"> -->
          <h1>PdfConvert</h1>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>

          <a class="navbar-item" href="/split">
            Split pdf
          </a>

          <a class="navbar-item" href="/join">
            Join pdf
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Term of Service
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }

</script>

<style>
</style>
