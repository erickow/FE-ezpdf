<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="split-title">
        <h1 class="title is-size-4-mobile is-size-1-desktop">Easily Split pdf file : </h1>
        <h3 class="subtitle is-size-6-mobile is-size-4-desktop">STEP 1 : upload your pdf file</h3>
      </div>
      <file-upload />
    </div>
  </div>
</template>

<script>
  import FileUpload from '@/components/file/Upload'
  export default {
    components: {
      FileUpload
    },
    created() {},
    data() {
      return {
        file: ''
      }
    }
  }

</script>

<style scoped>
</style>
