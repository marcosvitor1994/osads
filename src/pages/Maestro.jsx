import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import Acordion from "../components/Acordion";

const Maestro = () => {
	const [state, setState] = useState({ selectedFile: null });
  
  //modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (props) => {
    const pasta = {folder: `${props}`} //1bHqYWKtmZlENRtiD140CHeOMt4-NW4q9
    axios.post('https://uploadFiles.marcosvitor6.repl.co/upload/list', {pasta}).then((result) => {
      setDetalhes(result.data)
      console.log(result.data)
    }).catch((error) => {      
      console.log(error)
    })
    setShow(true);
  };

  //validar se tem algum arquivo no form
  function validateForm() {
    return  state.selectedFile != null;
  }
  
  //alimentando tabela de arquivos
  const [detalhes, setDetalhes] = useState([]);
  
  useEffect(() => {
    const pasta = {folder: `1bHqYWKtmZlENRtiD140CHeOMt4-NW4q9`};
    axios.post('https://uploadFiles.marcosvitor6.repl.co/upload/list', {pasta}).then((result) => {
      setDetalhes(result.data)
      console.log(result.data)
    }).catch((error) => {      
      console.log(error)
    })
  },[])
   
  //fazendo uplado de arquivos
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
                          <tr>
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
    <br />
      {//teste modal 
      }   
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.superprof.com.br/blog/wp-content/uploads/2018/11/encontrar-professor-de-violino-1060x707.jpg"/>               
                <Card.Body>
                    <Card.Title>Partituras de violino</Card.Title>
                    <Card.Text>Violino</Card.Text>
                       <Button
                          className="bt bt-danger"
                          variant="primary"
                          onClick={handleShow}
                        >
                          Partituras
                      </Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
    <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Partituras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                          <tr>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>



          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Maestro;
