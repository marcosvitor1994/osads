import React,{Component} from 'react'; 
class App extends Component { 

    state = { 
      selectedFile: null
    }; 
     
    onFileChange = event => { 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 
     
    onFileUpload = () => { 

      const f1 = new FormData(); 
     
      f1.append( 
        "myFile", 
        this.state.selectedFile,
        this.state.selectedFile.name 
        
      ); 
     
      console.log(f1.get);
     
      fetch(
        "https://uploadFiles.marcosvitor6.repl.co/upload", 
        {
          method: 'POST',
          body: this.state.selectedFile,
        }       
        ).then((response) => response.json()
        ).then((result) => {
          console.log('Success: ', result);
        }).catch((error) => {
          console.error('Error: ', error);
        })
        
  


    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      return ( 
        <div> 
            <h1> 
              GeeksforGeeks 
            </h1> 
            <h3> 
              File Upload using React! 
            </h3> 
            <div> 
                <input type="file" name='f1' onChange={this.onFileChange} encType='multipart/form-data'/> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default App; 