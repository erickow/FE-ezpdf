<template>
  <div class="section">
    <div class="container">
      <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-success'}`">
        <div class="message-body">{{ message }}</div>
      </div>
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
        const FILE = this.$refs.file.files[0];
        const allowedTypes = ["application/pdf"];
        const MAX_SIZE = 20000000;
        const tooLarge = FILE.size > MAX_SIZE;

        if (allowedTypes.includes(FILE.type) && !tooLarge) {
          this.file = FILE;
          this.message = "";
          this.error = false;
        } else {
          this.error = true;
          this.message = tooLarge ? `Too Large, Max size is ${MAX_SIZE/1000000}MB` : "Only PDF are allowed";
          this.file = "";
        }
      },
      async sendFile() {
        const formData = new FormData();

        formData.append('file', this.file)

        try {
          await this.$axios.post('/api/upload', formData);
          this.message = "File successfuly uploaded";
          this.error = false;

        } catch (err) {
          this.message = err.response.data.error;
          this.error = true;
        }

      }
    }
  }

</script>

<style scoped>
</style>
