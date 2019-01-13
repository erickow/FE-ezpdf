<template>
  <div class="container is-fluid">
    <div class="custom-file">
      <div class="file has-name is-fullwidth">
        <label class="file-label">
          <input class="file-input" id="file" type="file" name="resume">
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
          </span>
          <span class="file-name" id="filename">
            uploaded file
          </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      var file = document.getElementById("file");
      file.onchange = function () {
        if (file.files.length > 0) {
          document.getElementById('filename').innerHTML = file.files[0].name;
        }
      };
    },
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .custom-file {
    margin: 5% 0%;
    padding: 5% 5% !important;
    border: 5px;
    border-style: dashed;
    color: rgb(230, 102, 102);
  }

</style>
