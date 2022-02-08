import React, {useState, useEffect} from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Acordion from "../components/Acordion";



const Maestro = () => {
	const [state, setState] = useState({ selectedFile: null });
  const [detalhes, setDetalhes] = useState([]);

  //validar se tem algum arquivo no form
  function validateForm() {
    return  state.selectedFile != null;
  }
  
  //alimentando tabela de arquivos
  useEffect(() => {
    fetch('https://uploadFiles.marcosvitor6.repl.co/upload/list', {method: 'GET'}).then((response) => response.json()).then((resultado) => {
      setDetalhes(resultado)
    })})
  
  //fazerndo uplado de arquivos
  const onFileChange = (event) => { 
    setState({ selectedFile: event.target.files[0] }); 
  }; 
   
  const onFileUpload = () => { 
    
    const formData = new FormData(); 
    formData.append( 
      "myFile", 
      state.selectedFile,
      state.selectedFile.name

    );    
    console.log(state.selectedFile);
    fetch("https://uploadFiles.marcosvitor6.repl.co/upload",{ method: 'POST', body: formData, }
      ).then((response) => response.json()
      ).then((result) => {
        console.log('Success: ', result);
      }).catch((error) => {
        console.error('Error: ', error);
      })
  
  }; 


  //excluindo arquivos
  const excluir = (id) =>{
    
      fetch(`https://uploadFiles.marcosvitor6.repl.co/file/${id}`, {method: 'DELETE'})
      .then((response) => response.json())
      .then((result)=>{alert(result)})
      .catch((error)=>{
      console.error('Error: ', error)
    })
    
  }


  
  return (
    <>
      <p>Maestro</p>
      <Container>
        <Row>
          <Col>
          
          <Acordion key='Violino 1' title="Violino 1 - Partituras" body={
          <>
            {/*adicionar arquivo*/}
            <Container>
              <Row>
                <Col>
                  <Form>
                    <Row>
                      <Col md={10} >
                        <input type="file" className="form-control" onChange={onFileChange}/>
                      </Col>
                      <Col md={2} align='right' className="d-grid gap-2">                                    
                          <Button className="btn btn-primary" onClick={onFileUpload} disabled={!validateForm()}>Enviar</Button>                                         
                      </Col>
                    </Row>
                  </Form>                  
                </Col>
              </Row>
            </Container>
            {/*listar arquivos*/}
            <Container>
                  <>
                  <br />
                    <Table responsive striped bordered hover>
                      <thead>
                        <tr>
                          <th>Nome</th>
                          <th>Download</th>
                          <th>Visualizar</th>
                          <th>Excluir</th>                    
                        </tr>
                      </thead>
                      <tbody align='left'>
                        {detalhes.map((files) => (
                          <tr >
                            <td>{files.name}</td>
                            <td>
                              <a href={`${files.webContentLink}`}><Button className="btn btn-success">DownLoad</Button></a>
                            </td>
                            <td>
                              <a href={`${files.webViewLink}`}><Button className="btn btn-primary">Vizualizar</Button></a>
                            </td>
                            <td>
                              <Button className="btn btn-danger" onClick={() => excluir(files.id)}>Excluir</Button>
                            </td> 
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
            </Container>
          </>
        }
      />
          
          
          
          </Col>
        </Row>
      </Container>
      
      

      
    </>
  );
};

export default Maestro;
