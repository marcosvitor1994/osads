import React  from 'react'
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router';
import ApiBase from '../services/ApiBase';
import { mask, unMask } from 'remask'
import apiCep from '../services/ApiCep';


const Teste = () => {

  //mask
  const { register, setValue, handleSubmit } = useForm()
  function handleChange(event) {
    const name = event.target.name
    const mascara = event.target.getAttribute('mask')

    let valor = unMask(event.target.value)
    valor = mask(valor, mascara)

    setValue(name, valor)
  }

  // alimentando pré-informações
  const {state} = useLocation();
  console.log(state.pre)  

    function addMusico(props) {
      const envioMusico = {
          nome: `${props.nome}`,
          sexo: `${props.sexo}`,
          email: `${props.email}`,
          dataNascimento: `${props.dataNascimento}`,
          telefone: `${props.telefone}`,
          endereco: {
              cidade: `${props.cidade}`,
              logradouro: `${props.logradouro}`,
              estado: `${props.estado}`,
              cep: `${props.cep}`,
              numero: `${props.numero}`,
              bairro: `${props.bairro}`,
              complemento: `${props.complemento}`,
              },
          senha: `${props.senha}`,        
          instrumento: `${props.instrumento}`      
      };
      console.log(envioMusico);
  
      ApiBase.post(`/musicos`, {envioMusico}).then((response) =>
          alert("Músico adicionado com sucesso!", window.location.reload(false))
        ).catch((error) => {
          console.error("Error: ", error);
        })
      }   


      //CEP

      function handleCep(event) {

        const valor = unMask(event.target.value)

        apiCep.get(`/ws/${valor}/json/`).then(resultado => {
            const endereco = resultado.data
            console.log(endereco)

            setValue('logradouro', endereco.logradouro)
            setValue('complemento', endereco.complemento)
            setValue('uf', endereco.uf)
            setValue('cidade', endereco.localidade)
            setValue('bairro', endereco.bairro)
        })
      }
      
     
     //consumindo os dados
    function enviarDados(dados) {

      addMusico(dados)

    }
  


  return (
    <>

    <br />

        <Container>
          <Row>
            <Col>

              <Card>
                    <Card.Header align="left">Cadastro Completo</Card.Header>
                    <Card.Body align="left">
                      <Card.Text>
                        <Form onSubmit={handleSubmit}> 
                          <Container>
                            <Row>
                              <Col md={6}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Nome</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Nome"
                                    onChange={handleChange}
                                    {...register("nome")}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                  <Form.Label>Email</Form.Label>
                                  <InputGroup className="mb-3">
                                      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                      <FormControl
                                      type="email"
                                      placeholder="exemplo@email.com"
                                      aria-label="Email"
                                      aria-describedby="basic-addon1"
                                      value={state.pre.email}
                                      onChange={handleChange}
                                      {...register("email")}

                                      />
                                  </InputGroup>
                              </Col>
                              
                              <Col md={3}>
                                  <Form.Label>Telefone</Form.Label>
                                  <InputGroup className="mb-3">
                                      <FormControl
                                      type="text" 
                                      {...register("telefone")} 
                                      mask="(99) 99999-9999" 
                                      onChange={handleChange}
                                      placeholder="(00) 00000-0000"
                                      required
                                      />
                                  </InputGroup>
                              </Col>
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                  required
                                >
                                  <Form.Label>Instrumento</Form.Label>
                                  <Form.Select aria-label="Default select example"
                                    onChange={handleChange}
                                    {...register("instrumento")}>
                                      <option>Selecione o Instrumento</option>
                                      <option value="Violino1">Violino 1</option>
                                      <option value="Trompete2">Trompete 1</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Data de Nascimento</Form.Label>
                                  <Form.Control
                                    hasValidation
                                    type="date"
                                    onChange={handleChange}
                                    {...register("dataNascimento")}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Sexo</Form.Label>
                                  <Form.Select aria-label="Default select example"
                                    onChange={handleChange}
                                    {...register("sexo")}>
                                      <option>Selecione o Sexo</option>
                                      <option value="F">F</option>
                                      <option value="M">M</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col md={6}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>CEP</Form.Label>
                                  <Form.Control
                                      type="text"
                                      {...register("cep")}
                                      mask="99.999-999"
                                      placeholder='CEP'
                                      onChange={handleChange}
                                      onBlur={handleCep}
                                  />
                                </Form.Group>
                              </Col>
                              
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Cidade</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Cidade"
                                    
                                    {...register("cidade")}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Estado</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Estado"
                                    {...register("uf")}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={9}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Logradouro</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Logradouro"
                                    {...register("logradouro")}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={3}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Número</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Número"
                                    {...register("numero")}
                                  />
                                </Form.Group>
                              </Col>
                              <Col md={4}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Bairro</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Bairro"
                                    {...register("bairro")}
                                  />
                                </Form.Group>
                              </Col>                              
                              <Col md={8}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Complemento</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Complemento"
                                    {...register("complemento")}
                                  />
                                </Form.Group>
                              </Col>
                              

                              <Col md={5} />
                              <Col md={2} align='center'>
                                <br />
                                <Button variant="primary" onClick={handleSubmit(enviarDados)}>
                                  Cadastrar
                                </Button>
                              </Col>
                            </Row>
                          </Container>
                        </Form>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      orquestra muito mais que música ...
                    </Card.Footer>
              </Card>
            
            </Col>
          </Row>
        </Container>
        
    
    </>
  )
}

export default Teste

