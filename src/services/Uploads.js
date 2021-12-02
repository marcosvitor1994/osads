import localforage from "localforage";

class StoredFiles {
    constructor(files) {
      this.files = files;
    }
  
    saveFiles(value) {
      this.files = localforage.setItem(value).then(function(value) {
            localforage.LOCALSTORAGE(value)
            console.log(value)
      }).catch(function(err) {
            console.log(err)
      })
    }
  
    getFiles() {
      return this.files;
    }
  
    resetValues() {
      this.files = null;
    }
  }
  
  
let uploads = new StoredFiles(); // Creates an instance of StoredFiles class
  
export default uploads