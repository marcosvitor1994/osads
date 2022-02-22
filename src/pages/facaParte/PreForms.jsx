import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from "react-router";



const PreForms = () => {
   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senha1, setSenha1] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const testeCadastro = {
        email: email,
        senha: senha
        }
        if (senha === senha1){
            preCadastro(testeCadastro)
        }
        else{
            return alert('Senha não confere!')
        }
    }

    function preCadastro (props){
        const pre = props
        console.log(pre)
        navigate('/teste2', {state: {pre}})
    }
    
    //mostrar senha
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    
        
    

  return (
    <>
    
    <br />
            <Container>
                <Row>
                    <Col md={2} />
                    <Col md={8}>
                        <Card>
                            <Card.Header>Cadastro</Card.Header>
                            <Card.Body align="left">
                            <Card.Text>

                                <Form onSubmit={handleSubmit}>

                                <Container>
                                <Row>
                                            
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>                       
                                            </Form.Group>
                                                <Form.Label>Senha</Form.Label>
                                                <InputGroup className="mb-3">
                                                    
                                                    <FormControl
                                                        type="password"
                                                        value={senha}
                                                        placeholder="Senha"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="basic-addon1"
                                                        onChange={(e) => setSenha(e.target.value)}
                                                        required
                                                    />
                                                    
                                                </InputGroup>
                                                <Form.Label>Confirmar Senha</Form.Label>
                                                <InputGroup className="mb-3">
                                                    
                                                    <FormControl
                                                        type={passwordShown ? "text" : "password"}
                                                        value={senha1}
                                                        placeholder="Senha"
                                                        aria-label="Example text with button addon"
                                                        aria-describedby="basic-addon1"
                                                        onChange={(e) => setSenha1(e.target.value)}
                                                        required
                                                    />
                                                    <Button variant="outline-secondary" id="button-addon2" onClick={togglePassword}>
                                                        Mostrar
                                                    </Button>
                                                </InputGroup>
                                                <Button variant="primary" type="submit">
                                                    Enviar
                                                </Button>

                                </Row>
                                </Container>

                                </Form>

                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">orquestra ... muito mais que música ...</Card.Footer>
                        </Card>


                    </Col>
                </Row>
            </Container>
    
    </>
  )
}

export default PreForms


