<template>
  <div class="section">
    <div class="container is-fluid">
      <div class="split-title">
        <h1 class="title is-size-4-mobile is-size-1-desktop">Easily Split pdf file : </h1>
        <h3 class="subtitle is-size-6-mobile is-size-4-desktop">STEP 1 : upload your pdf file</h3>
      </div>
      <file-upload v-on:uploadedfile="checkUploaded" />

      <div v-if="uploaded" class="split-title">
        <h3 class="subtitle is-size-6-mobile is-size-4-desktop">STEP 2 : Input the password</h3>
      </div>

      <div class="section">
        <div class="container">

          <div v-if="uploaded" class="columns is-centered">
            <div class="column is-12">
              <div class="box">
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <form @submit.prevent="splitFile">
                        <div class="field">
                          <label class="label">Password</label>
                          <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="Input Password" v-model="passwordFile" required>
                            <span class="icon is-small is-left">
                              <i class="fas fa-lock"></i>
                            </span>
                          </div>
                        </div>

                        <div class="field is-centered">
                          <div class="control">
                            <button class="button is-link">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        file: '',
        uploaded: false
      }
    },
    methods: {
      checkUploaded(data) {
        this.uploaded = data;
      },
    }
  }

</script>

<style scoped>
</style>
