import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom'

const appStyle = {
    height: '350px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    width: '450px',
    display: 'block'
};

const labelStyle = {
    margin: '15px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '5px', 
    border: '1px solid #bfbfbf',
    borderRadius: '3px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label style={labelStyle} >{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
});

const Form = ({onSubmit}) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            email: usernameRef.current.value,
            senha: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      
      <form style={formStyle} onSubmit={handleSubmit} >
        
        <Field ref={usernameRef} label="Email:" type="email" />
        <Field ref={passwordRef} label="Senha:" type="password" />
        <div>
          <button style={submitStyle} type="submit">Entrar</button>
        </div>
      </form>
    );
};

const App = () => {
  const navigate = useNavigate();


    const handleSubmit = data => {
        
        console.clear();
        console.log(data)       
        
        axios.post('https://3000-indigo-platypus-sszf5uhk.ws-us28.gitpod.io/login', {data})
        .then((result) => {
          
          localStorage.setItem('token', result.data.token)
          sessionStorage.setItem('token', result.data.token)
          localStorage.setItem('_role', result.data.user._role)
          sessionStorage.setItem('_role', result.data.user._role)
          localStorage.setItem('email', result.data.user.email)
          sessionStorage.setItem('email', result.data.user.email)
          console.log('Resultado: ', result.data);

          navigate('/partituras')

        }).catch((error) => {
          alert(error.response.data.message);
        })
    };
    return (
      <div style={appStyle}>
        
        <Form onSubmit={handleSubmit} />
      </div>
    );
};

export default App;