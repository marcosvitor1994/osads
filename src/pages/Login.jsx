import React from "react";
import { Form, Button, Container, Row, Col, Card, FloatingLabel } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <br />

      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card className="bg-dark ">
              <Card.Body>
                <Card.Text>
                  <>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Endereço de Email"
                      className="mb-3"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Senha"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </>
                  <br />
                  <Button variant="primary" type="submit">
                      Entrar
                    </Button>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
