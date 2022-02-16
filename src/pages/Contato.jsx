import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from "react-router";
import ApiBase from '../services/ApiBase';


const Contato = () => {
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const testeContato = {
        email: email,
        telefone: telefone,
        message: mensagem
        }
        novoEvento(testeContato)
    }

    function novoEvento (props){
        const contato = props
        console.log(props)
        ApiBase.post(`/contato`, {contato})
        .then((response) => alert('Contato enviado! Aguarde e entraremos em contato.', navigate('/home')))
        .catch((error)=>{
        console.error('Error: ', error)
        })  


    }
    
    
    
    
    return (
        <>
        <br />
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>Entre em contato com a orquestra ...</Card.Header>
                            <Card.Body align="left">
                            <Card.Text>

                                <Form onSubmit={handleSubmit}>

                                <Container>
                                <Row>
                                    
                                            <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>                       
                                            </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Telefone</Form.Label>
                                                <Form.Control type="number" value={telefone} placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} />
                                            </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Mensagem</Form.Label>
                                                <Form.Control as="textarea" placeholder="Mensagem" value={mensagem} rows={3} onChange={(e) => setMensagem(e.target.value)} />
                                            </Form.Group>
                                            </Col>
                                            <Col>
                                                <Button variant="primary" type="submit">
                                                    Enviar
                                                </Button>
                                            </Col>

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

export default Contato
