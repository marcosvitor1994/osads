class StoredFiles {
    constructor(files) {
      this.files = files;
    }
  
    saveFiles(value) {
      this.files = value;
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