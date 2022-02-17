import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Acordion from "../components/Acordion";

const Partituras = () => {

  const [partituras, setPartituras] = useState([]);
  const [instrumento, setInstrumento] = useState([]);

  useEffect(() => {
    const idpasta = sessionStorage.getItem('pasta')  
    const pasta = {folder: `${idpasta}`} //1bHqYWKtmZlENRtiD140CHeOMt4-NW4q9

    axios.post('https://uploadFiles.marcosvitor6.repl.co/upload/list', {pasta}).then((result) => {
      console.log(result.data)
      setPartituras(result.data)
      setInstrumento(sessionStorage.getItem('instrumento'))
    }).catch((error) => {      
      console.log(error)
    })
  },[])

  return (
    <>
      <Container>      
        <Row>
          <Col>

          <br />
          <Acordion title={`Partituras | ${instrumento}`} body={
            <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Download</th>
                <th>Visualizar</th>
              </tr>
            </thead>
            <tbody align='center'>
              {partituras.map((files) => (
                <tr>
                  <td>{files.name}</td>
                  <td>
                    <a href={`${files.webContentLink}`}><Button className="btn btn-success">DownLoad</Button></a>
                  </td>
                  <td>
                    <a href={`${files.webViewLink}`}><Button className="btn btn-primary">Vizualizar</Button></a>
                  </td>
                  
                </tr>
              ))}
            </tbody>
            </Table>
          }/>
                    

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Partituras;
