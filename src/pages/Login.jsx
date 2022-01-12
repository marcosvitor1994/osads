import React, {useState} from "react";
import { Form, Button, Container, Row, Col, Card, FloatingLabel } from "react-bootstrap";
import PropTypes from 'prop-types'

const Login = () => {


  async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
  }

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState([])
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


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
                        onChange={e => setUserName(e.target.value)}
                        type="email"
                        placeholder="name@example.com"
                      />
                    </FloatingLabel>
                    <FloatingLabel

                      controlId="floatingPassword"
                      label="Senha"
                    >
                      <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </FloatingLabel>
                  </>
                  <br />
                  <Button variant="primary" type="submit" onClick={handleSubmit}>
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
Login.propTypes = { setToken: PropTypes.func.isRequired }
export default Login;
