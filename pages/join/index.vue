<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="join-title">
        <h1 class="title is-size-4-mobile is-size-1-desktop">Easily Join pdf file : </h1>
        <h3 class="subtitle is-size-6-mobile is-size-4-desktop">STEP 1 : upload more than one pdf file</h3>
      </div>
      <multiple-file-upload />
    </div>
  </div>

</template>

<script>
  import MultipleFileUpload from '@/components/file/MultipleUpload'
  export default {
    components: {
      MultipleFileUpload
    },
    created() {},
    data() {
      return {

      }
    }
  }

</script>

<style>
</style>
