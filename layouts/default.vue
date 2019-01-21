<template>
  <div class="container">
    <navbar-app/>
    <nuxt/>
  </div>
</template>

<script>
import NavbarApp from '@/components/navbar/Navbar'
export default {
  components:{
    NavbarApp
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (min-width: 1088px) {
  .container {
      max-width: 100%;
      width: 100%;
  }
}
</style>
