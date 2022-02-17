import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'


const Home = () => {
  
    
    return (
        <>
            <br />
            <Container>
                <Row>
                  
                    <Col>
                        <Carousel variant="ligth">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://blog.fritzdobbert.com.br/wp-content/uploads/2016/12/Musica-Reparadora1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://theatromunicipal.org.br/wp-content/uploads/2019/09/OER_Noticias-970x647.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="https://orquestrandobrasil.com.br/wp-content/uploads/2019/05/campinas-702x459.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> 
                    </Col>
                </Row>
            </Container>
            <br />
                
        </>
    )
}

export default Home
