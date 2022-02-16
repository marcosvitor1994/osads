import React, { useEffect, useState } from 'react'
import ApiBase from '../../services/ApiBase';

const Profile = () => {

  const [musicos, setMusicos] = useState([]);
    useEffect(() => {
        const id = sessionStorage.getItem('_id')
        const token = sessionStorage.getItem('token')
        ApiBase.get(`/musicos/${id}`, {headers: {
          'Authorization' : `Bearer ${token}`
        }}).then((result) => {
            console.log(result.data)
          setMusicos(result.data)
        }).catch((error) => {      
          console.log(error)
        })
  },[])
  


  return (
    <>
    
        <p>Profile</p>
        <p>{musicos.nome}</p>
    
    </>
  )
}

export default Profile