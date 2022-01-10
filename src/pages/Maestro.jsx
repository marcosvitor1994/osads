import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Acordion from "../components/Acordion";


const Maestro = () => {
  const [responseData, setResponseData] = useState([]);

  const uploadArquivo = async () => {
    try {
      fetch(
        'https://uploadFiles.marcosvitor6.repl.co/upload'
      ).then((response) => response.json()).then((data) => {
        setResponseData(data)
      })
      
      return console.log(responseData)

    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <p>Maestro</p>
      <Acordion title="Violino - Partituras" body={
          <>
            <Container>
              <Row>
                <Col>
                  <Form action="https://uploadFiles.marcosvitor6.repl.co/upload"  method="post" encType="multipart/form-data">
                    <Row>
                      <Col md={10} >
                        <input type="file" name="f1" className="form-control"/>
                      </Col>
                      <Col md={2}>
                                                  
                          <button className="btn btn-primary" type="submit" onClick={uploadArquivo}>Enviar</button>                           
                        
                      </Col>
                    </Row>
                  </Form>                  
                </Col>
              </Row>
            </Container>
          </>
        }
      />
      <Acordion title="Teclado - Partituras" body={
          <Form.Group controlId="formFile" className="mb-3" action="https://uploadFiles.marcosvitor6.repl.co/upload" method="post" encType="multipart/form-data">
            <Form.Control type="file" name='f1' />
            <Button type="submit" > Enviar</Button>
          </Form.Group>
        }
      />

      
    </>
  );
};

export default Maestro;
