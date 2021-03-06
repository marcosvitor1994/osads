import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import Acordion from "../../components/Acordion";
import Forms from "../../components/forms";
import ApiBase from "../../services/ApiBase";


const GerenteAlunos = () => {
    
    //Listando Alunos
    const [alunos, setAlunos] = useState([]);
    useEffect(() => {
        const token = sessionStorage.getItem('token')
        ApiBase.get('/alunos', {headers: {
          'Authorization' : `Bearer ${token}`
        }}).then((result) => {
            console.log(result.data.alunos)
            setAlunos(result.data.alunos)
        }).catch((error) => {      
          console.log(error)
        })
      },[])
  

    //modal 
    const [show, setShow] = useState(false);
    const [detalhes, setDetalhes] = useState([])

    const handleClose = () => {
      setShow(false) 
      setDetalhes(0)
    }
    const handleShow = (props) => {
      const id = props
      console.log(id)
      const token = sessionStorage.getItem('token')
      ApiBase.get(`/alunos/${id}`, {headers: {
          'Authorization' : `Bearer ${token}` }})
          .then((response) => {
              console.log(response.data.aluno)
              setDetalhes(response.data.aluno)
          })
          .catch((error)=>{
          console.error('Error: ', error)
          })  
      setShow(true);
    }
  
  
  //novo músico
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [cidade, setCidade] = useState("");
  const [quadra, setQuadra] = useState("");
  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [instrumento, setInstrumento] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    const novoAluno = {
        nome: nome,
        email: email,
        senha: senha,
        telefone: telefone,
        sexo: sexo,
        cidade: cidade,
        quadra: quadra,
        cep: cep,
        estado: estado,
        numero: numero,
        complemento: complemento,
        instrumento: instrumento,
        dataNascimento: dataNascimento,
        
    };
    addAluno(novoAluno);
  }

  function addAluno(props) {
    const envioAluno = {
        nome: `${props.nome}`,
        sexo: `${props.sexo}`,
        email: `${props.email}`,
        dataNascimento: `${props.dataNascimento}`,
        telefone: `${props.telefone}`,
        endereco: {
            cidade: `${props.cidade}`,
            quadra: `${props.quadra}`,
            estado: `${props.estado}`,
            cep: `${props.cep}`,
            numero: `${props.numero}`,
            complemento: `${props.complemento}`,
            },
        senha: `${props.senha}`,        
        instrumento: `${props.instrumento}`      
    };
    console.log(envioAluno);

    ApiBase.post(`/alunos`, {envioAluno}).then((response) =>
        alert("Aluno adicionado com sucesso!", window.location.reload(false))
      ).catch((error) => {
        console.error("Error: ", error);
      })
    }

    //excluir músico
    const excluir = (id) =>{
        console.log(id)
        const token = sessionStorage.getItem('token')
        ApiBase.delete(`/alunos/${id}`, {headers: {
          'Authorization' : `Bearer ${token}` }})
        .then((response) => alert(response.data.message, window.location.reload(false)))
        .catch((error)=>{
        console.error('Error: ', error)
        })  
      }

  return (
    <>
      <br />
      <p>Gerente de Alunos</p>
      <br />
      <Container>
        <Row>
          <Col>
            <Acordion
              title="Adicionar novo músico"
              body={
                <Card>
                  <Card.Header align="left">Novo Aluno</Card.Header>
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
                                  value={nome}
                                  onChange={(e) => setNome(e.target.value)}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Email</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    <FormControl
                                    type="email"
                                    placeholder="exemplo@sistema.com"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={6}>
                                <Form.Label>Senha</Form.Label>
                                <InputGroup className="mb-3">
                                    
                                    <FormControl
                                        type="password"
                                        value={senha}
                                        placeholder="Senha"
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                    <Button variant="outline-secondary" id="button-addon2">
                                        Mostrar
                                    </Button>
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                                <Form.Label>Telefone</Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    type="text"
                                    placeholder="(00)00000-0000"
                                    aria-label="Email"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                    />
                                </InputGroup>
                            </Col>
                            <Col md={3}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Instrumento</Form.Label>
                                <Form.Select aria-label="Default select example" value={instrumento}
                                  onChange={(e) => setInstrumento(e.target.value)}>
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
                                  type="date"
                                  value={dataNascimento}
                                  onChange={(e) => setDataNascimento(e.target.value)}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={3}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Sexo</Form.Label>
                                <Form.Select aria-label="Default select example" value={sexo}
                                  onChange={(e) => setSexo(e.target.value)}>
                                    <option>Selecione o Sexo</option>
                                    <option value="F">F</option>
                                    <option value="M">M</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col md={3}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Quadra</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Quadra"
                                  value={quadra}
                                  onChange={(e) => setQuadra(e.target.value)}
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
                                  value={numero}
                                  onChange={(e) => setNumero(e.target.value)}
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
                                  value={cidade}
                                  onChange={(e) => setCidade(e.target.value)}
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
                                  value={estado}
                                  onChange={(e) => setEstado(e.target.value)}
                                />
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
                                  placeholder="CEP"
                                  value={cep}
                                  onChange={(e) => setCep(e.target.value)}
                                />
                              </Form.Group>
                            </Col>
                            <Col md={12}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Complemento</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Complemento"
                                  value={complemento}
                                  onChange={(e) => setComplemento(e.target.value)}
                                />
                              </Form.Group>
                            </Col>
                            


                            <br />
                            <Col md={12}>
                              <Button variant="primary" type="submit">
                                Adicionar Aluno
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
              }
            />
            <br />
            <Acordion title="Lista de Alunos" body={
                <Table responsive striped bordered hover>
                <thead align='left'>
                  <tr>
                    <th>Nome</th>
                    <th>Instrumento</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Vizualizar</th>
                    
                  </tr>
                </thead>
                <tbody align='left'>
                  {alunos.map((files) => (
                    <tr key={files._id}>
                      <td>{files.nome}</td>
                      <td>{files.instrumento}</td>
                      <td>{files.telefone}</td>
                      <td>{files.email}</td>
                      <td>
                        <Button className="btn btn-success" onClick={() => handleShow(`${files._id}`)}>Visualizar</Button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
                </Table>
            }/>
            <br />
            <Acordion title="Contato de novos alunos" />
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Dados Aluno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {detalhes._id && (
            <Forms onSubmit={handleSubmit} Header={`${detalhes.nome}`} 
            nome={`${detalhes.nome}`} 
            email={`${detalhes.email}`}
            senha={`${detalhes.senha}`}
            telefone={`${detalhes.telefone}`}
            instrumento={`${detalhes.instrumento}`}
            dataNascimento={`${detalhes.dataNascimento}`}
            sexo={`${detalhes.sexo}`}
            quadra={`${detalhes.endereco.quadra}`}
            numero={`${detalhes.endereco.numero}`}
            estado={`${detalhes.endereco.estado}`}
            cidade={`${detalhes.endereco.cidade}`}
            cep={`${detalhes.endereco.cep}`}
            complemento={`${detalhes.endereco.complemento}`}
            botão='Atualizar informações'

            />
            )
          }
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="danger" onClick={() => excluir(`${detalhes._id}`)}>
            Excluir Aluno
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GerenteAlunos;