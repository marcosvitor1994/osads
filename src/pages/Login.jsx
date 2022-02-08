import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && senha.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      senha: senha
    }
    login(data)
  }

  const login = data => {

    console.clear();
    console.log(data);  

    axios.post('https://3000-indigo-platypus-sszf5uhk.ws-us30.gitpod.io/login', {data})
        .then((result) => {
          
          localStorage.setItem('token', result.data.token)
          sessionStorage.setItem('token', result.data.token)
          localStorage.setItem('_role', result.data.user._role)
          sessionStorage.setItem('_role', result.data.user._role)
          localStorage.setItem('email', result.data.user.email)
          sessionStorage.setItem('email', result.data.user.email)
          console.log('Resultado: ', result.data);

          navigate('/home')

        }).catch((error) => {
          
          alert(error.response.data.message);
        })
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </Form.Group>
        <br />
        <Button block type="submit" disabled={!validateForm()}>
          Entrar
        </Button>
      </Form>
    </div>
  );
}
