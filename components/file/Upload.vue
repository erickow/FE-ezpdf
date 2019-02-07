<template>
  <div class="section">
    <div class="container">

      <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-success'} `">
        <div class="message-body">{{ message }}</div>
      </div>

      <div class="columns is-3 is-centered">
        <div class="column is-5">
          <form @submit.prevent="sendFile" enctype="multipart/form-data">
            <div class="field">
              <div class="file is-boxed is-primary is-fullwidth has-text-centered">
                <label class="file-label">
                  <input class="file-input" type="file" ref="file" @change="selectFile">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label ">
                      Choose a file..
                    </span>
                  </span>
                  <span v-if="file" class="file-name">{{ file.name }}</span>
                </label>
              </div>
            </div>

            <div class="field ">
              <button class="button is-info is-fullwidth">Upload</button>
            </div>
          </form>
        </div>
        <div v-if="description" class="column is-7">
          <article class="message is-primary">
            <div class="message-header">
              <p>Description</p>
              <button @click.prevent="resetUpload" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              <p>Name: {{ description.originalname }}</p>
              <p>Type: {{ description.mimetype}}</p>
              <p>Size: {{ description.size/1000000}} MB</p>
            </div>
          </article>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: "",
        message: "",
        error: false,
        description: ""
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
          await this.$axios.post('/api/upload', formData)
            .then(response => {
              this.description = response.data.file
            });
          this.message = "File successfuly uploaded";
          this.resetMessage();
          this.error = false;
          this.$store.commit('documents/addFile', this.description)
          this.$emit('uploadedfile', true);

        } catch (err) {
          this.message = err.response.data.error;
          this.$emit('uploadedfile', false);
          this.error = true;
        }
      },
      resetUpload() {
        this.file = "";
        this.message = "";
        this.description = "";
        this.error = false;
        this.$emit('uploadedfile', false);
      },
      resetMessage() {
        var self = this;
        setTimeout(function () {
          self.message = "";
        }, 2000);
      }
    }
  }

</script>

<style scoped>
</style>
