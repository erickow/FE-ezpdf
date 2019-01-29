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
          <div v-for="(file, index) in files" :key="index" 
          :class="`level ${file.invalidMessage && 'has-text-danger'}`">
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

        <div class="field">
          <button class="button is-info">Upload</button>
        </div>
      </form>
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
        error: false
      }
    },
    methods: {
      selectFile() {
        const FILES = this.$refs.files.files;
        this.uploadFile = [ ...this.files, ...FILES]

        this.files = [
          ...this.files,
          ..._.map(FILES, file => ({
            name: file.name,
            size: file.size,
            type: file.type,
            invalidMessage: this.validate(file)
          }))
        ];
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
        
        _.forEach(this.uploadFile, file => {
          if(this.validate(file) === ""){
            formData.append('files', file)
          }
        });

        try {
          await this.$axios.post('/api/uploads', formData);
          this.message = "Files successfuly uploaded";
          this.error = false;
          this.files = [];
          this.uploadFile = [];

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
