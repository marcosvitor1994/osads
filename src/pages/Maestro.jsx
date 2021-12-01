import React from 'react'
import { Accordion, Form } from 'react-bootstrap'
import Acordion from '../components/Acordion'

const Maestro = () => {
    return (
        <>
            <p>Maestro</p>
            <Acordion 
                key="0"
                title="Violino - Partituras"
                body={<Form.Group controlId="formFile" className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>}
                    
            />
            <Acordion 
                key="1"
                title="Teclado - Partituras"
                body={<Form.Group controlId="formFile" className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>}
                    
            />

            
        </>
    )
}

export default Maestro
