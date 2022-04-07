import React, { useState } from 'react'
import { Button, Form, Row, Col, Container, InputGroup, FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

const PreCadastroMusico = () => {
    
    const { register } = useForm()
    const navigate = useNavigate();


    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        novoEvento(event)

      }
        setValidated(true)
      
    };

    function novoEvento (props){
        const pre = props
        navigate('/teste2', {state: {pre}})
    }

    
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
  
  
    return (
        <>  
            <br />
            <br />
            <Container>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                            <Form.Group controlId="validationCustom01">
                                <Form.Label>Insira o Email </Form.Label>
                                <FormControl required type="email" placeholder="Email" {...register("email")} 
/>
                                <Form.Control.Feedback type="invalid">
                                    Por favor insira o email corretamente. 
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            </Row>
                            <Row className="mb-3">
                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Senha</Form.Label>
                                <FormControl type="password" placeholder="Senha" {...register("senha")} required />
                                <Form.Control.Feedback type="invalid">
                                    Por favor insira a senha.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="validationCustom03">
                                <Form.Label>Inserir novamente a senha</Form.Label>
                                    <InputGroup className="mb-3">
                                        <FormControl 
                                        type={passwordShown ? "text" : "password"}
                                        {...register("senha2")} 

                                        placeholder="Repetir Senha" required />
                                        
                                        <Button variant="outline-secondary" id="button-addon2" onClick={togglePassword} >
                                            Mostrar
                                        </Button>
                                        <Form.Control.Feedback type="invalid">
                                            As senhas não são iguais.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                
                                
                                
                            </Form.Group>

                            
                            </Row>
                            
                            <Button type="submit" onChange={handleSubmit}>Cadastrar</Button>
                        </Form>
                        
                    </Col>
                </Row>
            </Container>
            
        </>
  )
}

export default PreCadastroMusico


