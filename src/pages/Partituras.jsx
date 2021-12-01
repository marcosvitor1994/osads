import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Box from '../components/Box'

const Partituras = () => {
    return (
        <>
            <p>Partituras</p>
            
            <Row>
                <Col md={3}>
                    <Box 
                    title="Violino" 
                    img="https://www.superprof.com.br/blog/wp-content/uploads/2018/11/encontrar-professor-de-violino-1060x707.jpg" 
                    text="Partituras de violino" 
                    botton="Acesse Agora" 
                    link="/home" 
                    />
                </Col>
                <Col md={3}>
                    <Box
                    title="Maestro"
                    img="https://i0.wp.com/www.sabra.org.br/site/wp-content/uploads/2017/09/voce-entende-o-maestro-e-seus-gestos-20170920155615.jpg?fit=1920%2C1280&ssl=1"
                    text="Partitura Maestro"
                    link="/maestro"
                    botton="Acesse Agora"
                    />
                </Col>
            </Row>
            
            
            
        
        
        
        </>
    )
}

export default Partituras
