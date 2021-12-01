import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicio from './pages/Home'
import Partituras from './pages/Partituras'


const Routers = () => {
    return (
        <>
                <Container className='md-3'>
                    <Routes >
                        <Route path="/home" element={<Inicio />} />
                        <Route path="/partituras" element={<Partituras />} />             
             
                    </Routes>
                </Container>            
        </>
    )
}

export default Routers
