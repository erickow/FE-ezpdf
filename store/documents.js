export const state = () => ({
  files: [],
  file: {},
})

export const mutations = {
  addFiles (state, data) {
    state.files.push({
      text: data
    });
  },
  remove (state, { indexFile }) {
    state.files.splice(state.files.indexOf(indexFile), 1);
  },
  addFile (state, data){
    state.file = data;
  }
}