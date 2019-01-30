<template>
  <div class="section">
    <div class="container">
      <div v-if="message" :class="`message ${error ? 'is-danger' : 'is-success'}`">
        <div class="message-body">{{ message }}</div>
      </div>

      <div class="columns is-centered">
        <div class="column is-5">
          <form @submit.prevent="sendFile" enctype="multipart/form-data">
            <div class="field">
              <div class="file is-boxed is-primary is-fullwidth has-text-centered">
                <label class="file-label">
                  <input multiple class="file-input" type="file" ref="files" @change="selectFile">
                  <span class="file-cta">
                    <span class="file-icon">
                      <i class="fas fa-upload"></i>
                    </span>
                    <span class="file-label">
                      Choose a file..
                    </span>
                  </span>
                </label>
              </div>
            </div>

            <div class="field">
              <button class="button is-info is-fullwidth">Upload</button>
            </div>
          </form>
        </div>
        <div v-if="isUpload" class="column is-7">
          <div class="field">
            <article class="message is-primary">
              <div class="message-header">
                <p>List Upload File</p>
                <button @click="resetUpload" class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
                <div v-for="(file, index) in files" :key="index" :class="`level ${file.invalidMessage && 'has-text-danger'}`">
                  <div class="level-left">
                    <div class="level-item">
                      {{ file.name }}
                      <span v-if="file.invalidMessage">
                        &nbsp; - {{ file.invalidMessage}}
                      </span>
                    </div>
                  </div>
                  <div class="level-right">
                    <a @click.prevent="files.splice(index, 1);uploadFile.splice(index, 1)" class="delete"></a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import {
    all
  } from 'q';
  export default {
    data() {
      return {
        files: [],
        uploadFile: [],
        message: "",
        error: false,
        isUpload: false,
        uploaded: []
      }
    },
    methods: {
      selectFile() {
        const FILES = this.$refs.files.files;
        this.uploadFile = [...this.files, ...FILES]

        this.files = [
          ...this.files,
          ..._.map(FILES, file => ({
            name: file.name,
            size: file.size,
            type: file.type,
            invalidMessage: this.validate(file)
          }))
        ];

        this.isUpload = true;
      },
      validate(file) {
        const allowedTypes = ["application/pdf"];
        const MAX_SIZE = 20000000;
        if (file.size > MAX_SIZE) {
          return `Max size : ${MAX_SIZE/1000000}MB`
        }

        if (!allowedTypes.includes(file.type)) {
          return "Not a PDF"
        }

        return "";

      },
      async sendFile() {
        const formData = new FormData();
        this.uploaded = [];

        _.forEach(this.uploadFile, file => {
          if (this.validate(file) === "") {
            formData.append('files', file)
            this.uploaded.push(file)
          }
        });

        try {
          await this.$axios.post('/api/uploads', formData);

          this.message = "Files successfuly uploaded";
          this.error = false;
          this.files = this.uploaded;
          this.uploadFile = [];
          this.resetMessage() ;

        } catch (err) {
          this.message = err.response.data.error;
          this.error = true;
        }

      },
      resetUpload() {
        this.files = [];
        this.message = "";
        this.uploadFile = [];
        this.error = false;
        this.isUpload = false;
        this.uploaded = [];
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
