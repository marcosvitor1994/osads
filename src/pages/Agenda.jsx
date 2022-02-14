import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Col, Container, Row,  } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";


const Agenda = () => {
  const [eventis, setEventis] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    axios.get('https://3000-indigo-platypus-sszf5uhk.ws-us31.gitpod.io/events', {headers: {
      'Authorization' : `Bearer ${token}`
    }}).then((result) => {
      setEventis(result.data.events)
      
    }).catch((error) => {      
      console.log(error)
    })
  },[])

  const eventos = {
    events: eventis,
    description: 'Ensaio',
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
