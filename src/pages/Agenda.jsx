import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";


const Agenda = () => {
  const [eventis, setEventis] = useState("");
  
  useEffect(() => {

    axios.get('https://3000-indigo-platypus-sszf5uhk.ws-us31.gitpod.io/events', {headers: {
      'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTAyNzk0YWRiYzRhMDljZmNlMGFjNSIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY0NDYwMDkwMywiZXhwIjoxNjQ0NjAwOTAzfQ.Y0Us8rmtYVlVuHRdq3FQnrgmanfooYuT7FbZioFYQSQ'
    }}).then((result) => {
      setEventis(result.data.events)
    }).catch((error) => {      
      console.log(error)
    })
  },[])

  const eventos = {
    events: eventis,
    color: "yellow",
    textColor: "black",
  };
  
  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }


  return (
    <>
    <br />

    <Container>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <Card className="text-center">
            <Card.Header>EVENTOS</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                <Container>
                  <Row>
                     
                            <Col md={6}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />                       
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>
                            </Col>
                            <Col>
                              <Button variant="primary" type="submit">
                                Submit
                              </Button>
                            </Col>
                         
                  </Row>
                </Container>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        
        </Col>
      </Row>
    </Container>
    <br />
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <FullCalendar
              timeZone="UTC-3"
              locale="br"
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              eventContent={renderEventContent}
              events={eventos}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
