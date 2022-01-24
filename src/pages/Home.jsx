import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




const Home = () => {
    const navigate = useNavigate();

    const teste = () => {
        navigate('/partituras')
    }

    return (
        <>
            <p>HOME</p>
            <Button onClick={teste} className='btn btn-sucess'>Partituras</Button>      
        </>
    )
}

export default Home
