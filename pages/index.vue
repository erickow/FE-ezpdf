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
                EZPDF 
              </h1>
              <h2 class="subtitle column is-10">
                Easily Split and join your pdf files
              </h2>
              <div class="columns is-multiline button-custom">
                <div class="column is-5">
                  <a href="/split" class="button is-danger is-inverted is-outlined is-large is-fullwidth">
                    Split PDF</a>
                </div>
                <div class="column is-5">
                  <a href="/join" class="button is-danger is-inverted is-outlined is-large is-fullwidth">Join PDF</a>
                </div>
                <div class="column is-5">
                  <a href="/encrypt" class="button is-danger is-inverted is-outlined is-large is-fullwidth">Encrypt PDF</a>
                </div>
                <div class="column is-5">
                  <a href="/" class="button is-danger is-inverted is-outlined is-large is-fullwidth">More...</a>
                </div>
              </div>
            </div>
          </div>
          <div class="columns rightside-home">
            <div class="column is-hidden-desktop">
              <img src="@/assets/image/pdf-split.png" alt="pdf image">
            </div>
            <div class="column rightside-home has-text-right">
              <h1 class="title column">
                Split PDF 
              </h1>
              <h2 class="subtitle column">
                do you want to split a pdf to some piece easily ? 
              </h2>
              <div class="columns is-10">
                <div class="column">

                </div>
                <div class="column is-5 ">
                  <a href="/split" class="button is-danger is-inverted is-outlined is-large is-fullwidth">
                    Let's do it !  
                  </a>
                </div>
              </div>
            </div>
            <div class="column is-hidden-touch">
              <img src="@/assets/image/pdf-split.png" alt="pdf image">
            </div>
          </div>
          <div class="columns rightside-home">
            <div class="column is-5">
              <img src="@/assets/image/pdf-join.png" alt="pdf image">
            </div>
            <div class="column rightside-home has-text-left">
              <h1 class="title column">
                Join PDF 
              </h1>
              <h2 class="subtitle column ">
                Have to much file pdf and want join them to one file ?
              </h2>
              <div class="columns is-10">
                <div class="column is-5">
                  <a href="/join" class="button is-danger is-inverted is-outlined is-large is-fullwidth">
                   Click this !
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div class="columns rightside-home">
            <div class="column is-5 is-hidden-desktop">
              <img src="@/assets/image/pdf-encrypt.png" alt="pdf image">
            </div>
            <div class="column rightside-home has-text-right">
              <h1 class="title column">
                Encrypt PDF 
              </h1>
              <h2 class="subtitle column">
                Do you feel insecure? want to protect your pdf file?
              </h2>
              <div class="columns is-10">
                <div class="column">

                </div>
                <div class="column is-5">
                  <a href="/encrypt" class="button is-danger is-inverted is-outlined is-large is-fullwidth">
                    Yes I want !</a>
                </div>
              </div>
            </div>
            <div class="column is-5 is-hidden-touch">
              <img src="@/assets/image/pdf-encrypt.png" alt="pdf image">
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
      margin-top: 15vh;
    }
  }

  @media screen and (min-width: 1088px) {
    .title {
      font-size: 3.5rem;
    }
    .button-custom{
      margin-left: auto;
      margin-right: auto;
    }
  }

</style>
