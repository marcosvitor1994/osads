import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Acordion from "../components/Acordion";



const Maestro = () => {



  return (
    <>
      <p>Maestro</p>
      <Acordion
        key="0"
        title="Violino - Partituras"
        body={
        <>
            <Container>
                <Row>
                    <Col md={11}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button className="mb-3" >Enviar</Button>
                    </Col>
                </Row>
            </Container>
          
          
        </>}
      />
      <Acordion
        key="1"
        title="Teclado - Partituras"
        body={
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        }
      />
    </>
  );
};

export default Maestro;
