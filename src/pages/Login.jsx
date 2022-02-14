import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Col, Container, Row } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && senha.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      senha: senha
    }
    login(data)
  }

  const login = data => {

    console.clear();
    console.log(data);  

    axios.post('https://3000-indigo-platypus-sszf5uhk.ws-us31.gitpod.io/login', {data})
        .then((result) => {
          
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('_role', result.data.user._role)
          sessionStorage.setItem('email', result.data.user.email)
          console.log('Resultado: ', result.data);

          navigate('/home')

        }).catch((error) => {
          
          alert(error.response.data.message);
        })
  }

  return (
    <>
      
      <Container>
        <br />
        <Row className="row d-flex justify-content-center">
            <Col className="col-md-6">

              <Form onSubmit={handleSubmit}>
                <Form.Group  controlId="email" className="form-group">
                  <Container>
                    <Row>
                      <Col md={2}>
                        <Form.Label>Email:</Form.Label>
                      </Col>
                      <Col md={10}>
                        <Form.Control autoFocus type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                      </Col>
                    </Row>
                  </Container>                 
                </Form.Group>
        <br />
                <Form.Group controlId="password" className="form-group">
                  <Container>
                    <Row>
                      <Col md={2}>
                        <Form.Label>Senha:</Form.Label>
                      </Col>
                      <Col md={10}> 
                        <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>
                      </Col>
                    </Row>
                  </Container>
                </Form.Group>
                <br />
                <Container>
                  <Row className="row d-flex justify-content-center">
                    <Col md={4}>
                      <div className="d-grid">
                        <Button type="submit" disabled={!validateForm()}>
                          Entrar
                        </Button>
                        
                      </div>
                    </Col>
                  </Row>
                </Container>
                
              </Form>
            
            </Col>

        </Row>

      </Container>
    </>
    
    
  );
}
