import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import { useNavigate } from "react-router";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import ApiBase from "../services/ApiBase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && senha.length > 0;
  }

  const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
      setPasswordShown(!passwordShown);
  };

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
    
    ApiBase.post('/login', {data})
        .then((result) => {
          
          console.log(result)
          sessionStorage.setItem('_id', result.data.user._id)
          sessionStorage.setItem('token', result.data.token)
          sessionStorage.setItem('instrumento', result.data.user.instrumento)
          sessionStorage.setItem('_role', result.data.user._role)
          sessionStorage.setItem('email', result.data.user.email)
          console.log('Resultado: ', result.data);

          if (result.data.user._role === 'Musico'){
            window.location.reload(navigate('/partituras'))
            if (result.data.user.instrumento === 'Violino1'){
              sessionStorage.setItem('pasta', '1bHqYWKtmZlENRtiD140CHeOMt4-NW4q9')
            }
            else if (result.data.user.instrumento === 'Trompete2'){
              sessionStorage.setItem('pasta', '1N21JEvSL0z29Ag5XLOAJUvKV4kbtOKQF')
            }
          }
          else if (result.data.user._role === 'Admin'){
            window.location.reload(navigate('/orquestra/partituras'))
          }
          
        }).catch((error) => {
          alert(error.response.data.message)
        })
       
  }

  return (
    <>
      
      <Container>
        <br />
        <br />
        <br />
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
                      <InputGroup className="mb-3">
                        <Form.Control type={passwordShown ? "text" : "password"} value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha"/>
                        <Button variant="outline-secondary" id="button-addon2" onClick={togglePassword}>Mostrar</Button>
                      </InputGroup>
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
