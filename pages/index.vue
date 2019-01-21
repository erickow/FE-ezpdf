<template>
  <section class="container homePage">
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column">
              <img src="@/assets/image/pdf-icon.png" alt="pdf image">
            </div>
            <div class="column rightside-home has-text-justify">
              <h1 class="title column is-10">
                PDF CONVERT
              </h1>
              <h2 class="subtitle column is-10">
                Easily Split and join your pdf files
              </h2>
              <div class="columns button-custom">
                <div class="column is-5">
                  <a href="/split" class="button is-danger is-inverted is-outlined is-large is-fullwidth">
                    Split PDF</a>
                </div>
                <div class="column is-5">
                  <a href="/join" class="button is-danger is-inverted is-outlined is-large is-fullwidth">Join PDF</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    }
  }

</script>

<style scoped>
  .homePage {
    align-content: center;
    text-align: center;
  }

  .button-custom {
    margin-top: 10vh;
  }

  @media screen and (min-width: 550px) {
    .title {
      font-size: 2.32rem;
    }
  }

  @media screen and (min-width: 769px) {
    .rightside-home {
      margin-top: 10vh;
    }
  }

  @media screen and (min-width: 1088px) {
    .title {
      font-size: 3.5rem;
    }
  }

</style>
