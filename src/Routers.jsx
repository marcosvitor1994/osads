import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Inicio from './pages/Home'
import Partituras from './pages/Partituras'
import Maestro from './pages/Maestro'
import Contato from './pages/Contato'
import Teste from './pages/Teste'
import Login from './pages/Login'
import Agenda from './pages/Agenda'
import PrivateRoute from './components/PrivateRoute'


const Routers = () => {
    
    return (
        <>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Inicio />} />
                        <Route path="/maestro" element={<Maestro />} />
                        <Route path="/partituras"  element={<PrivateRoute />}>
                            <Route path="/partituras" element={<Partituras />} />
                        </Route>
                                 
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/agenda" element={<Agenda />} />
                        <Route path="/teste" element={<Teste />} />
                    </Routes>
        </>
    )
}

export default Routers
