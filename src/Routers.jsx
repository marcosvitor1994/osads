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
import GerentePartitura from './pages/Gerente/partituras'
import GerenteAlunos from './pages/Gerente/alunos'
import GerenteMusicos from './pages/Gerente/musicos'
import GerenteContato from './pages/Gerente/GerenciarContatos'
import GerenciarAgenda from './pages/Gerente/GerenciarAgenda'
import FacaParte from './pages/FacaParte'


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

                        <Route path="/facaparte" element={<FacaParte />} />
                        <Route path="/contato" element={<Contato />} />
                        <Route path="/agenda" element={<Agenda />} />
                        <Route path="/teste" element={<Teste />} />

                        <Route path="/orquestra/agenda" element={<GerenciarAgenda />} />
                        <Route path="/orquestra/partituras" element={<GerentePartitura />} />
                        <Route path="/orquestra/contatos" element={<GerenteContato />} />
                        <Route path="/orquestra/musicos" element={<GerenteMusicos />} />
                        <Route path="/orquestra/alunos" element={<GerenteAlunos />} />

                    </Routes>
        </>
    )
}

export default Routers
