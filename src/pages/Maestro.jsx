import React, {useState} from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import Acordion from "../components/Acordion";


const Maestro = () => {
  const [detalhes, setDetalhes] = useState([]);
	const [state, setState] = useState({ selectedFile: null });

  fetch('https://uploadFiles.marcosvitor6.repl.co/upload/list').then((response) => response.json()).then((resultado) => {
    setDetalhes(resultado)
  })
  
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
   
    fetch(
      "https://uploadFiles.marcosvitor6.repl.co/upload", 
      {
        method: 'POST',
        body: formData,
      }
      ).then((response) => response.json()
      ).then((result) => {
        console.log('Success: ', result);
      }).catch((error) => {
        console.error('Error: ', error);
      })
  
  }; 



  
  return (
    <>
      <p>Maestro</p>
      <Acordion title="Violino - Partituras" body={
          <>
            <Container>
              <Row>
                <Col>
                  <Form>
                    <Row>
                      <Col md={10} >
                        <input type="file" className="form-control" onChange={onFileChange}/>
                      </Col>
                      <Col md={2}>                                    
                          <Button className="btn btn-primary" onClick={onFileUpload}>Enviar</Button>                                         
                      </Col>
                    </Row>
                  </Form>                  
                </Col>
              </Row>
            </Container>
            <Container>
            
                  <>
                  
                  <br />
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Tipo</th>
                          <th>Ação</th>                  
                        </tr>
                      </thead>
                      <tbody>
                        {detalhes.map((files) => (
                          <tr >
                            <td>{files.id}</td>
                            <td>{files.name}</td>
                            <td>{files.mimeType}</td>
                            <td></td>                           
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </>
                  
                
            </Container>
          </>
        }
      />
      <Acordion title="Teclado - Partituras" body={
        <>
          <Container>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formFile">
                  <Col md={10}>
                    <Form.Control type="file" name='f1' onChange={onFileChange}/>
                  </Col>
                  <Col md={2}>
                    <Button type="submit" onClick={onFileUpload}>Enviar</Button>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </>
          
          
        }
      />

      
    </>
  );
};

export default Maestro;
