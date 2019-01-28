<template>
  <div class="section">
    <div class="container">
      <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <div class="field">
          <div class="file is-boxed is-primary">
            <label class="file-label">
              <input class="file-input" type="file" ref="file" @change="selectFile">
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">
                  Choose a file..
                </span>
              </span>
              <span v-if="file" class="file-name">{{ file.name }}</span>
            </label>
          </div>
        </div>

        <div class="field">
          <button class="button is-info">Upload</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: "",
        message: "",
        error: false
      }
    },
    methods: {
      selectFile() {
        this.file = this.$refs.file.files[0];
        this.message = "";
        this.error = false;
      },
      async sendFile() {
        const formData = new FormData();

        formData.append('file', this.file)

        try {
          await this.$axios.post('/api/upload', formData);
          this.message = "File successfuly uploaded";
          this.error = false;

        } catch (err) {
          console.log(err)
          this.message = "Something went wrong";
          this.error = true;
        }

      }
    }
  }

</script>

<style scoped>
</style>
