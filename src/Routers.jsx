import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicio from './pages/Home'
import Partituras from './pages/Partituras'
import Maestro from './pages/Maestro'
import Contato from './pages/Contato'
import Teste from './pages/Teste'
import Login from './pages/Login'
import Agenda from './pages/Agenda'


const Routers = () => {
    return (
        <>
                <Container className='md-3'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Inicio />} />
                        <Route path="/maestro" element={<Maestro />} />
                        <Route path="/partituras" element={<Partituras />} />             
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/agenda" element={<Agenda />} />
                        <Route path="/teste" element={<Teste />} />
                        
                    </Routes>
                </Container>            
        </>
    )
}

export default Routers
